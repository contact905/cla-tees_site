"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu, X, Phone, Mail, ArrowRight, Instagram } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";
import { ProductTabs } from "@/components/ProductTabs";

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

                {/* Enhanced Primary CTA Button */}
                <Link
                  href="https://line.me/R/ti/p/@895gydcc"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                  </svg>
                  💬 LINE相談
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
                    💬 LINEで無料相談
                  </Link>
                  <Link 
                    href="/products"
                    className="block w-full bg-sparkle-pink text-white text-center py-4 rounded-full font-bold text-lg hover:bg-sparkle-pink-light transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🛒 商品カタログ
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

      {/* Products Section with Tabs */}
      <ProductTabs />

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-br from-sparkle-pink to-sparkle-pink-light">
        <div className="px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">今すぐ始めよう！</h2>
            <p className="text-xl mb-8">LINEで簡単相談 & ECサイトで商品チェック</p>
          </div>
          
          <div className="flex flex-col gap-6 max-w-md mx-auto">
            <Link
              href="https://line.me/R/ti/p/@895gydcc"
              className="bg-green-500 text-white py-6 px-8 rounded-2xl font-bold text-xl text-center hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
              </svg>
              💬 LINEで無料相談
            </Link>
            
            <Link
              href="/products"
              className="bg-white text-sparkle-pink py-6 px-8 rounded-2xl font-bold text-xl text-center hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              🛒 商品カタログを見る
            </Link>
          </div>
        </div>
      </section>



      {/* Floating Action Button for LINE */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://line.me/R/ti/p/@895gydcc"
          className="bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
          </svg>
        </Link>
        <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
          !
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="px-4">
          {/* Main CTA Buttons */}
          <div className="flex flex-col gap-4 mb-8">
            <Link
              href="https://line.me/R/ti/p/@895gydcc"
              className="bg-green-500 text-white py-4 px-6 rounded-full font-bold text-lg text-center hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
              </svg>
              💬 LINEで無料相談
            </Link>
            
            <Link
              href="/products"
              className="bg-sparkle-pink text-white py-4 px-6 rounded-full font-bold text-lg text-center hover:bg-sparkle-pink-light transition-all duration-300 flex items-center justify-center gap-3"
            >
              🛒 商品カタログを見る
            </Link>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              <div className="text-sm text-gray-400 space-y-2">
                <div className="flex justify-center items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>070-9362-9828</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
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
