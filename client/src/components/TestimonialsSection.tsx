/**
 * TestimonialsSection component
 * Design: Light off-white background, card-based testimonials
 */

const testimonials = [
  {
    name: "山田 花子",
    age: "30代・女性",
    rating: 5,
    text: "以前は歯医者が怖くて通えなかったのですが、こちらのクリニックは先生もスタッフの方もとても優しく、丁寧に説明してくださるので安心して通えています。",
    treatment: "一般歯科・ホワイトニング",
  },
  {
    name: "鈴木 太郎",
    age: "40代・男性",
    rating: 5,
    text: "インプラント治療をお願いしました。術前の説明が非常に丁寧で、術後のケアも万全。今では天然歯と変わらない感覚で食事ができています。",
    treatment: "インプラント",
  },
  {
    name: "佐々木 美咲",
    age: "20代・女性",
    rating: 5,
    text: "マウスピース矯正で歯並びを改善しました。目立たないので仕事中も気にならず、1年半でとても綺麗な歯並びになりました！",
    treatment: "マウスピース矯正",
  },
  {
    name: "田中 一郎",
    age: "50代・男性",
    rating: 5,
    text: "定期検診で長年お世話になっています。毎回丁寧なクリーニングをしていただき、虫歯知らずで過ごせています。スタッフの皆さんの笑顔が素晴らしい。",
    treatment: "定期検診・予防歯科",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.99 0.003 100)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="section-label mb-4">Testimonials</p>
          <span className="teal-line mx-auto mb-6" />
          <h2
            className="text-3xl lg:text-4xl font-semibold text-gray-800"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            患者さまの声
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-sm p-7 shadow-sm hover:shadow-md transition-shadow duration-300 fade-in-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="oklch(0.78 0.08 10)" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none mb-2 -mt-2"
                style={{ color: "oklch(0.92 0.04 185)" }}
              >
                "
              </div>

              <p
                className="text-gray-600 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {t.text}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-medium"
                    style={{ backgroundColor: "oklch(0.48 0.12 185)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p
                      className="text-sm font-medium text-gray-700"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs text-gray-400"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {t.age}
                    </p>
                  </div>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "oklch(0.96 0.02 185)",
                    color: "oklch(0.48 0.12 185)",
                    fontFamily: "'Noto Sans JP', sans-serif",
                  }}
                >
                  {t.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
