/**
 * AccessSection component
 * Design: Split layout — info left, map placeholder right
 * - Teal accent colors, clean typography
 */

import { useState } from "react";

const scheduleData = [
  { day: "月", mon: true, tue: true, wed: true, thu: true, fri: true, sat: true, sun: false },
];

const hours = [
  { label: "月〜金", time: "9:00 〜 19:00" },
  { label: "土曜日", time: "9:00 〜 17:00" },
  { label: "休診日", time: "日曜・祝日" },
];

const weekDays = ["月", "火", "水", "木", "金", "土", "日"];
const openDays = [true, true, true, true, true, true, false];

export default function AccessSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="access" className="py-24 lg:py-32" style={{ backgroundColor: "oklch(0.97 0.01 185)" }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <p className="section-label mb-4">Access & Hours</p>
          <span className="teal-line mx-auto mb-6" />
          <h2
            className="text-3xl lg:text-4xl font-semibold text-gray-800"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            アクセス・診療時間
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="fade-in-left">
            {/* Clinic info */}
            <div className="bg-white rounded-sm p-8 mb-6 shadow-sm">
              <h3
                className="text-lg font-semibold text-gray-800 mb-5"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                医院情報
              </h3>
              <dl className="space-y-4">
                {[
                  { dt: "医院名", dd: "さくら歯科クリニック" },
                  { dt: "住所", dd: "〒150-0001 東京都渋谷区神宮前1-2-3 さくらビル2F" },
                  { dt: "電話番号", dd: "03-1234-5678" },
                  { dt: "最寄り駅", dd: "東京メトロ表参道駅 A2出口より徒歩3分\nJR原宿駅 竹下口より徒歩8分" },
                  { dt: "駐車場", dd: "近隣にコインパーキングあり" },
                ].map((item) => (
                  <div key={item.dt} className="flex gap-4">
                    <dt
                      className="text-xs text-gray-400 w-20 flex-shrink-0 pt-0.5"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {item.dt}
                    </dt>
                    <dd
                      className="text-sm text-gray-700 whitespace-pre-line"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {item.dd}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-sm p-8 shadow-sm">
              <h3
                className="text-lg font-semibold text-gray-800 mb-5"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                診療時間
              </h3>

              {/* Week grid */}
              <div className="flex gap-2 mb-6">
                {weekDays.map((d, i) => (
                  <div key={d} className="flex-1 text-center">
                    <div
                      className="text-xs mb-1.5 font-medium"
                      style={{
                        color: d === "日" ? "#ef4444" : d === "土" ? "#3b82f6" : "oklch(0.55 0.01 65)",
                        fontFamily: "'Noto Sans JP', sans-serif",
                      }}
                    >
                      {d}
                    </div>
                    <div
                      className="h-8 rounded-sm flex items-center justify-center text-xs font-medium"
                      style={{
                        backgroundColor: openDays[i] ? "oklch(0.48 0.12 185)" : "oklch(0.93 0.005 65)",
                        color: openDays[i] ? "white" : "oklch(0.7 0.01 65)",
                      }}
                    >
                      {openDays[i] ? "○" : "×"}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.label} className="flex items-center justify-between py-2 border-b border-gray-50">
                    <span
                      className="text-sm text-gray-500"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {h.label}
                    </span>
                    <span
                      className="text-sm font-medium text-gray-700"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 p-3 rounded-sm text-xs text-gray-500"
                style={{
                  backgroundColor: "oklch(0.96 0.02 185)",
                  fontFamily: "'Noto Sans JP', sans-serif",
                }}
              >
                ※ 最終受付は診療終了の30分前となります。
              </div>
            </div>
          </div>

          {/* Map placeholder + Contact form */}
          <div className="fade-in-right space-y-6">
            {/* Map */}
            <div
              className="w-full h-64 rounded-sm overflow-hidden shadow-sm flex items-center justify-center"
              style={{ backgroundColor: "oklch(0.90 0.04 185)" }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">📍</div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.48 0.12 185)", fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  東京都渋谷区神宮前1-2-3
                </p>
                <p
                  className="text-xs text-gray-500 mt-1"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  表参道駅A2出口より徒歩3分
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div id="contact" className="bg-white rounded-sm p-8 shadow-sm">
              <h3
                className="text-lg font-semibold text-gray-800 mb-5"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                ご予約・お問い合わせ
              </h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "oklch(0.92 0.04 185)" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="oklch(0.48 0.12 185)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p
                    className="text-gray-700 font-medium mb-2"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    送信が完了しました
                  </p>
                  <p
                    className="text-gray-500 text-sm"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    2営業日以内にご連絡いたします。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: "name", label: "お名前", type: "text", placeholder: "山田 花子", required: true },
                    { id: "phone", label: "電話番号", type: "tel", placeholder: "03-1234-5678", required: true },
                    { id: "email", label: "メールアドレス", type: "email", placeholder: "example@email.com", required: false },
                    { id: "date", label: "ご希望日時", type: "text", placeholder: "例：3月15日（土）午前中", required: false },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-xs text-gray-500 mb-1.5"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                      >
                        {field.label}
                        {field.required && (
                          <span className="ml-1 text-red-400">*</span>
                        )}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))
                        }
                        className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-teal-500 transition-colors"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs text-gray-500 mb-1.5"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      ご質問・ご要望
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="ご質問やご要望があればお書きください"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-white text-sm font-medium rounded-sm transition-all duration-200 hover:opacity-90 hover:shadow-md"
                    style={{
                      backgroundColor: "oklch(0.48 0.12 185)",
                      fontFamily: "'Noto Sans JP', sans-serif",
                    }}
                  >
                    送信する
                  </button>

                  <p
                    className="text-xs text-gray-400 text-center"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    お電話でのご予約：
                    <a
                      href="tel:0312345678"
                      className="font-medium ml-1"
                      style={{ color: "oklch(0.48 0.12 185)" }}
                    >
                      03-1234-5678
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
