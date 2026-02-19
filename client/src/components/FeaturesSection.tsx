/**
 * FeaturesSection component
 * Design: Full-bleed dark teal background with white text
 * - Alternating layout with clinic room image
 */

const CLINIC_ROOM_IMAGE =
  "https://private-us-east-1.manuscdn.com/sessionFile/G79eE2zATdQam7JlX5Vmrh/sandbox/h6XJHQvVaf4nMKkdkv19Oz-img-4_1771542404000_na1fn_ZGVudGFsLWNsaW5pYy1yb29t.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRzc5ZUUyekFUZFFhbTdKbFg1Vm1yaC9zYW5kYm94L2g2WEpIUXZWYWY0bk1La2RrdjE5T3otaW1nLTRfMTc3MTU0MjQwNDAwMF9uYTFmbl9aR1Z1ZEdGc0xXTnNhVzVwWXkxeWIyOXQuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mWUB~IMSEp3gPp~~vY7gwWqLvOX8zno9W8Y0~m1lcM2TlTRJtygejBoD0IxcHUzANRwXigydMvG3vhcHP7x4cF0x-hY1v~OlY3AW8HseRGsKSUP7Row1SmC1CU9VMnscKJ9nw3hzgxUI0V1OBb6REhCoRXhLVSg2LL959igSp8O8I~E~VcGKehXOilkvU1E5jtxl19YyUuzsKZRMzm66vse1tlcEf8wAEiE-a7CcB~9de1j-sFntZl1WN1TCvs0VRPSWCZ44qX3j6lEc414Oc78hROojLv~SXUpSoka1qwJ8G-DqbzGQehzBT9M6Opq-e9XlaPXELwKdGaGGX43MIg__";

const features = [
  {
    num: "01",
    title: "最新設備による精密診療",
    desc: "デジタルレントゲン、口腔内スキャナー、マイクロスコープなど最新の医療機器を導入。精密で正確な診断・治療を実現しています。",
  },
  {
    num: "02",
    title: "徹底した感染対策",
    desc: "高圧蒸気滅菌器による器具の完全滅菌、使い捨て器具の積極的な使用など、院内感染防止に万全の体制を整えています。",
  },
  {
    num: "03",
    title: "痛みに配慮した治療",
    desc: "表面麻酔の使用、電動注射器による麻酔注入など、痛みを最小限に抑えた治療を心がけています。",
  },
  {
    num: "04",
    title: "土曜・夜間診療対応",
    desc: "平日の夜間（19時まで）と土曜日も診療。お仕事や学校で平日の昼間に通えない方もお気軽にご来院ください。",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "oklch(0.99 0.003 100)" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-16 fade-in-up">
          <p className="section-label mb-4">Our Features</p>
          <span className="teal-line mb-6" />
          <h2
            className="text-3xl lg:text-4xl font-semibold text-gray-800"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            当院が選ばれる理由
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Features list */}
          <div className="space-y-8">
            {features.map((f, i) => (
              <div
                key={f.num}
                className="flex gap-6 fade-in-left group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <span
                    className="text-4xl font-light"
                    style={{
                      color: "oklch(0.85 0.06 185)",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {f.num}
                  </span>
                </div>
                <div className="pt-1 border-t border-gray-100 flex-1">
                  <h3
                    className="text-lg font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-gray-500 text-sm leading-relaxed"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative fade-in-right">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={CLINIC_ROOM_IMAGE}
                alt="診療室"
                className="w-full h-[500px] object-cover"
              />
              {/* Teal accent */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-sm -z-10"
                style={{ backgroundColor: "oklch(0.78 0.08 10)" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 right-8 bg-white rounded-sm shadow-lg px-6 py-5"
              style={{ borderBottom: "3px solid oklch(0.48 0.12 185)" }}
            >
              <p
                className="text-xs text-gray-400 mb-1"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                患者満足度
              </p>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-3xl font-semibold"
                  style={{
                    color: "oklch(0.48 0.12 185)",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  97
                </span>
                <span className="text-gray-500 text-sm">%</span>
              </div>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="oklch(0.78 0.08 10)" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
