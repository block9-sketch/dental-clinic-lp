/**
 * AboutSection component
 * Design: Asymmetric layout — image left, text right
 * - Teal accent lines, Noto Serif JP headings
 */

const TREATMENT_IMAGE =
  "https://private-us-east-1.manuscdn.com/sessionFile/G79eE2zATdQam7JlX5Vmrh/sandbox/h6XJHQvVaf4nMKkdkv19Oz-img-2_1771542406000_na1fn_ZGVudGFsLXRyZWF0bWVudA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvRzc5ZUUyekFUZFFhbTdKbFg1Vm1yaC9zYW5kYm94L2g2WEpIUXZWYWY0bk1La2RrdjE5T3otaW1nLTJfMTc3MTU0MjQwNjAwMF9uYTFmbl9aR1Z1ZEdGc0xYUnlaV0YwYldWdWRBLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TZK1TC-luxVd-CTXgWhJLozH2g5SPH2Y-UUNTgy4t0FsrQ-lyoIT-ysH2EAUFvoZvUi-oW6S3W1ITeIIerklqh543qzclvX-aXyj6ozd7QjUIzp~e7~cMuzgV5GfEy1sEx5xoF5j1~Cs2GIDqETIZuNRE7tZxM1NMnkHC~CjHQs5tm8C5r3iKP~x2E4rnFCLFiqHo2fBy3Z-O8dTdgK5UESouj284L2icsQD403QuIl~zq8W0LtjGOqBw5-IiwLxamUoJXtrTT-9mJMhEnaH6yAF6tfT2l6pI6yB1XVlDEK8z-VeDNKTVno-np4VK1X8Ko9Q6pXV1Uixy~gQ6mWREA__";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "oklch(0.99 0.003 100)" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — left side */}
          <div className="relative fade-in-left">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={TREATMENT_IMAGE}
                alt="さくら歯科クリニックの院長"
                className="w-full h-[480px] object-cover"
              />
              {/* Teal accent border */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-sm -z-10"
                style={{ backgroundColor: "oklch(0.92 0.04 185)" }}
              />
            </div>
            {/* Floating card */}
            <div
              className="absolute -bottom-6 left-8 bg-white rounded-sm shadow-lg px-6 py-4 flex items-center gap-4"
              style={{ borderLeft: "3px solid oklch(0.48 0.12 185)" }}
            >
              <div>
                <p
                  className="text-2xl font-semibold"
                  style={{
                    color: "oklch(0.48 0.12 185)",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  15年
                </p>
                <p
                  className="text-xs text-gray-500 mt-0.5"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  地域に根ざした歯科医療
                </p>
              </div>
            </div>
          </div>

          {/* Text — right side */}
          <div className="lg:pl-8 fade-in-right">
            <p
              className="section-label mb-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              About Us
            </p>
            <span className="teal-line mb-6" />

            <h2
              className="text-3xl lg:text-4xl font-semibold text-gray-800 leading-snug mb-6"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              患者さまの笑顔が、
              <br />
              私たちの喜びです。
            </h2>

            <p
              className="text-gray-600 leading-relaxed mb-5 text-sm lg:text-base"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              さくら歯科クリニックは、2009年の開院以来、渋谷区の皆さまのお口の健康を守り続けてきました。
              「痛くない治療」「丁寧な説明」「清潔な環境」を三本柱に、患者さまが安心して通える医院づくりを心がけています。
            </p>
            <p
              className="text-gray-600 leading-relaxed mb-8 text-sm lg:text-base"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              最新の医療機器を導入しながらも、一人ひとりのお口の状態に合わせたオーダーメイドの治療計画をご提案。
              お子さまから高齢の方まで、幅広い世代の方に安心してご来院いただいています。
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "🦷", title: "痛みに配慮", desc: "無痛治療への取り組み" },
                { icon: "💬", title: "丁寧な説明", desc: "納得いただける診療" },
                { icon: "✨", title: "清潔な環境", desc: "徹底した院内感染対策" },
              ].map((v) => (
                <div key={v.title} className="text-center p-4 rounded-sm" style={{ backgroundColor: "oklch(0.96 0.02 185)" }}>
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <p
                    className="text-xs font-semibold text-gray-700 mb-1"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {v.title}
                  </p>
                  <p
                    className="text-xs text-gray-500"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
