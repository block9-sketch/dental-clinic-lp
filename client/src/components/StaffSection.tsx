/**
 * StaffSection component
 * Design: Teal background section with staff cards
 */

const TEAM_IMAGE =
  "https://private-us-east-1.manuscdn.com/sessionFile/G79eE2zATdQam7JlX5Vmrh/sandbox/h6XJHQvVaf4nMKkdkv19Oz-img-5_1771542397000_na1fn_ZGVudGFsLXRlYW0.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRzc5ZUUyekFUZFFhbTdKbFg1Vm1yaC9zYW5kYm94L2g2WEpIUXZWYWY0bk1La2RrdjE5T3otaW1nLTVfMTc3MTU0MjM5NzAwMF9uYTFmbl9aR1Z1ZEdGc0xYUmxZVzAuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=A6OgD1kHDxPOob7WHBvQEjUTBgDawCYiWEuH6Myq7yYhmscJExhpe0wxOM5vEReYhot1VAeK734pfRXUdNNWMXfw87EyrTXkC0NSP7ngF5ComorQd~8NSt2MTXD7iLiCXVV0vKt2W-EmRfIpwuYQjlHiw08EC2T-S8gChwko74gYKSNBTrHA6leIP1l4k1hHXJvvoGNmTHzg7gr78sku86UWHYXqSxkUu~NGG4hDh5v~fhqKyAoWuBULAE2WVxqvkhs7sGLnV17J3cs28dVuwFKRoGyuEG8kpGKdnbagTRAXuKeG7l3cmr42zBvKZlJ9qJFR47bq6XQ8xoDW82dzMA__";

const staff = [
  {
    name: "中村 浩一",
    nameEn: "Dr. Koichi Nakamura",
    role: "院長・歯科医師",
    career: "東京歯科大学卒業。口腔外科・インプラント専門医。",
    message: "患者さまが「また来たい」と思える医院づくりを目指しています。",
    specialty: ["一般歯科", "インプラント", "口腔外科"],
  },
  {
    name: "田中 健太",
    nameEn: "Dr. Kenta Tanaka",
    role: "副院長・歯科医師",
    career: "日本大学歯学部卒業。矯正歯科専門医。",
    message: "美しい歯並びは、笑顔の自信につながります。",
    specialty: ["矯正歯科", "小児歯科", "予防歯科"],
  },
  {
    name: "佐藤 由美",
    nameEn: "DH. Yumi Sato",
    role: "歯科衛生士",
    career: "東京医科歯科大学附属歯科衛生士学校卒業。",
    message: "丁寧なクリーニングで、健康な歯を長く守ります。",
    specialty: ["PMTC", "ブラッシング指導", "歯周病予防"],
  },
];

export default function StaffSection() {
  return (
    <section
      id="staff"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.35 0.10 185)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{
              color: "oklch(0.78 0.08 185)",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            Our Staff
          </p>
          <span
            className="block w-12 h-0.5 mx-auto mb-6"
            style={{ backgroundColor: "oklch(0.78 0.08 185)" }}
          />
          <h2
            className="text-3xl lg:text-4xl font-semibold text-white"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            スタッフ紹介
          </h2>
          <p
            className="text-white/60 mt-4 text-sm max-w-xl mx-auto"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            経験豊富なスタッフが、チームとなって患者さまをサポートします。
          </p>
        </div>

        {/* Team photo */}
        <div className="mb-12 overflow-hidden rounded-sm fade-in-up">
          <img
            src={TEAM_IMAGE}
            alt="スタッフ一同"
            className="w-full h-64 lg:h-80 object-cover object-top"
          />
        </div>

        {/* Staff cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {staff.map((s, i) => (
            <div
              key={s.name}
              className="rounded-sm p-6 fade-in-up"
              style={{
                backgroundColor: "oklch(0.42 0.10 185)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Avatar placeholder */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-xl font-semibold"
                style={{
                  backgroundColor: "oklch(0.55 0.12 185)",
                  fontFamily: "'Noto Serif JP', serif",
                }}
              >
                {s.name[0]}
              </div>

              <p
                className="text-xs tracking-wide mb-1"
                style={{
                  color: "oklch(0.78 0.08 185)",
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                {s.nameEn}
              </p>
              <h3
                className="text-lg font-semibold text-white mb-0.5"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                {s.name}
              </h3>
              <p
                className="text-xs text-white/50 mb-3"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {s.role}
              </p>

              <p
                className="text-white/70 text-xs leading-relaxed mb-3"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {s.career}
              </p>
              <p
                className="text-white/80 text-sm italic leading-relaxed mb-4"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                「{s.message}」
              </p>

              <div className="flex flex-wrap gap-1.5">
                {s.specialty.map((sp) => (
                  <span
                    key={sp}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "oklch(0.48 0.12 185 / 0.5)",
                      color: "oklch(0.85 0.06 185)",
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
