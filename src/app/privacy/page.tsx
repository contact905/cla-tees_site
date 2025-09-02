"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

export default function Privacy() {
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
                プライバシーポリシー
              </h1>
              <p className="text-gray-600">
                個人情報の取り扱いについて
              </p>
            </div>

            {/* Privacy Policy Content */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-sparkle-blue">個人情報の取り扱いについて</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                株式会社LaMuse（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、個人情報保護法及び関連法令を遵守し、適切な取り扱いに努めます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sparkle-blue">1. 個人情報の収集について</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社では、以下の場合に個人情報を収集させていただきます：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>お見積もりのご依頼時</li>
                <li>商品のご注文時</li>
                <li>お問い合わせ時</li>
                <li>その他サービス提供に必要な場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sparkle-blue">2. 収集する個人情報の項目</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>氏名</li>
                <li>電話番号</li>
                <li>メールアドレス</li>
                <li>住所</li>
                <li>その他サービス提供に必要な情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sparkle-blue">3. 個人情報の利用目的</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                収集した個人情報は、以下の目的で利用いたします：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>商品・サービスの提供</li>
                <li>お見積もりの作成・提供</li>
                <li>お問い合わせへの対応</li>
                <li>商品の配送</li>
                <li>アフターサービスの提供</li>
                <li>新商品・サービスのご案内</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sparkle-blue">4. 個人情報の第三者提供</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sparkle-blue">5. 個人情報の管理</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、個人情報の漏洩、滅失、毀損を防止するため、適切な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sparkle-blue">6. 個人情報の開示・訂正・削除</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                お客様は、当社が保有する個人情報について、開示・訂正・削除を求めることができます。ご希望の場合は、下記連絡先までお問い合わせください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sparkle-blue">7. お問い合わせ先</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>株式会社LaMuse</strong></p>
                <p className="text-gray-700 mb-2">〒150-0002 東京都渋谷区渋谷3丁目27-1 2F</p>
                <p className="text-gray-700 mb-2">電話：070-9362-9828</p>
                <p className="text-gray-700">メール：contact@la-muse.org</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sparkle-blue">8. プライバシーポリシーの変更</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、法令の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <div className="text-right text-gray-600 mt-8">
              <p>制定日：2024年1月1日</p>
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
        </div>
      </main>

      {/* Wave Pattern */}
      <WavePatternBottom />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="CRATee's Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">CRATee's</span>
            </div>
            <p className="text-gray-400 text-sm">
              オリジナルTシャツ・クラスTシャツの制作なら
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">サービス</h3>
              <ul className="space-y-2">
                <Link href="/products" className="block hover:text-sparkle-pink transition">商品一覧</Link>
                <Link href="/guide" className="block hover:text-sparkle-pink transition">ご利用ガイド</Link>
                <Link href="/estimate" className="block hover:text-sparkle-pink transition">お見積もり</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">デザイン相談</Link>
                <Link href="#" className="block hover:text-sparkle-pink transition">加工方法</Link>
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
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-xs text-gray-400">
              © 2024 CRATee's. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}