"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Menu, X } from "lucide-react";

// 簡易データ。実際は API や DB から取得する想定
const products: Record<string, { title: string; image: string; price: number }> = {
  "1": {
    title: "前面プリント済ドライTシャツ (タイプ02) (BD-02)",
    image: "/クラT画像/1.png",
    price: 1000,
  },
};

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const product = products[id] ?? {
    title: `商品 ${id}`,
    image: "/api/placeholder/400/400",
    price: 0,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Responsive Container */}
      <div className="max-w-[430px] md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto bg-white shadow-xl min-h-screen relative">
        {/* Header - Responsive */}
        <header className="sticky top-0 z-50 bg-white">
          {/* Top Bar */}
          <div className="bg-sparkle-pink text-white py-2 md:py-3">
            <div className="px-4 md:px-8 text-center">
              <span className="text-sm md:text-base font-bold">🎉 LINEで簡単注文 | 学生の味方！</span>
            </div>
          </div>
          {/* Navigation */}
          <nav className="bg-white border-b border-gray-200">
            <div className="px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center">
                  <Image src="/logo.png" alt="SPARKLE" width={120} height={48} className="h-10 md:h-12 w-auto" />
                </Link>
                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-6 ml-8">
                  <Link href="/guide" className="text-gray-700 hover:text-sparkle-pink transition font-medium">
                    📋 ご利用ガイド
                  </Link>
                  <Link href="/products" className="text-gray-700 hover:text-sparkle-pink transition font-medium">
                    👕 商品カタログ
                  </Link>
                  <Link href="/design" className="text-gray-700 hover:text-sparkle-pink transition font-medium">
                    🎨 デザイン作成
                  </Link>
                  <Link href="/faq" className="text-gray-700 hover:text-sparkle-pink transition font-medium">
                    ❓ よくある質問
                  </Link>
                </div>
              </div>
              
              {/* Desktop LINE Button */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="https://line.me/R/ti/p/@895gydcc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm transition flex items-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-2.07 1.31-5.85 3.85-.55.38-1.05.56-1.49.56-.49-.01-1.43-.28-2.13-.51-.86-.28-1.54-.43-1.48-.91.03-.25.4-.5 1.11-.76 4.34-1.88 7.23-3.12 8.67-3.72 4.13-1.73 4.99-2.03 5.55-2.04.12 0 .4.03.58.17.15.12.19.28.21.39.02.11.04.36.02.56z"/>
                  </svg>
                  <span className="hidden lg:inline">LINE相談</span>
                </a>
              </div>
              
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 shrink-0 mr-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 flex flex-col">
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
              <div className="flex-1 p-6">
                <div className="space-y-6">
                  <div className="space-y-4">

                  </div>
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
                  <div className="pt-6 border-t text-center text-sm text-gray-500">
                    <p>📞 070-9362-9828</p>
                <p>📧 contact@la-muse.org</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* メイン */}
        <main className="bg-gray-50 py-6 md:py-8 lg:py-12 px-4 md:px-8">
          <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
            {/* Desktop Layout: Two Column, Mobile: Single Column */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left Column: Product Image and Gallery */}
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
                {/* タイトル - Mobile Only */}
                <h1 className="lg:hidden text-2xl md:text-3xl font-extrabold text-red-600 mb-4 md:mb-6 leading-snug underline decoration-red-600 decoration-4">
                  {product.title}
                </h1>

                {/* パンくず (簡易) */}
                <div className="flex items-center text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
                  <span className="mr-1">▶</span>
                  <span>アイテム</span>
                </div>

                {/* 商品画像 */}
                <div className="w-full bg-white shadow mb-4 md:mb-6 border border-black rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="object-contain w-full h-auto"
                    priority
                  />
                </div>

                {/* 参考サムネイル */}
                <div className="flex gap-2 md:gap-3 overflow-x-auto mb-6">
                  <Image
                    src={product.image}
                    alt="thumb"
                    width={60}
                    height={60}
                    className="object-cover border border-black rounded-md flex-shrink-0"
                  />
                </div>
              </div>

              {/* Right Column: Product Details */}
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8 text-gray-800">
                {/* タイトル - Desktop Only */}
                <h1 className="hidden lg:block text-3xl xl:text-4xl font-extrabold text-red-600 mb-6 leading-snug underline decoration-red-600 decoration-4">
                  {product.title}
                </h1>

                {/* 価格 */}
                <section className="mb-6 md:mb-8">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3 border-b border-gray-300 pb-2">前面プリント済シャツ価格(税込)</h2>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-600">{product.price.toLocaleString()}円</p>
                </section>

                {/* 素材 */}
                <section className="mb-6 md:mb-8">
                  <h2 className="text-lg md:text-xl font-medium mb-3 md:mb-4 border-b border-gray-300 pb-2">素材</h2>
                  <ul className="text-sm md:text-base leading-relaxed list-disc pl-4 md:pl-6 space-y-1">
                    <li>生地厚: 4.4オンス</li>
                    <li>素材: 150g/㎡ ポリエステル100% メッシュ</li>
                  </ul>
                </section>

                {/* CTA */}
                <section className="mb-8">
                  <div className="bg-orange-100 text-center p-6 md:p-8 rounded-lg mb-6 md:mb-8">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-amber-600">自動見積もり(無料)</h3>
                    <p className="text-sm md:text-base font-normal mt-2 md:mt-3 text-gray-700">個人情報の登録なしで価格(概算)の確認が可能です。</p>
                    <Link href="#" className="inline-block mt-4 md:mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition">
                      自動見積フォームに進む
                    </Link>
                  </div>

                  <div className="text-center">
                    <a href="https://lin.ee/FtxOG2s" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Image
                        src="/クラT画像/LINEPOP1.png"
                        alt="LINE POP Illustration"
                        width={300}
                        height={150}
                        className="w-full max-w-xs md:max-w-sm mx-auto"
                      />
                    </a>
                    <p className="text-xs md:text-sm text-gray-500 mt-2">LINEでのご注文はできかねます</p>
                  </div>
                </section>
              </div>
            </div>

            {/* Price Calculator - Full Width */}
            <div className="mt-8 md:mt-12 bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
              <PriceCalculator />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}