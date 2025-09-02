"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

export default function Shipping() {
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
                  <a
                    href="https://line.me/R/ti/p/@895gydcc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition flex items-center gap-2"
                  >
                    <span>📱</span>
                    LINE注文
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-gray-600 hover:text-sparkle-pink transition"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-20">
            <nav className="px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-3 text-lg font-medium text-gray-700 hover:text-sparkle-pink transition"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link
                href="/products"
                className="block py-3 text-lg font-medium text-gray-700 hover:text-sparkle-pink transition"
                onClick={() => setIsMenuOpen(false)}
              >
                商品一覧
              </Link>
              <Link
                href="/guide"
                className="block py-3 text-lg font-medium text-gray-700 hover:text-sparkle-pink transition"
                onClick={() => setIsMenuOpen(false)}
              >
                ご利用ガイド
              </Link>
              <Link
                href="/company"
                className="block py-3 text-lg font-medium text-gray-700 hover:text-sparkle-pink transition"
                onClick={() => setIsMenuOpen(false)}
              >
                会社概要
              </Link>
              <Link
                href="/estimate"
                className="block py-3 text-lg font-medium bg-sparkle-pink text-white rounded-lg text-center hover:bg-pink-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                お見積もり
              </Link>

              {/* Contact Info */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={18} />
                  <span>050-3138-2090</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={18} />
                  <span>info@cratees.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}

        <WavePatternTop />

        {/* Main Content */}
        <main className="px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              配送事項
            </h1>
            <p className="text-gray-600">
              配送に関する詳細情報をご確認ください
            </p>
          </div>

          <div className="space-y-8">
            {/* 配送料について */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-sparkle-pink flex items-center gap-2">
                <span>🚚</span>
                配送料について
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-bold text-green-800 mb-2">30枚以上のご注文</h3>
                  <p className="text-green-700 text-lg font-bold">送料無料！</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">29枚以下のご注文</h3>
                  <p className="text-gray-700">全国一律 <span className="font-bold text-lg">880円</span>（税込）</p>
                </div>
              </div>
            </section>

            {/* 配送方法 */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-sparkle-turquoise flex items-center gap-2">
                <span>📦</span>
                配送方法
              </h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">ヤマト運輸</h3>
                  <p className="text-gray-600 text-sm">宅急便にてお届けいたします</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-2">佐川急便</h3>
                  <p className="text-gray-600 text-sm">飛脚宅配便にてお届けいたします</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  ※ 配送業者はご指定いただけません。地域により最適な配送業者を選択いたします。
                </p>
              </div>
            </section>

            {/* 配送期間 */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-sparkle-yellow flex items-center gap-2">
                <span>⏰</span>
                配送期間
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-bold text-blue-800 mb-2">通常配送</h3>
                  <p className="text-blue-700">ご注文確定から <span className="font-bold">7〜10営業日</span> でお届け</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-bold text-orange-800 mb-2">お急ぎ便（オプション）</h3>
                  <p className="text-orange-700">ご注文確定から <span className="font-bold">3〜5営業日</span> でお届け</p>
                  <p className="text-sm text-orange-600 mt-1">※ 別途お急ぎ料金（+1,000円）が発生します</p>
                </div>
              </div>
            </section>

            {/* 配送時間指定 */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-sparkle-purple flex items-center gap-2">
                <span>🕐</span>
                配送時間指定
              </h2>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="border border-gray-200 rounded-lg p-3 text-center">
                  午前中<br />（8:00〜12:00）
                </div>
                <div className="border border-gray-200 rounded-lg p-3 text-center">
                  14:00〜16:00
                </div>
                <div className="border border-gray-200 rounded-lg p-3 text-center">
                  16:00〜18:00
                </div>
                <div className="border border-gray-200 rounded-lg p-3 text-center">
                  18:00〜20:00
                </div>
                <div className="border border-gray-200 rounded-lg p-3 text-center">
                  19:00〜21:00
                </div>
                <div className="border border-gray-200 rounded-lg p-3 text-center">
                  20:00〜21:00
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                ※ 時間指定は無料です。ご注文時にご指定ください。
              </p>
            </section>

            {/* 注意事項 */}
            <section className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-red-600 flex items-center gap-2">
                <span>⚠️</span>
                配送に関する注意事項
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>離島・一部地域では追加送料が発生する場合があります</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>天候や交通事情により配送が遅れる場合があります</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>不在時は不在票を投函いたします。再配達をご依頼ください</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>配送先の変更は製作開始前まで可能です</span>
                </li>
              </ul>
            </section>
          </div>
        </main>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-sparkle-pink to-sparkle-turquoise text-white py-12">
          <div className="px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">配送について<br />ご不明な点がございましたら</h2>
            <p className="mb-6 text-lg">お気軽にお問い合わせください</p>
            <div className="space-y-3">
              <a
                href="https://line.me/R/ti/p/@895gydcc"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white py-3 px-6 rounded-full font-bold hover:bg-green-600 transition"
              >
                📱 LINEで相談する
              </a>

            </div>
          </div>
        </section>

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