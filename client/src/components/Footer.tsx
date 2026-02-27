/**
 * Footer component
 * Design: Dark teal background, minimal and clean
 */

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "oklch(0.22 0.08 185)" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "oklch(0.48 0.12 185)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 3 1.5 4L9 20h6l1.5-9C17.5 10 18 8.5 18 7c0-2.5-2.5-5-6-5z"/>
                </svg>
              </div>
              <span
                className="text-white font-semibold"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                サンプル歯科クリニック
              </span>
            </div>
            <p
              className="text-white/50 text-xs leading-relaxed"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              渋谷区で15年。地域の皆さまのお口の健康を守り続けています。
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-white/40 text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "医院について" },
                { href: "#services", label: "診療メニュー" },
                { href: "#features", label: "当院の特徴" },
                { href: "#staff", label: "スタッフ紹介" },
                { href: "#access", label: "アクセス" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/60 text-xs hover:text-white/90 transition-colors"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-white/40 text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              Contact
            </p>
            <div className="space-y-2">
              <p
                className="text-white/80 text-sm font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                03-1234-5678
              </p>
              <p
                className="text-white/50 text-xs"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                〒150-0001 東京都渋谷区
              </p>
              <p
                className="text-white/50 text-xs"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                月〜金 9:00〜19:00 / 土 9:00〜17:00
              </p>
              <button
                onClick={() => handleNav("#contact")}
                className="mt-3 px-4 py-2 text-xs text-white rounded-sm transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "oklch(0.48 0.12 185)",
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                ご予約・お問い合わせ
              </button>
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
        >
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            © {year} サンプル歯科クリニック. All rights reserved.
          </p>
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            Sample Dental Clinic — 渋谷区
          </p>
        </div>
      </div>
    </footer>
  );
}
