import { SITE } from '@/lib/site';
import { ButtonLink } from './ButtonLink';

export function CtaBanner() {
  return (
    <section id="order" className="px-4 pb-20 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand-700 px-6 py-14 text-center text-white shadow-xl sm:px-12 sm:py-16">
        <h2 className="mb-4 text-3xl font-black leading-snug tracking-tight sm:text-4xl">
          오늘 저녁은
          <br className="sm:hidden" /> 갓 지은 호호솥밥으로
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-lg text-white/85">{SITE.tagline}.</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={SITE.orderUrl} variant="light">
            호호솥밥 주문하기
          </ButtonLink>
          {SITE.phone ? (
            <a
              href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              전화 문의 {SITE.phone}
            </a>
          ) : null}
        </div>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-brand-200">
          <li>주문 즉시 만드는 솥밥</li>
          <li aria-hidden className="hidden sm:list-item">·</li>
          <li>엄선한 프리미엄 재료</li>
          <li aria-hidden className="hidden sm:list-item">·</li>
          <li>직접 개발한 수제 소스</li>
        </ul>
      </div>
    </section>
  );
}
