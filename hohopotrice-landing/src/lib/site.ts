// 호호솥밥 랜딩페이지의 모든 문구와 설정이 모여 있는 파일입니다.
// 문구는 브랜드가 제공한 소개 이미지의 표현만 사용했습니다.
// 가격, 메뉴명, 후기, 매장 정보는 확인되지 않아 넣지 않았습니다.

export const SITE = {
  name: '호호솥밥',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hohopotrice.com',
  // 주문 버튼이 향하는 주소입니다. 주문 페이지가 따로 있으면 환경변수로 바꿔 주세요.
  orderUrl: process.env.NEXT_PUBLIC_ORDER_URL ?? 'https://hohopotrice.com',
  // 전화 문의 번호입니다. 비워 두면 전화 버튼이 나타나지 않습니다. 예: 02-000-0000
  phone: process.env.NEXT_PUBLIC_PHONE ?? '',
  title: '호호솥밥 | 주문 즉시 짓는 갓 지은 솥밥',
  description:
    '오직 솥밥 하나에만 전념한 호호솥밥. 주문 즉시 만드는 갓 지은 솥밥, 엄선한 프리미엄 재료, 직접 개발한 수제 소스를 합리적인 가격으로 만나 보세요.',
  tagline: '특별한 날의 솥밥을 일상으로',
} as const;

export type Feature = {
  no: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const FEATURES: Feature[] = [
  {
    no: '01',
    badge: '갓 지은 솥밥',
    title: '주문 즉시 만드는, 모락모락 김이 나는 솥밥',
    description:
      '주문이 들어오면 그때 만듭니다. 뚜껑을 열면 김이 모락모락 오르는, 갓 지은 솥밥 그대로를 드실 수 있습니다.',
    image: '/images/pot-rice.jpg',
    alt: '나무 주걱으로 갓 지은 솥밥을 떠올리는 모습',
  },
  {
    no: '02',
    badge: '프리미엄 재료',
    title: '전문가의 눈으로 깐깐하게 엄선한 재료',
    description:
      '솥밥 한 그릇의 맛은 재료에서 시작됩니다. 전문가의 눈으로 깐깐하게 고른 프리미엄 재료만 담았습니다.',
    image: '/images/premium-ingredients.jpg',
    alt: '솥 위에 푸짐하게 올라간 솥밥 한 그릇',
  },
  {
    no: '03',
    badge: '수제 소스',
    title: '수많은 연구로 직접 개발한 메뉴별 소스',
    description:
      '메뉴마다 어울리는 맛이 다르기에, 소스도 메뉴에 맞춰 수많은 연구 끝에 직접 개발했습니다.',
    image: '/images/house-sauce.jpg',
    alt: '숟가락으로 수제 소스를 흘려 담는 모습',
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: '호호솥밥은 어떤 브랜드인가요?',
    a: '오직 솥밥 하나에만 전념하는 브랜드입니다. 특별한 날, 영양가 가득한 건강한 한 끼로 먹던 솥밥을 일상생활이나 집에서도 편하게 드실 수 있도록 합리적인 가격으로 만들었습니다.',
  },
  {
    q: '솥밥은 언제 만드나요?',
    a: '주문 즉시 만듭니다. 모락모락 김이 나는 갓 지은 솥밥을 드실 수 있습니다.',
  },
  {
    q: '재료는 어떻게 고르나요?',
    a: '전문가의 눈으로 깐깐하게 엄선한 프리미엄 재료를 사용합니다.',
  },
  {
    q: '소스는 따로 만드나요?',
    a: '네. 수많은 연구를 거쳐 직접 개발한 수제 소스를 메뉴마다 어울리게 준비했습니다.',
  },
];
