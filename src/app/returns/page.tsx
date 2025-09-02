"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

export default function Returns() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <footer className="bg-white shadow-sm relative z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="CRATee's Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-sparkle-blue">CRATee's</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-sparkle-pink transition">
                ホーム
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-sparkle-pink transition">
                商品一覧
              </Link>
              <Link href="/guide" className="text-gray-700 hover:text-sparkle-pink transition">
                ご利用ガイド
              </Link>
              <Link href="/company" className="text-gray-700 hover:text-sparkle-pink transition">
                会社概要
              </Link>
              <Link
                href="/estimate"
                className="bg-sparkle-pink text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
              >
                お見積もり
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-gray-700 hover:text-sparkle-pink transition py-2">
                  ホーム
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-sparkle-pink transition py-2">
                  商品一覧
                </Link>
                <Link href="/guide" className="text-gray-700 hover:text-sparkle-pink transition py-2">
                  ご利用ガイド
                </Link>
                <Link href="/company" className="text-gray-700 hover:text-sparkle-pink transition py-2">
                  会社概要
                </Link>
                <Link
                  href="/estimate"
                  className="bg-sparkle-pink text-white px-6 py-2 rounded-full hover:bg-pink-600 transition text-center"
                >
                  お見積もり
                </Link>
              </div>
            </nav>
          )}
        </div>
      </footer>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <WavePatternTop />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-sparkle-blue">
            返品・交換に関する特約
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
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
      <div className="bg-sparkle-blue text-white relative">
        <WavePatternTop />
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="CRATee's Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">CRATee's</span>
              </div>
              <p className="text-gray-300 text-sm">
                オリジナルクラスTシャツの制作なら、CRATee'sにお任せください。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">商品・サービス</h3>
              <ul className="space-y-2">
                <Link href="/products" className="block hover:text-sparkle-pink transition">商品一覧</Link>
                <Link href="/guide" className="block hover:text-sparkle-pink transition">ご利用ガイド</Link>
                <Link href="/estimate" className="block hover:text-sparkle-pink transition">お見積もり</Link>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">CRATee'sについて</h3>
              <ul className="space-y-2">
                <Link href="/company" className="block hover:text-sparkle-pink transition">会社概要</Link>
                <Link href="/legal" className="block hover:text-sparkle-pink transition">特定商取引に基づく表記</Link>
                <Link href="/privacy" className="block hover:text-sparkle-pink transition">プライバシーポリシー</Link>
                <Link href="/returns" className="block hover:text-sparkle-pink transition">返品・交換に関する特約</Link>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>070-9362-9828</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>contact@la-muse.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              <p className="text-gray-300">
                &copy; 2024 株式会社LaMuse. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <WavePatternBottom />
      </div>
    </div>
  );
}