/**
 * Navigation component
 * Design: Japanese Minimalism × Medical Trust
 * - Teal primary color, transparent → white on scroll
 * - Noto Serif JP logo, Noto Sans JP nav links
 * - Sticky header with shadow on scroll
 */

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "医院について" },
  { href: "#services", label: "診療メニュー" },
  { href: "#features", label: "当院の特徴" },
  { href: "#staff", label: "スタッフ紹介" },
  { href: "#access", label: "アクセス" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "oklch(0.48 0.12 185)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 3 1.5 4L9 20h6l1.5-9C17.5 10 18 8.5 18 7c0-2.5-2.5-5-6-5z"/>
              </svg>
            </div>
            <div>
              <span
                className={`text-lg font-semibold tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                さくら歯科クリニック
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:opacity-70 relative group ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "oklch(0.48 0.12 185)" }}
                />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 rounded text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
              style={{
                backgroundColor: "oklch(0.48 0.12 185)",
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              ご予約・お問い合わせ
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-gray-700" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-gray-700" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-gray-700" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-teal-600 transition-colors"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-2 px-5 py-3 rounded text-sm font-medium text-white w-full"
              style={{ backgroundColor: "oklch(0.48 0.12 185)" }}
            >
              ご予約・お問い合わせ
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
