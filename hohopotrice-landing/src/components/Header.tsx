import { SITE } from '@/lib/site';
import { ButtonLink } from './ButtonLink';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-xl font-black tracking-tight text-brand-700">
          <span aria-hidden className="inline-block h-6 w-6 rounded-full border-4 border-brand-500 bg-white" />
          {SITE.name}
        </a>
        <nav aria-label="주요 메뉴" className="hidden items-center gap-8 text-sm font-semibold text-charcoal/80 md:flex">
          <a href="#why" className="hover:text-brand-600">
            달라진 점
          </a>
          <a href="#features" className="hover:text-brand-600">
            호호솥밥의 약속
          </a>
          <a href="#faq" className="hover:text-brand-600">
            자주 묻는 질문
          </a>
        </nav>
        <ButtonLink href={SITE.orderUrl} size="md">
          주문하기
        </ButtonLink>
      </div>
    </header>
  );
}
