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
          <div className="bg-sparkle-pink text-white py-3">
            <div className="px-4 text-center">
              <span className="text-base md:text-lg font-bold">🎉 LINEで簡単注文 | 学生の味方！</span>
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
                    href="https://lin.ee/FtxOG2s"
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-base md:text-lg hover:bg-green-600 transition flex items-center gap-2 whitespace-nowrap shrink-0 min-h-[48px]"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                    </svg>
                    LINEで相談
                  </Link>

                  {/* Menu Toggle */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-3 rounded-lg hover:bg-gray-100 transition min-h-[48px] min-w-[48px] flex items-center justify-center"
                  >
                    {isMenuOpen ? <X className="w-7 h-7 md:w-8 md:h-8" /> : <Menu className="w-7 h-7 md:w-8 md:h-8" />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="pb-4 border-t border-gray-200">
                  <nav className="space-y-2 pt-4">
                    <Link href="/" className="block py-4 px-4 rounded-lg hover:bg-sparkle-pink/10 transition text-xl md:text-2xl min-h-[48px] flex items-center">
                      ホーム
                    </Link>
                    <Link href="/products" className="block py-4 px-4 rounded-lg hover:bg-sparkle-pink/10 transition text-xl md:text-2xl min-h-[48px] flex items-center">
                      商品一覧
                    </Link>
                    <Link href="/guide" className="block py-4 px-4 rounded-lg hover:bg-sparkle-pink/10 transition text-xl md:text-2xl min-h-[48px] flex items-center">
                      ご利用ガイド
                    </Link>
                    <Link href="/products" className="block py-4 px-4 rounded-lg hover:bg-sparkle-pink/10 transition text-xl md:text-2xl min-h-[48px] flex items-center">
                      お見積もり
                    </Link>
                    <Link href="/company" className="block py-4 px-4 rounded-lg hover:bg-sparkle-pink/10 transition text-xl md:text-2xl min-h-[48px] flex items-center">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-sparkle-pink to-sparkle-turquoise bg-clip-text text-transparent mb-6">
              特定商取引に基づく表記
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              特定商取引に関する法律に基づく表記です
            </p>
          </div>

          {/* Legal Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">販売業者</dt>
                <dd className="text-xl md:text-2xl">株式会社LaMuse</dd>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">運営責任者</dt>
                <dd className="text-xl md:text-2xl">鶴健一郎</dd>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">所在地</dt>
                <dd className="text-xl md:text-2xl">〒150-0002</dd>
                <dd className="text-xl md:text-2xl">東京都渋谷区渋谷3丁目27-1 2F</dd>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">電話番号</dt>
                <dd className="text-xl md:text-2xl">070-9362-9828</dd>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">メールアドレス</dt>
                <dd className="text-xl md:text-2xl">contact@la-muse.org</dd>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">商品代金以外の必要料金</dt>
                <dd className="text-xl md:text-2xl">送料、消費税</dd>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">支払方法</dt>
                <dd className="text-xl md:text-2xl">銀行振込、クレジットカード決済</dd>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">支払時期</dt>
                <dd className="text-xl md:text-2xl">注文確定時</dd>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">商品の引渡時期</dt>
                <dd className="text-xl md:text-2xl">ご注文確定後、2〜3週間程度</dd>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">返品・交換について</dt>
                <dd className="text-xl md:text-2xl">商品の性質上、お客様都合による返品・交換はお受けできません。ただし、商品に不備がある場合は交換いたします。</dd>
              </div>
              <div>
                <dt className="text-base md:text-lg font-bold text-gray-600 mb-2">その他</dt>
                <dd className="text-xl md:text-2xl">オリジナルデザインの制作・印刷サービスを提供しております。詳細はお問い合わせください。</dd>
              </div>
            </div>
          </div>

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
        </div>
      </main>

        {/* Wave Pattern */}
        <WavePatternBottom />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* ご注文について */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">ご注文について</h3>
                <ul className="space-y-3">
                  <li><Link href="/products" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">商品一覧</Link></li>
                  <li><Link href="/estimate" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">お見積もり</Link></li>
                  <li><Link href="/shipping" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">配送について</Link></li>
                  <li><Link href="/returns" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">返品・交換</Link></li>
                </ul>
              </div>

              {/* 加工方法について */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">加工方法について</h3>
                <ul className="space-y-3">
                  <li><Link href="/products" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">シルクスクリーン印刷</Link></li>
                  <li><Link href="/products" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">刺繍</Link></li>
                  <li><Link href="/products" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">転写プリント</Link></li>
                  <li><Link href="/products" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">昇華プリント</Link></li>
                </ul>
              </div>

              {/* CRATee'sについて */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">CRATee'sについて</h3>
                <ul className="space-y-3">
                  <li><Link href="/company" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">会社概要</Link></li>
                  <li><Link href="/privacy" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">プライバシーポリシー</Link></li>
                  <li><Link href="/legal" className="text-lg md:text-xl text-gray-300 hover:text-white transition min-h-[48px] flex items-center">特定商取引法</Link></li>
                </ul>
              </div>

              {/* 連絡先 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">連絡先</h3>
                <div className="space-y-3">
                  <p className="text-lg md:text-xl text-gray-300">〒150-0002</p>
                  <p className="text-lg md:text-xl text-gray-300">東京都渋谷区渋谷3丁目27-1 2F</p>
                  <p className="text-lg md:text-xl text-gray-300">TEL: 070-9362-9828</p>
                  <p className="text-lg md:text-xl text-gray-300">Email: contact@la-muse.org</p>
                </div>
                
                {/* ソーシャルメディア */}
                <div className="mt-6">
                  <h4 className="text-lg md:text-xl font-bold mb-4">フォローする</h4>
                  <div className="flex space-x-4">
                    <Link href="https://www.instagram.com/cla_tees?igsh=MTNtdWJ4bm5nYWRmbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition min-h-[48px] min-w-[48px] flex items-center justify-center">
                      <Instagram className="w-6 h-6 md:w-7 md:h-7" />
                    </Link>
                    <Link href="https://www.tiktok.com/@clatees?_t=ZS-8zO4FkW6JrM&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition min-h-[48px] min-w-[48px] flex items-center justify-center">
                      <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 著作権 */}
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-lg md:text-xl text-gray-400">&copy; 2024 CRATee's by LaMuse. All rights reserved.</p>
              <p className="text-base md:text-lg text-gray-400 mt-2">
                思い出作りを全力でサポート致します。
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}