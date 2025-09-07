"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

export default function Returns() {
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
                  className="p-2 rounded-lg hover:bg-gray-100 shrink-0"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            {/* Mobile Menu - Full Screen Overlay */}
            {/* Header in Menu */}
            <div className="flex items-center justify-between p-4 border-b">
              <Image
                src="/logo.png"
                alt="SPARKLE"
                width={120}
                height={48}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-6">
              <div className="space-y-6">
                <Link
                  href="/"
                  className="block text-xl font-semibold text-gray-800 hover:text-sparkle-pink transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ホーム
                </Link>
                <Link
                  href="/products"
                  className="block text-xl font-semibold text-gray-800 hover:text-sparkle-pink transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  商品一覧
                </Link>
                <Link
                  href="/guide"
                  className="block text-xl font-semibold text-gray-800 hover:text-sparkle-pink transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ご利用ガイド
                </Link>
                <Link
                  href="/company"
                  className="block text-xl font-semibold text-gray-800 hover:text-sparkle-pink transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  会社概要
                </Link>
                <Link
                  href="/estimate"
                  className="block bg-sparkle-pink text-white px-6 py-3 rounded-full text-center font-bold hover:bg-pink-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  お見積もり
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="px-4 py-8">
        <WavePatternTop />
        
        <div className="mx-auto">
          <h1 className="text-2xl font-bold text-center mb-6 text-sparkle-blue">
            返品・交換に関する特約
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-4 text-sparkle-blue">1. 返品・交換について</h2>
              <p className="text-gray-700 leading-relaxed">
                お客様都合による返品・交換は、原則として承っておりません。ただし、以下の場合に限り、返品・交換を承ります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-sparkle-blue">2. 返品・交換可能な場合</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>商品に明らかな不具合がある場合</li>
                <li>ご注文内容と異なる商品が届いた場合</li>
                <li>配送中の破損により商品が損傷した場合</li>
                <li>弊社の責任による印刷ミスがある場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-sparkle-blue">3. 返品・交換の条件</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>商品到着後7日以内にご連絡いただくこと</li>
                <li>商品が未使用・未開封の状態であること</li>
                <li>商品のタグや包装が損なわれていないこと</li>
                <li>オーダーメイド商品については、弊社の責任による場合のみ対応</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-sparkle-blue">4. 返品・交換の手続き</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>まずはお電話またはメールにてご連絡ください</li>
                <li>返品・交換理由をお聞かせください</li>
                <li>弊社にて確認後、返品・交換方法をご案内いたします</li>
                <li>指定の方法にて商品をご返送ください</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-sparkle-blue">5. 返品・交換にかかる費用</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>弊社の責任による場合：返送料は弊社負担</li>
                <li>お客様都合による場合：返送料はお客様負担</li>
                <li>交換商品の送料は弊社負担</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-sparkle-blue">6. 返金について</h2>
              <p className="text-gray-700 leading-relaxed">
                返品が承認された場合、商品代金を返金いたします。返金方法は、原則としてお支払い方法と同じ方法で行います。返金処理には1〜2週間程度お時間をいただく場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-sparkle-blue">7. お問い合わせ</h2>
              <div className="text-gray-700 space-y-2">
                <p>返品・交換に関するお問い合わせは、以下までご連絡ください。</p>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>電話：070-9362-9828</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>メール：contact@la-muse.org</span>
                </div>
                <p className="text-sm text-gray-500">受付時間：平日 9:00〜18:00</p>
              </div>
            </section>
          </div>
        </div>
      </main>

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
              © ORIGINAL PRINTING S PARKLE
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