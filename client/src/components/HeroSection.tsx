/**
 * HeroSection component
 * Design: Full-bleed hero with teal overlay, asymmetric text layout
 * - Dark text overlay on high-key background image
 * - Scroll-down indicator
 */

const HERO_IMAGE =
  "https://private-us-east-1.manuscdn.com/sessionFile/G79eE2zATdQam7JlX5Vmrh/sandbox/h6XJHQvVaf4nMKkdkv19Oz-img-1_1771542401000_na1fn_ZGVudGFsLWhlcm8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRzc5ZUUyekFUZFFhbTdKbFg1Vm1yaC9zYW5kYm94L2g2WEpIUXZWYWY0bk1La2RrdjE5T3otaW1nLTFfMTc3MTU0MjQwMTAwMF9uYTFmbl9aR1Z1ZEdGc0xXaGxjbTguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=K3rf11gm83VJ4buJJ8sAFsUOkGsM1cvL66sRBx5IexGEmibRlYrVrlVtzftOTI186-qpbUZw7iuoRyYBMEgnot4bqKGMeN4jGbM-uWCOUL7-6OaDAvPs5nJ1NBYpS-tq0WIY~EFFn7aEjYPiWG7IK2aJ1DqE7VewmDB4gWmI3K3CcNwV1EKGJcc-RopM-vgyTPJLNeROsKYnMxm5PrgsrQcla1CjIXHD3~H5VK5xlDHsTYStiYs-9UsAATMwgX6TbbpNpuqbpYWEJ83Y4DQ6cOgrwRm47IndUp5C9NyubE75W9QyO1dwwxeWQRq45nMIj3bJal4UlcjjfnDewdwXsw__";

export default function HeroSection() {
  const handleScrollDown = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Overlay: dark teal gradient for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.25 0.10 185 / 0.75) 0%, oklch(0.25 0.10 185 / 0.45) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl pt-20">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-white/70" />
            <span
              className="text-white/80 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              Sakura Dental Clinic
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            健やかな笑顔を、
            <br />
            <span style={{ color: "oklch(0.92 0.04 10)" }}>
              あなたと一緒に。
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-white/85 text-base lg:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            サンプル歯科クリニックは、渋谷区にある清潔感あふれる歯科医院です。
            一般歯科から矯正・審美歯科まで、お口の健康をトータルにサポートします。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 text-white font-medium rounded text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              style={{
                backgroundColor: "oklch(0.48 0.12 185)",
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              ご予約はこちら
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 text-white font-medium rounded text-sm border border-white/50 transition-all duration-200 hover:bg-white/10"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              診療メニューを見る
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-14">
            {[
              { num: "15", unit: "年", label: "開院実績" },
              { num: "8,000", unit: "+", label: "延べ患者数" },
              { num: "4", unit: "名", label: "専門スタッフ" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-baseline gap-0.5">
                  <span
                    className="text-3xl font-semibold text-white"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {stat.num}
                  </span>
                  <span className="text-white/70 text-sm">{stat.unit}</span>
                </div>
                <p
                  className="text-white/60 text-xs mt-0.5"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
      >
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          SCROLL
        </span>
        <div className="w-px h-12 bg-white/40 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white/80"
            style={{
              height: "40%",
              animation: "scrollLine 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </button>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
