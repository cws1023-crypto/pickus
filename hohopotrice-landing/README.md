# 호호솥밥 랜딩페이지

Next.js 14(App Router) + Tailwind CSS로 만든 단일 페이지 랜딩페이지입니다.

- 카피 프레임워크: BAB (이전 → 이후 → 해결 방법)
- 디자인 스타일: Bold Startup 기반, 브랜드 초록색 적용
- 섹션: 헤더 · 히어로 · 달라진 점 · 세 가지 약속 · FAQ · 주문 CTA · 푸터 · 모바일 고정 주문 버튼

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
```

## 환경변수 (선택)

`.env.example`을 `.env.local`로 복사해서 사용합니다.

| 변수 | 설명 | 기본값 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 배포 주소. canonical, OG, sitemap에 사용 | `https://hohopotrice.com` |
| `NEXT_PUBLIC_ORDER_URL` | 모든 "주문하기" 버튼이 향하는 주소 | `https://hohopotrice.com` |
| `NEXT_PUBLIC_PHONE` | 전화 문의 번호. 비워 두면 전화 버튼이 나타나지 않음 | 비어 있음 |

## 문구 수정

모든 문구는 `src/lib/site.ts`에 모여 있습니다. 문구는 호호솥밥 소개 이미지에 있는 표현만 사용했습니다.
가격, 메뉴명, 후기, 매장 정보는 확인되지 않아 넣지 않았습니다. 확인되면 섹션을 추가해 주세요.

## 배포 전 확인

- `public/images/`의 사진 3장은 소개 이미지(가로 390px)를 잘라 쓴 것이라 해상도가 낮습니다. 원본 사진으로 교체하세요.
- `public/og.png`(1200×630)는 글자만 있는 임시 이미지입니다. 필요하면 메뉴 사진을 넣어 교체하세요.
- 실제 주문 페이지 주소와 전화번호를 환경변수로 지정하세요.
- 구조화 데이터는 FAQPage와 Organization입니다. 메뉴·가격이 확정되면 Restaurant 또는 Product 스키마를 추가하세요.
