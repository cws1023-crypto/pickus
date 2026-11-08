export function BeforeAfter() {
  return (
    <section id="why" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mx-auto mb-12 max-w-2xl text-center text-3xl font-black leading-snug tracking-tight sm:text-4xl">
          솥밥은 특별한 날에만?
          <br />
          <span className="text-brand-600">이제는 일상으로</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl bg-cream p-8 shadow-xl shadow-black/5 sm:p-10">
            <p className="mb-3 text-sm font-bold text-charcoal/60">이전에는</p>
            <h3 className="mb-3 text-2xl font-black">특별한 날의 건강한 한 끼</h3>
            <p className="leading-relaxed text-charcoal/75">
              영양가 가득한 솥밥은 특별한 날에나 찾아 먹던 메뉴였습니다.
            </p>
          </article>
          <article className="rounded-3xl bg-brand-600 p-8 text-white shadow-xl shadow-brand-600/20 sm:p-10">
            <p className="mb-3 text-sm font-bold text-brand-100">호호솥밥은</p>
            <h3 className="mb-3 text-2xl font-black">일상에서도, 집에서도 편하게</h3>
            <p className="leading-relaxed text-white/90">
              일상생활이나 집에서도 편하게 드실 수 있도록, 합리적인 가격으로 만들었습니다.
            </p>
          </article>
        </div>
        <p className="mt-8 text-center text-lg font-bold text-charcoal/80">
          그 비결은 아래 세 가지 약속에 있습니다.
        </p>
      </div>
    </section>
  );
}
