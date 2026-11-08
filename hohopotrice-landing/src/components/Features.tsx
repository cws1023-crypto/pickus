import Image from 'next/image';
import { FEATURES } from '@/lib/site';

export function Features() {
  return (
    <section id="features" className="bg-brand-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-3 text-center text-sm font-bold text-brand-600">호호솥밥의 약속</p>
        <h2 className="mb-16 text-center text-3xl font-black tracking-tight sm:text-4xl">
          맛과 정성, 세 가지를 지킵니다
        </h2>
        <div className="space-y-16 sm:space-y-24">
          {FEATURES.map((f, i) => (
            <article
              key={f.no}
              className={`flex flex-col items-center gap-8 md:gap-14 ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-3xl shadow-xl ring-4 ring-white">
                  <Image
                    src={f.image}
                    alt={f.alt}
                    width={390}
                    height={250}
                    sizes="(min-width: 768px) 480px, 92vw"
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-black text-white">
                    {f.no}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-700">{f.badge}</span>
                </p>
                <h3 className="mb-4 text-2xl font-black leading-snug tracking-tight sm:text-3xl">{f.title}</h3>
                <p className="text-lg leading-relaxed text-charcoal/75">{f.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
