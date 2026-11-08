import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white pb-24 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-charcoal/60 sm:flex-row sm:px-6">
        <p className="text-lg font-black tracking-tight text-brand-700">{SITE.name}</p>
        <nav aria-label="푸터 메뉴" className="flex gap-6 font-semibold">
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
        <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
