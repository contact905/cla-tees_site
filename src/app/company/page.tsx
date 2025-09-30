"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin, Clock, Users, Instagram } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

export default function Company() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen relative">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          {/* Top Bar */}
          <div className="bg-sparkle-pink text-white text-center py-3">
            <p className="text-base md:text-lg font-medium">オリジナルTシャツ・クラスTシャツの制作なら</p>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="CRATee's Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <Link
              href="/products"
              className="bg-green-500 text-white px-6 py-3 rounded-full text-base md:text-lg font-bold hover:bg-green-600 transition min-h-[48px] flex items-center"
            >
              LINE相談
            </Link>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
              <div className="p-4 space-y-2">
                <Link href="/" className="block text-xl md:text-2xl font-bold py-4 border-b hover:text-sparkle-pink transition min-h-[48px] flex items-center">
                  ホーム
                </Link>
                <Link href="/products" className="block text-xl md:text-2xl font-bold py-4 border-b hover:text-sparkle-pink transition min-h-[48px] flex items-center">
                  データ入稿・お見積もり
                </Link>
                <Link href="/products" className="block text-xl md:text-2xl font-bold py-4 border-b hover:text-sparkle-pink transition min-h-[48px] flex items-center">
                  商品一覧
                </Link>
                <Link href="#" className="block text-xl md:text-2xl font-bold py-4 border-b hover:text-sparkle-pink transition min-h-[48px] flex items-center">
                  デザインサンプル
                </Link>
                <Link href="#" className="block text-xl md:text-2xl font-bold py-4 border-b hover:text-sparkle-pink transition min-h-[48px] flex items-center">
                  ご注文方法
                </Link>
              </div>

              {/* Contact Info in Menu */}
              <div className="p-4 bg-gray-50 border-t">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-sparkle-pink" />
                    <span className="font-bold text-base md:text-lg">070-9362-9828</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-sparkle-pink" />
                    <span className="text-base md:text-lg">contact@la-muse.org</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Wave Pattern */}
        <WavePatternTop />

        {/* Main Content */}
        <main className="px-4 py-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              会社概要
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              CRATee's について
            </p>
          </div>

          {/* Company Information */}
          <section className="px-4 py-8">
            <div className="space-y-12">
              {/* Company Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-sparkle-pink" />
                  会社情報
                </h2>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">会社名</dt>
                    <dd className="text-xl md:text-2xl">株式会社LaMuse</dd>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">代表者</dt>
                    <dd className="text-xl md:text-2xl">鶴健一郎</dd>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">設立</dt>
                    <dd className="text-xl md:text-2xl">2020年4月1日</dd>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">資本金</dt>
                    <dd className="text-xl md:text-2xl">500万円</dd>
                  </div>
                  <div>
                    <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">事業内容</dt>
                    <dd className="text-xl md:text-2xl">オリジナルTシャツ・クラスTシャツの企画・製造・販売</dd>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-sparkle-turquoise" />
                  お問い合わせ
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-sparkle-pink mt-1" />
                    <div>
                      <dt className="text-base md:text-lg font-bold text-gray-600 mb-1">電話番号</dt>
                      <dd className="text-xl md:text-2xl font-bold">070-9362-9828</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-sparkle-turquoise mt-1" />
                    <div>
                      <dt className="text-base md:text-lg font-bold text-gray-600 mb-1">メールアドレス</dt>
                      <dd className="text-xl md:text-2xl">contact@la-muse.org</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-sparkle-pink mt-1" />
                    <div>
                      <dt className="text-base md:text-lg font-bold text-gray-600 mb-1">所在地</dt>
                      <dd className="text-xl md:text-2xl">〒150-0002</dd>
                      <dd className="text-xl md:text-2xl">東京都渋谷区渋谷3丁目27-1 2F</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 md:w-7 md:h-7 text-sparkle-turquoise mt-1" />
                    <div>
                      <dt className="text-base md:text-lg font-bold text-gray-600 mb-1">営業時間</dt>
                      <dd className="text-xl md:text-2xl">平日 9:00 - 18:00</dd>
                      <dd className="text-base md:text-lg text-gray-600">（土日祝日は休業）</dd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-sparkle-pink" />
                  私たちの想い
                </h2>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    CRATee'sは、お客様の大切な思い出作りを全力でサポートいたします。
                    クラスTシャツやオリジナルTシャツを通じて、特別な瞬間をより輝かせるお手伝いをさせていただきます。
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    高品質な商品と丁寧なサービスで、お客様に満足していただけるよう日々努力しております。
                    ご不明な点がございましたら、お気軽にお問い合わせください。
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-sparkle-pink to-sparkle-pink-light rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">お見積もりはこちら</h3>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  無料でお見積もりいたします
                </p>
                <Link
                  href="/products"
                  className="inline-block bg-white text-sparkle-pink px-8 py-4 rounded-full text-xl md:text-2xl font-bold hover:bg-gray-100 transition min-h-[48px] flex items-center justify-center"
                >
                  お見積もりフォーム
                </Link>
              </div>
            </div>
          </section>
          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-sparkle-pink to-sparkle-turquoise rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ご不明な点がございましたら</h2>
            <p className="text-xl md:text-2xl mb-6 opacity-90">お気軽にお問い合わせください</p>
            <Link
              href="/products"
              className="inline-block bg-white text-sparkle-pink font-bold py-4 px-8 rounded-full text-xl md:text-2xl hover:bg-gray-100 transition min-h-[48px] flex items-center justify-center"
            >
              お問い合わせ・お見積もり
            </Link>
          </div>
        </main>

        {/* Wave Pattern */}
        <WavePatternBottom />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="px-4">
            <div className="grid grid-cols-1 gap-8 mb-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">ご注文について</h3>
                <ul className="space-y-4">
                  <Link href="/returns" className="block text-lg md:text-xl hover:text-sparkle-pink transition min-h-[48px] flex items-center">返品・交換に関する特約</Link>
                  <Link href="/shipping" className="block text-lg md:text-xl hover:text-sparkle-pink transition min-h-[48px] flex items-center">配送事項</Link>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">加工方法について</h3>
                <ul className="space-y-4">
                  <Link href="/products" className="block text-lg md:text-xl hover:text-sparkle-pink transition min-h-[48px] flex items-center">お見積もりフォーム</Link>

                </ul>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">CRATee'sについて</h3>
                <ul className="space-y-4">
                  <Link href="/company" className="block text-lg md:text-xl hover:text-sparkle-pink transition min-h-[48px] flex items-center">会社概要</Link>
                  <Link href="/legal" className="block text-lg md:text-xl hover:text-sparkle-pink transition min-h-[48px] flex items-center">特定商取引に基づく表記</Link>
                  <Link href="/privacy" className="block text-lg md:text-xl hover:text-sparkle-pink transition min-h-[48px] flex items-center">プライバシーポリシー</Link>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="text-center">
                <div className="text-base md:text-lg text-gray-400 space-y-4">
                  <div className="flex justify-center items-center gap-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                      <span>070-9362-9828</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                      <span>contact@la-muse.org</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-6 mt-6">
                    <Link href="https://www.instagram.com/cla_tees?igsh=MTNtdWJ4bm5nYWRmbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-sparkle-pink transition min-h-[48px] min-w-[48px] flex items-center justify-center">
                      <Instagram className="w-7 h-7 md:w-8 md:h-8" />
                    </Link>
                    <Link href="https://www.tiktok.com/@clatees?_t=ZS-8zO4FkW6JrM&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-sparkle-pink transition min-h-[48px] min-w-[48px] flex items-center justify-center">
                      <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-gray-700">
              <p className="text-lg md:text-xl">
                © 株式会社LaMuse
              </p>
              <p className="text-base md:text-lg mt-2">
                思い出作りを全力でサポート致します。
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}