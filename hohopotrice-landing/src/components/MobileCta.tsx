import { SITE } from '@/lib/site';
import { ButtonLink } from './ButtonLink';

// 모바일에서 스크롤 위치와 상관없이 주문 버튼이 항상 보이도록 하단에 고정합니다.
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <ButtonLink href={SITE.orderUrl} className="w-full">
        호호솥밥 주문하기
      </ButtonLink>
    </div>
  );
}
