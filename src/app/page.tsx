"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu, X, Phone, Mail, ArrowRight, Instagram } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";
import { ProductTabs } from "@/components/ProductTabs";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slides = [
  
  {
    image: "/クラT画像/2.png",
    title: "先生だ ろろろT！",
    subtitle: "先生の顔面をTシャツに！\n先生をTシャツに！",
  },
  {
    image: "/クラT画像/3.png",
    title: "オリジナル 部活Tシャツ制作",
    subtitle: "オリジナル 部活Tシャツ制作",
  },
  {
    image: "/templates/クラTポスター5.png",
    title: "オリジナル 部活Tシャツ制作",
    subtitle: "オリジナル 部活Tシャツ制作",
  },
  {
    image: "/templates/クラTポスター6.png",
    title: "オリジナル 部活Tシャツ制作",
    subtitle: "オリジナル 部活Tシャツ制作",
  },
  {
    image: "/templates/クラTポスター7.png",
    title: "オリジナル 部活Tシャツ制作",
    subtitle: "オリジナル 部活Tシャツ制作",
  },

];

  const products = [
    { name: "ドライTシャツ", price: "¥980〜", image: "https://ext.same-assets.com/1649376393/3361116398.png", sizes: "XS-5XL" },
    { name: "ポロシャツ", price: "¥1,180〜", image: "https://ext.same-assets.com/1649376393/2847859190.png", sizes: "XS-5XL" },
  ];

  const printMethods = [
    {
      title: "シルクスクリーン",
      description: "大量生産に最適！",
      price: "1枚あたり¥400〜",
      icon: "🎨",
      color: "bg-sparkle-pink",
    },
    {
      title: "DTFプリント",
      description: "フルカラー対応",
      price: "1枚から印刷可能！",
      icon: "🖨️",
      color: "bg-sparkle-turquoise",
    },
    {
      title: "刺繍",
      description: "高級感のある仕上がり",
      price: "お見積もり",
      icon: "🪡",
      color: "bg-sparkle-yellow",
    },
  ];

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
                {/* Primary Actions */}
                <div className="space-y-4">
                  <Link
                    href="https://line.me/R/ti/p/@895gydcc"
                    className="block w-full bg-green-500 text-white text-center py-4 rounded-full font-bold text-lg hover:bg-green-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🎯 LINEで相談・見積もり
                  </Link>
                  <button 
                    className="block w-full bg-sparkle-yellow text-gray-800 text-center py-4 rounded-full font-bold text-lg hover:bg-sparkle-yellow-light transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    💰 料金シミュレーター
                  </button>
                </div>

                {/* Menu Links */}
                <div className="space-y-4 pt-6 border-t">
                  <Link 
                    href="/guide" 
                    className="block text-lg font-medium text-gray-700 py-3 hover:text-sparkle-pink transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    📋 ご利用ガイド
                  </Link>
                  <Link 
                    href="/products" 
                    className="block text-lg font-medium text-gray-700 py-3 hover:text-sparkle-pink transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    👕 商品カタログ
                  </Link>
                  <Link 
                    href="/design" 
                    className="block text-lg font-medium text-gray-700 py-3 hover:text-sparkle-pink transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🎨 デザイン作成
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block text-lg font-medium text-gray-700 py-3 hover:text-sparkle-pink transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ❓ よくある質問
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t text-center text-base text-gray-500">
                  <p>📞 070-9362-9828</p>
                <p>📧 contact@la-muse.org</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Carousel - Mobile Optimized */}
      <section className="relative h-[42vh] min-h-[340px] max-w-2xl mx-auto px-4 overflow-hidden rounded-b-2xl mt-4">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={1.2}
          centeredSlides={true}
          centeredSlidesBounds={true}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          speed={800}
          className="h-full hero-swiper mb-4"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                alt={slide.title}
                src={slide.image}
                className="object-cover rounded-2xl border border-red-500 w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Images Section */}
      <section className="w-full px-4 sm:px-0">
        <div className="w-full">
          <a href="https://line.me/R/ti/p/@895gydcc" className="block">
              <img
                src="/クラT画像/LINEPOP2.JPEG"
                alt="LINEでデザイン ずーっと無料"
                className="w-full h-auto object-cover object-right rounded-lg sm:rounded-none mt-4 cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>
          <img
              src="/クラT画像/サイズが合わない1POP.JPEG"
              alt="サイズが合わない悩みがゼロ！交換保証付"
              className="w-full h-auto object-cover rounded-lg sm:rounded-none"
            />
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="relative bg-gradient-to-r from-sparkle-pink to-sparkle-pink-light py-8">
        <WavePatternBottom color="#ffffff" opacity={0.2} />
        <div className="px-4 relative z-10">
          <div className="text-center text-white">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                クラT・ユニフォーム専門店
              </h2>
            </div>
            <div className="flex flex-row justify-center gap-4 sm:gap-8 mb-4">
              <div className="bg-white/90 backdrop-blur rounded-full w-20 h-20 sm:w-28 sm:h-28 text-gray-800 shadow-lg flex flex-col items-center justify-center aspect-square">
                <span className="text-lg sm:text-xl mb-1">🎨</span>
                <span className="font-bold text-base text-center leading-tight px-1">
                  デザイン＆<br />見積無料
                </span>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-full w-20 h-20 sm:w-28 sm:h-28 text-gray-800 shadow-lg flex flex-col items-center justify-center aspect-square">
                <span className="text-lg sm:text-xl mb-1">⚡</span>
                <span className="font-bold text-sm text-center leading-tight px-1">
                  納期厳守！
                </span>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-full w-20 h-20 sm:w-28 sm:h-28 text-gray-800 shadow-lg flex flex-col items-center justify-center aspect-square">
                <span className="text-lg sm:text-xl mb-1">💳</span>
                <span className="font-bold text-sm text-center leading-tight px-1">
                  お支払いは<br />後払い
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINE CTA */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 py-12">
        <div className="px-4 flex flex-col items-center">
          <div className="bg-white rounded-3xl p-6 shadow-xl text-center w-full max-w-2xl">
            <div className="flex flex-col items-center gap-6">
              <div className="flex-1 flex flex-col items-center">
                <h3 className="text-lg sm:text-xl font-bold mb-4 leading-tight">
                  <span className="text-sparkle-pink">サイズ交換保証</span>で安心！<br />ぴったりのクラスTシャツをお届け
                </h3>
                <p className="text-xl font-bold text-green-600 mb-6">
                  どんな事でもOK！<br />スタッフに聞いてみよう
                </p>
                <div className="flex justify-center">
                  <Link
                    href="https://line.me/R/ti/p/@895gydcc"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                    </svg>
                    LINEで質問
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white rounded-xl shadow-lg p-4">
                  <Image
                    src="/line-qr.jpeg"
                    alt="LINE QRコード"
                    width={180}
                    height={180}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ※LINEは相談窓口となりますので<br />
              注文は出来かねます。
            </p>
          </div>
        </div>
      </section>

      {/* Order Flow */}
      <section className="py-12 bg-gray-50">
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 leading-tight">
            今日注文して<br />
            <span className="text-sparkle-pink">最短5営業日でお届け！</span>
          </h2>
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-sparkle-turquoise text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold mb-2">商品を選ぶ</h3>
              <p className="text-gray-600">ラインナップから選択</p>
            </div>
            <div className="text-center">
              <div className="bg-sparkle-turquoise text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold mb-2">デザインを決める</h3>
              <p className="text-gray-600">無料テンプレートも豊富</p>
            </div>
            <div className="text-center">
              <div className="bg-sparkle-turquoise text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold mb-2">注文・<br />お届け</h3>
              <p className="text-gray-600">最短翌日<br />お届け可能</p>
            </div>
          </div>

        </div>
      </section>

      {/* Products Section with Tabs */}
      <ProductTabs />


      {/* 返金保証 */}
      <section className="py-16 bg-gradient-to-br from-sparkle-turquoise/10 to-sparkle-pink/10">
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            安心の返金保証
          </h2>
          
          <div className="space-y-6">
            {/* 品質保証 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-green-600">品質保証</h3>
                  <p className="text-sm text-gray-600">万が一の品質不良に対応</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                プリントの剥がれ、色落ち、縫製不良など、品質に問題があった場合は
                商品到着から30日以内であれば全額返金いたします。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">30日間保証</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">全額返金</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">品質重視</span>
              </div>
            </div>

            {/* サイズ交換保証 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">📏</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-600">サイズ交換保証</h3>
                  <p className="text-sm text-gray-600">サイズが合わない場合も安心</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                注文したサイズが合わない場合、未使用・未洗濯であれば
                商品到着から14日以内に限り、送料お客様負担で交換対応いたします。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">14日間対応</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">サイズ交換</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">安心サポート</span>
              </div>
            </div>

            {/* デザイン満足保証 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🎨</div>
                <div>
                  <h3 className="text-xl font-bold text-purple-600">デザイン満足保証</h3>
                  <p className="text-sm text-gray-600">イメージと違った場合も対応</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                事前にお送りしたデザイン確認画像と大きく異なる仕上がりの場合、
                商品到着から7日以内であれば作り直しまたは返金対応いたします。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">作り直し可</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs">満足保証</span>
              </div>
            </div>
          </div>


        </div>
      </section>






      {/* Let's Get Started Section */}
      <section className="relative py-16 bg-gradient-to-br from-sparkle-turquoise-light to-sparkle-pink/10">
        <WavePatternTop color="#FF5A9D" opacity={0.1} />
        <div className="px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-4 shadow-lg">
              <span className="text-2xl">🎉</span>
              <h2 className="text-xl sm:text-2xl font-bold text-sparkle-pink">
                初めての方へ
              </h2>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              Let's get Started!
            </h3>
            
            {/* 安心メッセージ */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-md mx-auto">
              <div className="text-3xl mb-3">✨</div>
              <p className="text-xl font-bold text-sparkle-pink mb-3">ご安心ください！</p>
              <p className="text-base text-gray-700 leading-relaxed">
                CRATee'sなら<br className="sm:hidden" />
                <span className="font-bold text-green-600">「安心」</span>・<span className="font-bold text-blue-600">「楽しい」</span><br className="sm:hidden" />クラT作りをお約束します！
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">サイズ交換保証</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">先生分無料</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">LINE完結</span>
              </div>
            </div>
          </div>

          {/* 簡単3ステップ */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-center mb-8 text-gray-800">
              簡単3ステップで完成！
            </h4>
            
            <div className="space-y-6">
              {/* ステップ1 */}
              <div className="relative">
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-sparkle-pink to-sparkle-pink-light rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">👕</span>
                      <h3 className="text-lg font-bold text-gray-800">商品を決めよう！</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      大人気の<span className="font-semibold text-sparkle-pink">ドライTシャツ</span>から<span className="font-semibold text-sparkle-turquoise">ユニフォーム風商品</span>まで<br className="sm:hidden" />
                      豊富なラインナップからお選びください！
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-pink-50 text-pink-700 px-2 py-1 rounded text-xs">Tシャツ</span>
                      <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">ポロシャツ</span>
                      <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">ユニフォーム</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ステップ2 */}
              <div className="relative">
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-sparkle-turquoise to-sparkle-turquoise-light rounded-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🎨</span>
                      <h3 className="text-lg font-bold text-gray-800">デザインを決めよう！</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span className="font-semibold text-sparkle-turquoise">800種類以上</span>のテンプレートから選択OK！<br className="sm:hidden" />
                      もちろん<span className="font-semibold text-sparkle-pink">オリジナルデザイン</span>も大歓迎です
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs">テンプレート豊富</span>
                      <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-xs">オリジナルOK</span>
                      <span className="bg-red-50 text-red-700 px-2 py-1 rounded text-xs">人気デザイン</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ステップ3 */}
              <div className="relative">
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">🎯</span>
                      <h3 className="text-lg font-bold text-gray-800">加工方法を決めよう！</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span className="font-semibold text-green-600">シルクプリント</span>・<span className="font-semibold text-blue-600">刺繍</span>から<br className="sm:hidden" />
                      フルカラーイラストまで様々な加工に対応
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">シルクプリント</span>
                      <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">刺繍</span>
                      <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-xs">フルカラー</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-sm mx-auto">
                <p className="text-sm text-gray-600 mb-4">まずは気軽にご相談ください</p>
                <a href="https://line.me/R/ti/p/@895gydcc" className="w-full bg-gradient-to-r from-sparkle-pink to-sparkle-pink-light text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all block text-center">
                  💬 LINEで無料相談する
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Print Methods */}
      <section className="py-16">
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            ご注文方法のご案内
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {printMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className={`${method.color} p-8 text-center text-white`}>
                  <div className="text-6xl mb-4">{method.icon}</div>
                  <h3 className="text-2xl font-bold">{method.title}</h3>
                </div>
                {method.title === "刺繍" ? (
                  <Link href="/estimate" className="block p-6 hover:bg-gray-50 transition cursor-pointer">
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="text-2xl font-bold text-gray-800">{method.price}</p>
                  </Link>
                ) : (
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="text-2xl font-bold text-gray-800">{method.price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <PriceCalculator />

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
