/**
 * ServicesSection component
 * Design: Card grid with teal accent, icons, hover effects
 * - Alternating card colors for visual rhythm
 */

const WHITENING_IMAGE =
  "https://private-us-east-1.manuscdn.com/sessionFile/G79eE2zATdQam7JlX5Vmrh/sandbox/h6XJHQvVaf4nMKkdkv19Oz-img-3_1771542409000_na1fn_ZGVudGFsLXdoaXRlbmluZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRzc5ZUUyekFUZFFhbTdKbFg1Vm1yaC9zYW5kYm94L2g2WEpIUXZWYWY0bk1La2RrdjE5T3otaW1nLTNfMTc3MTU0MjQwOTAwMF9uYTFmbl9aR1Z1ZEdGc0xYZG9hWFJsYm1sdVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HCcqagn~FggzmoH~Ea3v3ZfI-iAO4AqRF7oLlY2MD4xYuKJut~k38Mfw90EaJwhpyFFrjaIpADgHR~64RJXzQpYSpQlhfoZauIIfyD-j90XYst~EUQSxAjh40TVUUTckQWe8if-OsO9vmPh~p-fJOAR1pJA92o2DEf~XjgiRa0~gHFRjtdK6YDd8~tYuO1IOdBypyxob1T~OohSTpyR1iWWtLYwejOcGEHzZoHRQBLIVwmiLMCyD2koXXyBp-dquRvUimQBfErnTEPjmPgy9ye5qzpqICKq6YwStTFchhn-WyEF85Wbsw71OfRFQKyCaeqgbeucXHPXBYk4y6Mkr~Q__";

const services = [
  {
    id: "general",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 3 1.5 4L9 20h6l1.5-9C17.5 10 18 8.5 18 7c0-2.5-2.5-5-6-5z"/>
      </svg>
    ),
    title: "一般歯科",
    subtitle: "General Dentistry",
    desc: "虫歯・歯周病の治療から定期検診・クリーニングまで、お口の健康を総合的にサポートします。",
    items: ["虫歯治療", "歯周病治療", "定期検診・クリーニング", "抜歯・口腔外科"],
  },
  {
    id: "orthodontics",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    title: "矯正歯科",
    subtitle: "Orthodontics",
    desc: "ワイヤー矯正からマウスピース矯正まで、患者さまのライフスタイルに合わせた矯正治療を提案します。",
    items: ["ワイヤー矯正", "マウスピース矯正", "小児矯正", "保定装置"],
  },
  {
    id: "cosmetic",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "審美歯科",
    subtitle: "Cosmetic Dentistry",
    desc: "ホワイトニングやセラミック治療で、美しく自然な白い歯を実現します。",
    items: ["ホワイトニング", "セラミック治療", "ラミネートベニア", "ダイレクトボンディング"],
  },
  {
    id: "pediatric",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "小児歯科",
    subtitle: "Pediatric Dentistry",
    desc: "お子さまが歯医者を怖がらないよう、楽しい雰囲気の中で治療を行います。",
    items: ["乳歯の治療", "フッ素塗布", "シーラント", "歯磨き指導"],
  },
  {
    id: "implant",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
    title: "インプラント",
    subtitle: "Implant",
    desc: "失った歯を天然歯に近い感覚で取り戻せるインプラント治療を提供しています。",
    items: ["インプラント埋入", "骨造成手術", "上部構造製作", "メンテナンス"],
  },
  {
    id: "prevention",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "予防歯科",
    subtitle: "Preventive Care",
    desc: "定期的なメンテナンスで、虫歯・歯周病を予防し、健康な歯を長く保ちます。",
    items: ["PMTC", "スケーリング", "ブラッシング指導", "口腔内検査"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.97 0.01 185)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="section-label mb-4">Services</p>
          <span className="teal-line mx-auto mb-6" />
          <h2
            className="text-3xl lg:text-4xl font-semibold text-gray-800"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            診療メニュー
          </h2>
          <p
            className="text-gray-500 mt-4 text-sm lg:text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            一般歯科から専門的な治療まで、幅広い診療に対応しています。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="bg-white rounded-sm p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group fade-in-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-teal-600"
                style={{ backgroundColor: "oklch(0.92 0.04 185)", color: "oklch(0.48 0.12 185)" }}
              >
                <div className="group-hover:text-white transition-colors duration-300" style={{ color: "oklch(0.48 0.12 185)" }}>
                  {service.icon}
                </div>
              </div>

              <p
                className="text-xs tracking-widest mb-1"
                style={{
                  color: "oklch(0.48 0.12 185)",
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                {service.subtitle}
              </p>
              <h3
                className="text-lg font-semibold text-gray-800 mb-3"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-gray-500 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {service.desc}
              </p>

              <ul className="space-y-1.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-gray-600"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "oklch(0.48 0.12 185)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Whitening highlight */}
        <div className="mt-16 grid lg:grid-cols-2 gap-0 overflow-hidden rounded-sm shadow-md fade-in-up">
          <div className="relative h-64 lg:h-auto">
            <img
              src={WHITENING_IMAGE}
              alt="ホワイトニング"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="p-10 lg:p-14 flex flex-col justify-center"
            style={{ backgroundColor: "oklch(0.48 0.12 185)" }}
          >
            <p
              className="text-white/70 text-xs tracking-widest mb-3"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              WHITENING
            </p>
            <h3
              className="text-2xl lg:text-3xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              白く輝く歯で、
              <br />
              自信ある笑顔に。
            </h3>
            <p
              className="text-white/80 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              オフィスホワイトニング・ホームホワイトニングの両方に対応。
              歯の状態に合わせた最適なプランをご提案します。
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="self-start px-6 py-3 bg-white text-sm font-medium rounded transition-all duration-200 hover:bg-gray-50"
              style={{
                color: "oklch(0.48 0.12 185)",
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              無料カウンセリングを予約する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
