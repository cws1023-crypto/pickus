import { FAQS } from '@/lib/site';

export function Faq() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="mb-3 text-center text-sm font-bold text-brand-600">자주 묻는 질문</p>
        <h2 className="mb-10 text-center text-3xl font-black tracking-tight sm:text-4xl">궁금한 점을 모았습니다</h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-brand-100 bg-white shadow-sm open:shadow-md">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl px-6 py-5 text-lg font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-400/50">
                {f.q}
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xl font-black text-brand-600 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-charcoal/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
