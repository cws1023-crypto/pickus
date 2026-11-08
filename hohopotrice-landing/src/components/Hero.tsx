import Image from 'next/image';
import { SITE } from '@/lib/site';
import { ButtonLink } from './ButtonLink';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-200/50 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-white px-4 py-1.5 text-sm font-bold text-brand-700">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            오직 솥밥 하나에만 전념했습니다
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            특별한 날의 솥밥,
            <br />
            <span className="text-brand-600">이제 오늘 저녁에</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-charcoal/75">
            특별한 날에 영양 가득한 한 끼로 먹던 솥밥을, 일상과 집에서도 편하게 드실 수 있도록 합리적인 가격으로
            만들었습니다.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={SITE.orderUrl}>호호솥밥 주문하기</ButtonLink>
            <ButtonLink href="#features" variant="ghost">
              호호솥밥의 약속 보기
            </ButtonLink>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-charcoal/70">
            <li className="flex items-center gap-2">
              <Dot /> 주문 즉시 만드는 솥밥
            </li>
            <li className="flex items-center gap-2">
              <Dot /> 엄선한 프리미엄 재료
            </li>
            <li className="flex items-center gap-2">
              <Dot /> 직접 개발한 수제 소스
            </li>
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-4 ring-white">
            <Image
              src="/images/premium-ingredients.jpg"
              alt="솥 위에 푸짐하게 올라간 호호솥밥 한 그릇"
              width={390}
              height={250}
              priority
              sizes="(min-width: 768px) 480px, 92vw"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-brand-600 px-5 py-3 text-white shadow-xl sm:-left-6">
            <p className="text-xs font-semibold text-brand-100">주문 즉시 만드는</p>
            <p className="text-lg font-black">갓 지은 솥밥</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-brand-500" />;
}
