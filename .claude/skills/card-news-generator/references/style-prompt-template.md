# Style anchor and per-slide prompt examples

## Base style anchor (append to every one of the 7 prompts, verbatim)

```
modern city skyline with tall skyscrapers, blue color palette (navy, sky blue,
cyan accents), clean minimal card-news graphic design, cohesive flat/gradient
illustration style, consistent lighting and composition across a 7-slide set
```

## How to combine it with slide content

Pattern: `[slide-specific visual subject], [base style anchor]`

Worked example for a topic like "재택근무 생산성 팁" (remote-work productivity
tips):

1. **Title/hook slide** — hero composition, skyline as the main subject:
   `bold title card, dramatic wide shot of a blue-toned city skyline at dusk
   with tall skyscrapers, modern city skyline with tall skyscrapers, blue
   color palette (navy, sky blue, cyan accents), clean minimal card-news
   graphic design, cohesive flat/gradient illustration style, consistent
   lighting and composition across a 7-slide set`

2. **Body slide (point 1 of 5)** — foreground subject changes per point,
   skyline stays as backdrop:
   `a person working calmly at a laptop by a window, city skyline with tall
   skyscrapers visible through the window, modern city skyline with tall
   skyscrapers, blue color palette (navy, sky blue, cyan accents), clean
   minimal card-news graphic design, cohesive flat/gradient illustration
   style, consistent lighting and composition across a 7-slide set`

3. **Body slides 2–5** — same pattern, new foreground subject per point
   (a clock/calendar icon for time-blocking, a checklist for task planning,
   etc.), same anchor appended every time.

4. **Closing/CTA slide** — echo the title slide's composition (same skyline
   framing) so slide 7 visually bookends slide 1, signaling "the end" of
   the set.

## Why repeat the full anchor instead of a short tag

`generate_image_batch` submits all 7 requests in parallel with no shared
seed or reference image between them, so nothing else keeps the set visually
related. The repeated, fairly detailed anchor text is what makes an image
model converge on a similar palette/composition across independent calls —
a short tag like "blue city style" is too vague and tends to produce 7
images that don't obviously belong together.
