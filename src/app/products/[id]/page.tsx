"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Menu, X } from "lucide-react";

interface PageProps {
  params: { id: string };
}

// 簡易データ。実際は API や DB から取得する想定
const products: Record<string, { title: string; image: string; price: number }> = {
  "1": {
    title: "前面プリント済ドライTシャツ (タイプ02) (BD-02)",
    image: "/クラT画像/1.png",
    price: 1000,
  },
};

export default function ProductDetailPage({ params }: PageProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const product = products[params.id] ?? {
    title: `商品 ${params.id}`,
    image: "/api/placeholder/400/400",
    price: 0,
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile-First Container */}
      <div className="max-w-[430px] mx-auto bg-white shadow-xl min-h-screen relative">
        {/* Header - Mobile First */}
        <header className="sticky top-0 z-50 bg-white">
          {/* Top Bar */}
          <div className="bg-sparkle-pink text-white py-2">
            <div className="px-4 text-center">
              <span className="text-sm font-bold">🎉 LINEで簡単注文 | 学生の味方！</span>
            </div>
          </div>
          {/* Navigation */}
          <nav className="bg-white">
            <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="SPARKLE" width={120} height={48} className="h-10 w-auto" />
              </Link>
              <Link
                href="https://lin.ee/FtxOG2s"
                className="ml-2 bg-green-500 text-white px-3 py-2 rounded-full font-bold text-sm hover:bg-green-600 transition flex items-center gap-1.5 shrink-0"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z" />
                </svg>
                LINEで相談
              </Link>
            </div>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 shrink-0 mr-2"
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
                    <Link
                      href="https://line.me/R/ti/p/@895gydcc"
                      className="block w-full bg-green-500 text-white text-center py-4 rounded-full font-bold text-lg hover:bg-green-600 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🎯 LINEで相談・見積もり
                    </Link>
                    <button
                      className="block w-full bg-yellow-300 text-gray-800 text-center py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      💰 料金シミュレーター
                    </button>
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
        <main className="bg-gray-50 py-6 px-6">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow px-4 py-6 text-gray-800">
            {/* タイトル */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-red-600 mb-4 leading-snug underline decoration-red-600 decoration-4">
              {product.title}
            </h1>

            {/* パンくず (簡易) */}
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <span className="mr-1">▶</span>
              <span>アイテム</span>
            </div>

            {/* 商品画像 */}
            <div className="w-full bg-white shadow mb-4 border border-black">
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
            <div className="flex gap-2 overflow-x-auto mb-6">
              <Image
                src={product.image}
                alt="thumb"
                width={60}
                height={60}
                className="object-cover border border-black"
              />
            </div>

            {/* 素材 */}
            <section className="mb-6">
              <h2 className="text-base sm:text-lg font-medium mb-2 border-b border-gray-300 pb-1">素材</h2>
              <ul className="text-sm leading-relaxed list-disc pl-4">
                <li>生地厚: 4.4オンス</li>
                <li>素材: 150g/㎡ ポリエステル100% メッシュ</li>
              </ul>
            </section>

            {/* 価格 */}
            <section className="mb-6">
              <h2 className="text-base sm:text-lg font-medium mb-1 border-b border-gray-300 pb-1">前面プリント済シャツ価格(税込)</h2>
              <p className="text-3xl font-extrabold text-red-600">{product.price.toLocaleString()}円</p>
            </section>

            {/* CTA */}
            <section className="mb-8">
              <div className="bg-orange-100 text-center p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-amber-600">自動見積もり(無料)</h3>
                <p className="text-xs font-normal mt-2 text-gray-700">個人情報の登録なしで価格(概算)の確認が可能です。</p>
                <Link href="#" className="inline-block mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition">
                  自動見積フォームに進む
                </Link>
              </div>

              <a href="https://lin.ee/FtxOG2s" target="_blank" rel="noopener noreferrer" className="block w-fit ml-auto mt-4">
                <Image
                  src="/クラT画像/LINEPOP1.png"
                  alt="LINE POP Illustration"
                  width={300}
                  height={150}
                  className="ml-0"
                />
              </a>
              <p className="text-xs text-gray-500 text-center mt-1">LIINでのご注文はできかねます</p>
               <div className="mt-8">
                 <PriceCalculator />
               </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}