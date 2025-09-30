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
      {/* Responsive Container */}
      <div className="max-w-[430px] md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto bg-white shadow-xl min-h-screen relative">
      {/* Header - Mobile First */}
      <header className="sticky top-0 z-50 bg-white">
        {/* Top Bar - Responsive */}
        <div className="bg-sparkle-pink text-white py-3">
          <div className="px-4 md:px-8 text-center">
            <span className="text-base md:text-lg font-bold leading-relaxed">🎉 LINEで簡単注文 | 学生の味方！</span>
          </div>
        </div>

        {/* Main Navigation - Responsive */}
        <nav className="bg-white">
          <div className="px-4 md:px-8">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-4 md:gap-8">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="SPARKLE"
                    width={120}
                    height={48}
                    className="h-10 md:h-12 w-auto"
                  />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-6">
                  <Link href="/products" className="text-gray-700 hover:text-sparkle-pink font-medium transition py-3 px-2 text-base">
                    商品一覧
                  </Link>
                  <Link href="/guide" className="text-gray-700 hover:text-sparkle-pink font-medium transition py-3 px-2 text-base">
                    ご利用ガイド
                  </Link>
                  <Link href="/company" className="text-gray-700 hover:text-sparkle-pink font-medium transition py-3 px-2 text-base">
                    会社概要
                  </Link>
                </div>

                {/* Enhanced Primary CTA Button */}
                <Link
                  href="https://line.me/R/ti/p/@895gydcc"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px]"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                  </svg>
                  <span className="hidden sm:inline">💬 LINE相談</span>
                  <span className="sm:hidden">💬</span>
                </Link>

                {/* Menu Toggle */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-3 rounded-lg hover:bg-gray-100 shrink-0 min-h-[48px] min-w-[48px] flex items-center justify-center"
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
                className="p-3 rounded-lg hover:bg-gray-100 min-h-[48px] min-w-[48px] flex items-center justify-center"
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
                    className="block w-full bg-green-500 text-white text-center py-5 rounded-full font-bold text-xl hover:bg-green-600 transition min-h-[56px] flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    💬 LINEで無料相談
                  </Link>
                  <Link 
                    href="/products"
                    className="block w-full bg-sparkle-pink text-white text-center py-5 rounded-full font-bold text-xl hover:bg-sparkle-pink-light transition min-h-[56px] flex items-center justify-center"
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

      {/* Hero Carousel - Responsive */}
      <section className="relative h-[42vh] md:h-[50vh] lg:h-[60vh] min-h-[340px] max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-4 md:px-8 overflow-hidden rounded-b-2xl mt-4">
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
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative w-full h-full rounded-2xl border border-red-500 overflow-hidden">
                <Image
                  alt={slide.title}
                  src={slide.image}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 60vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                  quality={85}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Images Section */}
      <section className="w-full px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto">
          <a href="https://line.me/R/ti/p/@895gydcc" className="block">
            <div className="relative w-full h-auto mt-4 rounded-lg overflow-hidden">
              <Image
                src="/クラT画像/LINEPOP2.JPEG"
                alt="LINEでデザイン ずーっと無料"
                width={800}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                className="w-full h-auto object-cover object-right cursor-pointer hover:opacity-90 transition-opacity"
                priority
                quality={85}
              />
            </div>
          </a>
          <div className="relative w-full h-auto mt-4 rounded-lg overflow-hidden">
            <Image
              src="/クラT画像/サイズが合わない1POP.JPEG"
              alt="サイズが合わない悩みがゼロ！交換保証付"
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              className="w-full h-auto object-cover"
              quality={85}
            />
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="relative bg-gradient-to-r from-sparkle-pink to-sparkle-pink-light py-8 md:py-12 lg:py-16">
        <WavePatternBottom color="#ffffff" opacity={0.2} />
        <div className="px-4 md:px-8 relative z-10">
          <div className="text-center text-white max-w-6xl mx-auto">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 lg:mb-12 leading-tight">
                クラT・ユニフォーム専門店
              </h2>
            </div>
            <div className="flex flex-row justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 mb-4">
              <div className="bg-white/90 backdrop-blur rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 text-gray-800 shadow-lg flex flex-col items-center justify-center aspect-square">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1">🎨</span>
                <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center leading-tight px-1">
                  デザイン＆<br />見積無料
                </span>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 text-gray-800 shadow-lg flex flex-col items-center justify-center aspect-square">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1">⚡</span>
                <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center leading-tight px-1">
                  納期厳守！
                </span>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 text-gray-800 shadow-lg flex flex-col items-center justify-center aspect-square">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1">💳</span>
                <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center leading-tight px-1">
                  お支払いは<br />後払い
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LINE CTA */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 py-12 md:py-16 lg:py-20">
        <div className="px-4 md:px-8 flex flex-col items-center">
          <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl text-center w-full max-w-2xl md:max-w-4xl lg:max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-sparkle-pink">サイズ交換保証</span>で安心！<br />ぴったりのクラスTシャツをお届け
                </h3>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-6 md:mb-8 leading-tight">
                  どんな事でもOK！<br />スタッフに聞いてみよう
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Link
                    href="https://line.me/R/ti/p/@895gydcc"
                    className="inline-flex items-center gap-2 md:gap-3 bg-green-500 text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 rounded-full font-bold text-lg md:text-xl lg:text-2xl hover:bg-green-600 transition min-h-[56px]"
                  >
                    <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                    </svg>
                    LINEで質問
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white rounded-xl shadow-lg p-4">
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
            <p className="text-sm md:text-base text-gray-500 mt-4 md:mt-6">
              ※LINEは相談窓口となりますので<br />
              注文は出来かねます。
            </p>
          </div>
        </div>
      </section>

      {/* Products Section with Tabs */}
      <ProductTabs />

      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-sparkle-pink to-sparkle-pink-light">
        <div className="px-4 md:px-8">
          <div className="text-center text-white mb-12 md:mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">今すぐ始めよう！</h2>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8">LINEで簡単相談 & ECサイトで商品チェック</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-md md:max-w-4xl mx-auto">
            <Link
              href="https://line.me/R/ti/p/@895gydcc"
              className="bg-green-500 text-white py-6 md:py-8 px-8 md:px-12 rounded-2xl font-bold text-xl md:text-2xl text-center hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3 md:gap-4 flex-1"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
              </svg>
              💬 LINEで無料相談
            </Link>
            
            <Link
              href="/products"
              className="bg-white text-sparkle-pink py-6 md:py-8 px-8 md:px-12 rounded-2xl font-bold text-xl md:text-2xl text-center hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3 md:gap-4 flex-1"
            >
              🛒 商品カタログを見る
            </Link>
          </div>
        </div>
      </section>



      {/* Floating Action Button for LINE */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Link
          href="https://line.me/R/ti/p/@895gydcc"
          className="bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 min-w-[64px] min-h-[64px]"
        >
          <svg className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
          </svg>
        </Link>
        <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 bg-red-500 text-white text-sm rounded-full w-6 h-6 md:w-7 md:h-7 flex items-center justify-center font-bold animate-bounce">
          !
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
        <div className="px-4 md:px-8 max-w-6xl mx-auto">
          {/* Main CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 md:mb-12">
            <Link
              href="https://line.me/R/ti/p/@895gydcc"
              className="bg-green-500 text-white py-5 md:py-6 px-8 md:px-10 rounded-full font-bold text-xl md:text-2xl text-center hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-3 flex-1 min-h-[56px]"
            >
              <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
              </svg>
              💬 LINEで無料相談
            </Link>
            
            <Link
              href="/products"
              className="bg-sparkle-pink text-white py-5 md:py-6 px-8 md:px-10 rounded-full font-bold text-xl md:text-2xl text-center hover:bg-sparkle-pink-light transition-all duration-300 flex items-center justify-center gap-3 flex-1 min-h-[56px]"
            >
              🛒 商品カタログを見る
            </Link>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="text-center">
              <div className="text-base md:text-lg text-gray-400 space-y-2">
                <div className="flex justify-center items-center gap-4">
                  <div className="flex items-center gap-2 py-2">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    <span>070-9362-9828</span>
                  </div>
                  <div className="flex items-center gap-2 py-2">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    <span>contact@la-muse.org</span>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-4 mt-4">
                  <Link href="https://www.instagram.com/cla_tees?igsh=MTNtdWJ4bm5nYWRmbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-sparkle-pink transition p-3 min-h-[48px] min-w-[48px] flex items-center justify-center">
                    <Instagram className="w-6 h-6 md:w-7 md:h-7" />
                  </Link>
                  <Link href="https://www.tiktok.com/@clatees?_t=ZS-8zO4FkW6JrM&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-sparkle-pink transition p-3 min-h-[48px] min-w-[48px] flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p className="text-base md:text-lg">
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
