"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin, Clock, Users } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

export default function Company() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen relative">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          {/* Top Bar */}
          <div className="bg-sparkle-pink text-white text-center py-2">
            <p className="text-sm font-medium">オリジナルTシャツ・クラスTシャツの制作なら</p>
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
              href="/estimate"
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition"
            >
              LINE相談
            </Link>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-40">
              <div className="p-4 space-y-2">
                <Link href="/" className="block text-lg font-bold py-3 border-b hover:text-sparkle-pink transition">
                  ホーム
                </Link>
                <Link href="/estimate" className="block text-lg font-bold py-3 border-b hover:text-sparkle-pink transition">
                  データ入稿・お見積もり
                </Link>
                <Link href="/products" className="block text-lg font-bold py-3 border-b hover:text-sparkle-pink transition">
                  商品一覧
                </Link>
                <Link href="#" className="block text-lg font-bold py-3 border-b hover:text-sparkle-pink transition">
                  デザインサンプル
                </Link>
                <Link href="#" className="block text-lg font-bold py-3 border-b hover:text-sparkle-pink transition">
                  ご注文方法
                </Link>
              </div>

              {/* Contact Info in Menu */}
              <div className="p-4 bg-gray-50 border-t">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-sparkle-pink" />
                    <span className="font-bold">070-9362-9828</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-sparkle-pink" />
                    <span>contact@la-muse.org</span>
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
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              会社概要
            </h1>
            <p className="text-gray-600">
              CRATee's について
            </p>
          </div>

          {/* Company Information */}
          <section className="px-4 py-8">
            <div className="space-y-8">
              {/* Company Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-sparkle-pink" />
                  会社情報
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <dt className="text-sm font-bold text-gray-600 mb-1">会社名</dt>
                    <dd className="text-lg">株式会社LaMuse</dd>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <dt className="text-sm font-bold text-gray-600 mb-1">代表者</dt>
                    <dd className="text-lg">鶴健一郎</dd>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <dt className="text-sm font-bold text-gray-600 mb-1">設立</dt>
                    <dd className="text-lg">2020年4月1日</dd>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <dt className="text-sm font-bold text-gray-600 mb-1">資本金</dt>
                    <dd className="text-lg">500万円</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-bold text-gray-600 mb-1">事業内容</dt>
                    <dd className="text-lg">オリジナルTシャツ・クラスTシャツの企画・製造・販売</dd>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-sparkle-turquoise" />
                  お問い合わせ
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-sparkle-pink mt-1" />
                    <div>
                      <dt className="text-sm font-bold text-gray-600">電話番号</dt>
                      <dd className="text-lg font-bold">070-9362-9828</dd>

                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-sparkle-turquoise mt-1" />
                    <div>
                      <dt className="text-sm font-bold text-gray-600">メールアドレス</dt>
                      <dd className="text-lg">contact@la-muse.org</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sparkle-pink mt-1" />
                    <div>
                      <dt className="text-sm font-bold text-gray-600">所在地</dt>
                      <dd className="text-lg">〒150-0002</dd>
                      <dd className="text-lg">東京都渋谷区渋谷3丁目27-1 2F</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-sparkle-turquoise mt-1" />
                    <div>
                      <dt className="text-sm font-bold text-gray-600">営業時間</dt>
                      <dd className="text-lg">平日 9:00 - 18:00</dd>
                      <dd className="text-sm text-gray-600">（土日祝日は休業）</dd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6">私たちの想い</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    CRATee'sは、お客様の大切な思い出作りを全力でサポートいたします。
                    クラスTシャツやオリジナルTシャツを通じて、特別な瞬間をより輝かせるお手伝いをさせていただきます。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    高品質な商品と丁寧なサービスで、お客様に満足していただけるよう日々努力しております。
                    ご不明な点がございましたら、お気軽にお問い合わせください。
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-sparkle-pink to-sparkle-pink-light rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-4">お見積もりはこちら</h3>
                <p className="mb-6 opacity-90">
                  無料でお見積もりいたします
                </p>
                <Link
                  href="/estimate"
                  className="inline-block bg-white text-sparkle-pink px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
                >
                  お見積もりフォーム
                </Link>
              </div>
            </div>
          </section>
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