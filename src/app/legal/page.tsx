"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin, Clock, Users, Instagram } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

export default function Legal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile-First Container */}
      <div className="max-w-[430px] mx-auto bg-white shadow-xl min-h-screen relative">
        {/* Header - Mobile First */}
        <header className="sticky top-0 z-50 bg-white">
          {/* Top Bar - Mobile Optimized */}
          <div className="bg-sparkle-pink text-white py-2">
            <div className="px-4 text-center">
              <span className="text-sm font-bold">🎉 LINEで簡単注文 | 学生の味方！</span>
            </div>
          </div>

          {/* Main Navigation - Mobile First */}
          <nav className="bg-white">
            <div className="px-4">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logo.png"
                      alt="SPARKLE"
                      width={120}
                      height={48}
                      className="h-10 w-auto"
                    />
                  </Link>

                  {/* Primary CTA Button */}
                  <Link
                    href="https://line.me/R/ti/p/@895gydcc"
                    className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-green-600 transition flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                    </svg>
                    LINEで相談
                  </Link>

                  {/* Menu Toggle */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="pb-4 border-t border-gray-200">
                  <nav className="space-y-2 pt-4">
                    <Link href="/" className="block py-2 px-4 rounded-lg hover:bg-sparkle-pink/10 transition">
                      ホーム
                    </Link>
                    <Link href="/products" className="block py-2 px-4 rounded-lg hover:bg-sparkle-pink/10 transition">
                      商品一覧
                    </Link>
                    <Link href="/guide" className="block py-2 px-4 rounded-lg hover:bg-sparkle-pink/10 transition">
                      ご利用ガイド
                    </Link>
                    <Link href="/estimate" className="block py-2 px-4 rounded-lg hover:bg-sparkle-pink/10 transition">
                      お見積もり
                    </Link>
                    <Link href="/company" className="block py-2 px-4 rounded-lg hover:bg-sparkle-pink/10 transition">
                      会社概要
                    </Link>
                  </nav>
                </div>
              )}
            </div>
          </nav>
        </header>

      {/* Wave Pattern */}
      <WavePatternTop />

        {/* Main Content */}
        <main className="px-4 py-8">
        <div className="space-y-8">
          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-sparkle-pink to-sparkle-turquoise bg-clip-text text-transparent mb-4">
              特定商取引に基づく表記
            </h1>
            <p className="text-gray-600">
              特定商取引に関する法律に基づく表記です
            </p>
          </div>

          {/* Legal Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-bold text-gray-600 mb-1">販売業者</dt>
                <dd className="text-lg">株式会社LaMuse</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-bold text-gray-600 mb-1">運営責任者</dt>
                <dd className="text-lg">鶴健一郎</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-bold text-gray-600 mb-1">所在地</dt>
                <dd className="text-lg">〒150-0002</dd>
                <dd className="text-lg">東京都渋谷区渋谷3丁目27-1 2F</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-bold text-gray-600 mb-1">電話番号</dt>
                <dd className="text-lg">070-9362-9828</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-bold text-gray-600 mb-1">メールアドレス</dt>
                <dd className="text-lg">contact@la-muse.org</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-bold text-gray-600 mb-1">商品代金以外の必要料金</dt>
                <dd className="text-lg">送料、消費税</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-bold text-gray-600 mb-1">支払方法</dt>
                <dd className="text-lg">銀行振込、クレジットカード決済</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-bold text-gray-600 mb-1">支払時期</dt>
                <dd className="text-lg">注文確定時</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-bold text-gray-600 mb-1">商品の引渡時期</dt>
                <dd className="text-lg">ご注文確定後、2〜3週間程度</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-sm font-bold text-gray-600 mb-1">返品・交換について</dt>
                <dd className="text-lg">商品の性質上、お客様都合による返品・交換はお受けできません。ただし、商品に不備がある場合は交換いたします。</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-gray-600 mb-1">その他</dt>
                <dd className="text-lg">オリジナルデザインの制作・印刷サービスを提供しております。詳細はお問い合わせください。</dd>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-sparkle-pink to-sparkle-turquoise rounded-2xl p-6 text-white text-center">
            <h2 className="text-xl font-bold mb-2">ご不明な点がございましたら</h2>
            <p className="mb-4 opacity-90">お気軽にお問い合わせください</p>
            <Link
              href="/estimate"
              className="inline-block bg-white text-sparkle-pink font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition"
            >
              お問い合わせ・お見積もり
            </Link>
          </div>
        </div>
      </main>

        {/* Wave Pattern */}
        <WavePatternBottom />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="px-4">
            <div className="grid grid-cols-1 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ご注文について</h3>
                <ul className="space-y-2">
                  <Link href="/returns" className="block hover:text-sparkle-pink transition">返品・交換に関する特約</Link>
                  <Link href="/shipping" className="block hover:text-sparkle-pink transition">配送事項</Link>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">加工方法について</h3>
                <ul className="space-y-2">
                  <Link href="/estimate" className="block hover:text-sparkle-pink transition">お見積もりフォーム</Link>

                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">CRATee'sについて</h3>
                <ul className="space-y-2">
                  <Link href="/company" className="block hover:text-sparkle-pink transition">会社概要</Link>
                  <Link href="/legal" className="block hover:text-sparkle-pink transition">特定商取引に基づく表記</Link>
                  <Link href="/privacy" className="block hover:text-sparkle-pink transition">プライバシーポリシー</Link>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="text-center">
                <div className="text-xs text-gray-400 space-y-2">
                  <div className="flex justify-center items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3" />
                      <span>070-9362-9828</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      <span>contact@la-muse.org</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4 mt-4">
                    <Link href="https://www.instagram.com/cla_tees?igsh=MTNtdWJ4bm5nYWRmbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-sparkle-pink transition">
                      <Instagram className="w-5 h-5" />
                    </Link>
                    <Link href="https://www.tiktok.com/@clatees?_t=ZS-8zO4FkW6JrM&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-sparkle-pink transition">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-gray-700">
               <p className="text-sm">
                 © 株式会社LaMuse
               </p>
               <p className="text-xs mt-2">
                 思い出作りを全力でサポート致します。
               </p>
             </div>
          </div>
        </footer>
      </div>
    </div>
  );
}