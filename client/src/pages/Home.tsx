/**
 * Home page — さくら歯科クリニック LP
 * Design: Japanese Minimalism × Medical Trust
 * Sections: Hero → About → Services → Features → Staff → Testimonials → Access → Footer
 */

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import StaffSection from "@/components/StaffSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AccessSection from "@/components/AccessSection";
import Footer from "@/components/Footer";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const animEls = document.querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right"
    );
    animEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <StaffSection />
      <TestimonialsSection />
      <AccessSection />
      <Footer />

      {/* Floating CTA button */}
      <a
        href="tel:0312345678"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 text-white text-sm font-medium rounded-full shadow-lg transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
        style={{
          backgroundColor: "oklch(0.48 0.12 185)",
          fontFamily: "'Noto Sans JP', sans-serif",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        電話で予約
      </a>
    </div>
  );
}
