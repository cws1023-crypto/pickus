---
name: card-news-generator
description: Generates a 7-slide Korean "카드뉴스" (card news / social carousel) — Korean copy plus 7 matching AI-generated images — from a single topic, with a fixed blue-toned, city-skyscraper-skyline visual identity kept consistent across all 7 slides. Use this whenever the user asks to make/build/write "카드뉴스", a "card news", a 7-slide social carousel, an Instagram/카카오 카드뉴스 세트, or any topic-to-slide-deck request that mentions card news, even if they only give a topic and don't restate the slide count, color, or style — those are the fixed defaults this skill applies. Make sure to trigger this for follow-up requests like "이 주제로 카드뉴스 만들어줘" or "카드뉴스 이미지 다시 만들어줘" too.
---

# Card News Generator (카드뉴스 생성기)

Produces a complete 7-slide 카드뉴스 for a given topic: short Korean copy for
each slide plus a matching image, all sharing one consistent visual identity
so the set reads as a single designed product, not 7 unrelated pictures.

## Fixed identity (do not renegotiate these per run)

These three defaults were locked in with the user and apply to every card
news this skill produces, regardless of topic, unless the user explicitly
asks to change one for this run:

- **Slide count: exactly 7.** Slide 1 = title/hook, slides 2–6 = one content
  point each, slide 7 = closing/summary/CTA. Never pad or trim this — a
  card news with 5 or 9 slides breaks the format the user asked for.
- **Copy tone: blue-family (파란색 계열).** Blue reads as calm, trustworthy,
  professional in Korean social content — write copy in a measured,
  confident register that matches that, not hype-y or exclamation-heavy.
- **Visual style: city skyline with skyscrapers (고층 빌딩이 있는 도시
  스카이라인), blue color palette.** This is the recurring motif that ties
  all 7 images together. Every image prompt must carry it.

If the user's topic is itself about something visually unrelated (e.g. a
recipe, a pet), keep the skyline as a background/atmosphere motif (e.g. a
skyline silhouette behind the subject) rather than dropping it — consistency
across the set matters more than literal topical accuracy in the backdrop.

## Step 1 — Get the topic

If the user already gave a topic/subject in their message, use it directly.
If not, ask what the card news is about (a product, an announcement, tips,
a story, etc.) before doing anything else — everything downstream depends
on it.

## Step 2 — Plan the 7 slides of copy

Write short Korean copy per slide — card news copy is read in a few seconds
per slide, so 1–2 short lines each, never paragraphs. Draft all 7 before
moving to images so the arc holds together (hook → build → close).

ALWAYS structure it as:

```
1. (제목/훅) — 한 줄로 시선을 끄는 제목
2. (내용 1) — 첫 번째 포인트
3. (내용 2) — 두 번째 포인트
4. (내용 3) — 세 번째 포인트
5. (내용 4) — 네 번째 포인트
6. (내용 5) — 다섯 번째 포인트
7. (마무리) — 요약 또는 CTA (예: 문의/구매/저장 유도 한 줄)
```

Keep the register consistent with the blue tone: declarative, confident,
no more than one exclamation point in the whole set. Show this copy plan to
the user (or just proceed if they've clearly asked for a full end-to-end
run) before generating images, since copy is cheap to revise and images are
not.

## Step 3 — Build one base style anchor, reuse it in every prompt

Consistency across 7 independently-generated images comes almost entirely
from repeating the same style description in every prompt — the batch tool
generates all 7 in parallel with no shared reference between them, so the
prompt text is the only thing holding the set together. Compose one anchor
string and append it to all 7 slide prompts verbatim:

> "modern city skyline with tall skyscrapers, blue color palette (navy,
> sky blue, cyan accents), clean minimal card-news graphic design, cohesive
> flat/gradient illustration style, consistent lighting and composition
> across a 7-slide set"

See `references/style-prompt-template.md` for the full anchor text and
worked examples of per-slide prompts combining a slide's content with this
anchor.

Build each of the 7 prompts as: *[what this slide's content needs visually]*
+ *[the anchor above]*. Slide 1's image can lean more skyline-hero/title-card,
slides 2–6 can vary the foreground subject per point while keeping the same
skyline-and-blue backdrop, and slide 7 can echo slide 1's composition to
bookend the set.

If unsure which image model to use, call `models_explore(action:'recommend')`
first — pick one model and use it for all 7 so the rendering style itself
doesn't vary slide to slide.

## Step 4 — Generate all 7 images

Use `generate_image_batch` with all 7 requests in one call (indices 0–6,
matching slide order) rather than 7 separate `generate_image` calls — this
is exactly the "multiple independent prompts, same media type" case that
tool exists for. Then:

1. `jobs_wait` on the returned job IDs until all are terminal.
2. Once every job is terminal, call `show_generation_by_ids` once with all
   7 indexed jobs to display the finished set — never display them one at
   a time.

## Step 5 — Deliver the final output

Present the result as the 7 slides in order, each with its copy line(s)
directly above or beside its image, so the user can review it as the card
news deck it is meant to be — not as a copy block followed by a detached
image gallery.

If the user asks for revisions (reword one slide, regenerate one image,
shift the topic), only redo the affected step — re-planning all 7 slides of
copy because slide 4's image needs a redo wastes their time.
