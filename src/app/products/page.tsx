"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, ArrowRight, Instagram } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

function ProductsContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const categories = [
    { id: "all", name: "全て" },
    { id: "basketball", name: "バスケ" },
    { id: "baseball", name: "野球" },
    { id: "soccer", name: "サッカー" },
    { id: "polo", name: "ポロシャツ" },
    { id: "tshirt", name: "Tシャツ" },
  ];

  const products = [
    // サッカーユニ（ProductTabsと同期）
    { id: "soccer-1", name: "サッカーユニフォーム1", price: "¥1,600〜", image: "/クラT画像/サッカー1.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-2", name: "サッカーユニフォーム2", price: "¥1,600〜", image: "/クラT画像/サッカー2.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-3", name: "サッカーユニフォーム3", price: "¥1,600〜", image: "/クラT画像/サッカー3.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-4", name: "サッカーユニフォーム4", price: "¥1,600〜", image: "/クラT画像/サッカー4.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-5", name: "サッカーユニフォーム5", price: "¥1,600〜", image: "/クラT画像/サッカー5.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-6", name: "サッカーユニフォーム6", price: "¥1,600〜", image: "/クラT画像/サッカー6.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-7", name: "サッカーユニフォーム7", price: "¥1,600〜", image: "/クラT画像/サッカー7.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-8", name: "サッカーユニフォーム8", price: "¥1,600〜", image: "/クラT画像/サッカー8.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-9", name: "サッカーユニフォーム9", price: "¥1,600〜", image: "/クラT画像/サッカー9.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-10", name: "サッカーユニフォーム10", price: "¥1,600〜", image: "/クラT画像/サッカー10.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-11", name: "サッカーユニフォーム11", price: "¥1,600〜", image: "/クラT画像/サッカー11.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-12", name: "サッカーユニフォーム12", price: "¥1,600〜", image: "/クラT画像/サッカー12.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-13", name: "サッカーユニフォーム13", price: "¥1,600〜", image: "/クラT画像/サッカー13.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-14", name: "サッカーユニフォーム14", price: "¥1,600〜", image: "/クラT画像/サッカー14.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-15", name: "サッカーユニフォーム15", price: "¥1,600〜", image: "/クラT画像/サッカー15.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-16", name: "サッカーユニフォーム16", price: "¥1,600〜", image: "/クラT画像/サッカー16.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-17", name: "サッカーユニフォーム17", price: "¥1,600〜", image: "/クラT画像/サッカー17.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-18", name: "サッカーユニフォーム18", price: "¥1,600〜", image: "/クラT画像/サッカー18.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-19", name: "サッカーユニフォーム19", price: "¥1,600〜", image: "/クラT画像/サッカー19.png", sizes: "S-XL", category: "soccer" },
    { id: "soccer-20", name: "サッカーユニフォーム20", price: "¥1,600〜", image: "/クラT画像/サッカー20.png", sizes: "S-XL", category: "soccer" },
    
    // バスケユニ（ProductTabsと同期）
    { id: "basketball-1", name: "バスケユニフォーム1", price: "¥1,600〜", image: "/クラT画像/バスケ1.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-2", name: "バスケユニフォーム2", price: "¥1,600〜", image: "/クラT画像/バスケ2.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-3", name: "バスケユニフォーム3", price: "¥1,600〜", image: "/クラT画像/バスケ3.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-4", name: "バスケユニフォーム4", price: "¥1,600〜", image: "/クラT画像/バスケ4.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-5", name: "バスケユニフォーム5", price: "¥1,600〜", image: "/クラT画像/バスケ5.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-6", name: "バスケユニフォーム6", price: "¥1,600〜", image: "/クラT画像/バスケ6.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-7", name: "バスケユニフォーム7", price: "¥1,600〜", image: "/クラT画像/バスケ7.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-8", name: "バスケユニフォーム8", price: "¥1,600〜", image: "/クラT画像/バスケ8.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-9", name: "バスケユニフォーム9", price: "¥1,600〜", image: "/クラT画像/バスケ9.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-10", name: "バスケユニフォーム10", price: "¥1,600〜", image: "/クラT画像/バスケ10.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-11", name: "バスケユニフォーム11", price: "¥1,600〜", image: "/クラT画像/バスケ11.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-12", name: "バスケユニフォーム12", price: "¥1,600〜", image: "/クラT画像/バスケ12.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-13", name: "バスケユニフォーム13", price: "¥1,600〜", image: "/クラT画像/バスケ13.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-14", name: "バスケユニフォーム14", price: "¥1,600〜", image: "/クラT画像/バスケ14.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-15", name: "バスケユニフォーム15", price: "¥1,600〜", image: "/クラT画像/バスケ15.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-16", name: "バスケユニフォーム16", price: "¥1,600〜", image: "/クラT画像/バスケ16.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-17", name: "バスケユニフォーム17", price: "¥1,600〜", image: "/クラT画像/バスケ17.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-18", name: "バスケユニフォーム18", price: "¥1,600〜", image: "/クラT画像/バスケ18.png", sizes: "S-XL", category: "basketball" },
    { id: "basketball-19", name: "バスケユニフォーム19", price: "¥1,600〜", image: "/クラT画像/バスケ19.png", sizes: "S-XL", category: "basketball" },
    
    // 野球ユニ（ProductTabsと同期）
    { id: "baseball-1", name: "野球ユニフォーム1", price: "¥1,600〜", image: "/クラT画像/野球1.png", sizes: "S-XL", category: "baseball" },
    { id: "baseball-2", name: "野球ユニフォーム2", price: "¥1,600〜", image: "/クラT画像/野球2.png", sizes: "S-XL", category: "baseball" },
    { id: "baseball-3", name: "野球ユニフォーム3", price: "¥1,600〜", image: "/クラT画像/野球3.png", sizes: "S-XL", category: "baseball" },
    { id: "baseball-4", name: "野球ユニフォーム4", price: "¥1,600〜", image: "/クラT画像/野球4.png", sizes: "S-XL", category: "baseball" },
    { id: "baseball-5", name: "野球ユニフォーム5", price: "¥1,600〜", image: "/クラT画像/野球5.png", sizes: "S-XL", category: "baseball" },
    { id: "baseball-6", name: "野球ユニフォーム6", price: "¥1,600〜", image: "/クラT画像/野球6.png", sizes: "S-XL", category: "baseball" },
    { id: "baseball-7", name: "野球ユニフォーム7", price: "¥1,600〜", image: "/クラT画像/野球7.png", sizes: "S-XL", category: "baseball" },
    { id: "baseball-8", name: "野球ユニフォーム8", price: "¥1,600〜", image: "/クラT画像/野球8.png", sizes: "S-XL", category: "baseball" },
    
    // クラスT（ProductTabsと同期）
    { id: "classt-1", name: "Tシャツ1", price: "¥1,300〜", image: "/クラT画像/Tシャツ1.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-2", name: "Tシャツ2", price: "¥1,300〜", image: "/クラT画像/Tシャツ2.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-3", name: "Tシャツ3", price: "¥1,300〜", image: "/クラT画像/Tシャツ3.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-4", name: "Tシャツ4", price: "¥1,300〜", image: "/クラT画像/Tシャツ4.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-5", name: "Tシャツ5", price: "¥1,300〜", image: "/クラT画像/Tシャツ5.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-6", name: "Tシャツ6", price: "¥1,300〜", image: "/クラT画像/Tシャツ6.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-7", name: "Tシャツ7", price: "¥1,300〜", image: "/クラT画像/Tシャツ7.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-8", name: "Tシャツ8", price: "¥1,300〜", image: "/クラT画像/Tシャツ8.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-9", name: "Tシャツ9", price: "¥1,300〜", image: "/クラT画像/Tシャツ9.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-10", name: "Tシャツ10", price: "¥1,300〜", image: "/クラT画像/Tシャツ10.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-11", name: "Tシャツ11", price: "¥1,300〜", image: "/クラT画像/Tシャツ11.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-12", name: "Tシャツ12", price: "¥1,300〜", image: "/クラT画像/Tシャツ12.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-13", name: "Tシャツ13", price: "¥1,300〜", image: "/クラT画像/Tシャツ13.png", sizes: "S-XL", category: "tshirt" },
    { id: "classt-14", name: "Tシャツ14", price: "¥1,300〜", image: "/クラT画像/Tシャツ14.png", sizes: "S-XL", category: "tshirt" },



    // ポロシャツ
    { id: "polo-1", name: "ポロシャツ1", price: "¥1,800〜", image: "/クラT画像/ポロシャツ1.png", sizes: "S-XL", category: "polo" },
    { id: "polo-2", name: "ポロシャツ2", price: "¥1,800〜", image: "/クラT画像/ポロシャツ2.png", sizes: "S-XL", category: "polo" },
    { id: "polo-3", name: "ドライポロ3", price: "¥1,800〜", image: "/クラT画像/ポロシャツ3.png", sizes: "S-XL", category: "polo" },
    { id: "polo-4", name: "ポロシャツ4", price: "¥1,800〜", image: "/クラT画像/ポロシャツ4.png", sizes: "S-XL", category: "polo" },

  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/logo.png"
                    alt="Sparkle Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>

                {/* LINE Button & Menu Toggle */}
                <div className="flex items-center space-x-2">
                  <a
                    href="https://line.me/R/ti/p/@895gydcc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center gap-2 whitespace-nowrap shrink-0 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z" />
                    </svg>
                    💬 LINE相談
                  </a>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 text-gray-600 hover:text-sparkle-pink transition"
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="bg-white border-t border-gray-200 px-4 py-4">
                <div className="space-y-3">
                  <Link href="/" className="block text-gray-700 hover:text-sparkle-pink transition">
                    ホーム
                  </Link>
                  <Link href="/products" className="block text-gray-700 hover:text-sparkle-pink transition">
                    商品一覧
                  </Link>
                  <Link href="/products" className="block text-gray-700 hover:text-sparkle-pink transition">
                    お見積もり
                  </Link>
                  <Link href="/guide" className="block text-gray-700 hover:text-sparkle-pink transition">
                    ご利用ガイド
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main className="pb-20">
          {/* Page Title */}
          <div className="bg-gradient-to-r from-sparkle-pink to-sparkle-turquoise text-white py-8">
            <div className="px-4 text-center">
              <h1 className="text-2xl font-bold mb-2">商品・デザインテンプレート一覧</h1>
              <p className="text-sm opacity-90">お気に入りの商品を見つけよう！</p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="px-4 py-4 bg-white border-b">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                    activeCategory === category.id
                      ? "bg-sparkle-pink text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid - 視覚重視レイアウト */}
          <div className="px-4 py-6">
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* 大きな商品画像 */}
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  {/* 商品情報 */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{product.name}</h3>
                    <p className="text-sparkle-pink font-bold text-2xl mb-4">{product.price}</p>
                    <p className="text-gray-600 text-sm mb-4">{product.sizes}</p>
                    
                    {/* ボタンエリア */}
                    <div className="flex gap-3">
                      {/* LINE相談ボタン */}
                      <a
                        href={`https://line.me/R/ti/p/@895gydcc?text=${encodeURIComponent(`${product.name}について相談したいです`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-bold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z" />
                        </svg>
                        💬 LINE相談
                      </a>
                      
                      {/* 詳細ボタン */}
                      <Link
                        href={`/product-detail/${product.id}`}
                        className="flex-1 bg-sparkle-pink text-white py-3 px-4 rounded-xl font-bold text-center hover:bg-sparkle-pink-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        詳細を見る
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="px-4 py-8 bg-gray-50">
            <div className="text-center">
              <h2 className="text-lg font-bold mb-4">お見積もりはこちら</h2>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-sparkle-pink text-white px-6 py-3 rounded-full font-bold hover:bg-sparkle-pink-dark transition"
              >
                無料見積もり
                <ArrowRight size={16} />
              </Link>
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
                  <Link href="/products" className="block hover:text-sparkle-pink transition">お見積もりフォーム</Link>
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

export default function Products() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}