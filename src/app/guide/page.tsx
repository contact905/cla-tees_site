"use client";

import Link from "next/link";
import { ChevronRight, MessageCircle, Palette, Package, Truck, CreditCard, CheckCircle } from "lucide-react";

export default function GuidePage() {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "LINEで友だち追加",
      description: "公式LINEアカウントを友だち追加するだけでスタート。面倒な会員登録は不要です。",
      detail: "QRコードを読み取るか、LINE IDで検索してください。",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "商品を選択",
      description: "豊富なラインナップから、用途に合った商品をお選びください。",
      detail: "Tシャツ、ポロシャツ、パーカーなど多数ご用意。",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "デザインを決定",
      description: "テンプレートから選ぶか、オリジナルデザインをアップロード。",
      detail: "デザイン制作のサポートも無料で承ります。",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "見積もり確認",
      description: "LINEで即座に見積もりをお送りします。学割適用も自動計算。",
      detail: "納得いただけたら、そのまま注文確定へ。",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "商品お届け",
      description: "最短翌日発送。全国どこでも配送可能です。",
      detail: "配送状況もLINEでリアルタイムにお知らせ。",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "アフターサポート",
      description: "商品到着後も、LINEで気軽にご相談いただけます。",
      detail: "追加注文も簡単。履歴から再注文可能。",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-sparkle-pink text-white py-8 sm:py-16">
        <div className="px-4 max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs sm:text-sm mb-4">
            <Link href="/" className="hover:underline">ホーム</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>ご利用ガイド</span>
          </nav>
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">ご利用ガイド</h1>
          <p className="text-base sm:text-xl">LINEで完結！簡単6ステップで注文完了</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 max-w-7xl mx-auto py-8 sm:py-16">
        {/* LINE CTA */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl sm:rounded-3xl p-4 sm:p-8 mb-8 sm:mb-16 text-white">
          <div className="text-center">
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
              まずはLINEで友だち追加！
            </h2>
            <p className="text-sm sm:text-xl mb-6 sm:mb-8">
              面倒な会員登録不要。LINEだけで注文が完結します。
            </p>
            <Link
              href="https://lin.ee/FtxOG2s"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-gray-100 transition"
            >
              <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6" />
              今すぐLINEで友だち追加
            </Link>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-3xl font-bold text-center mb-6 sm:mb-12">
            注文の流れ
          </h2>
          <div className="space-y-4 sm:space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition">
                <div className="flex items-start gap-3 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-sparkle-turquoise text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                      <div className="scale-75 sm:scale-100">{step.icon}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <span className="bg-sparkle-pink text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold w-fit">
                        STEP {index + 1}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-sm sm:text-lg mb-2">{step.description}</p>
                    <p className="text-xs sm:text-base text-gray-600">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-3xl font-bold text-center mb-6 sm:mb-12">
            LINE注文のメリット
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="bg-sparkle-pink/10 w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-4xl">📱</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">スマホだけで完結</h3>
              <p className="text-sm sm:text-base text-gray-600">
                PCやメールアドレス不要。いつものLINEアプリだけで注文できます。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sparkle-turquoise/10 w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-4xl">💬</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">リアルタイム相談</h3>
              <p className="text-sm sm:text-base text-gray-600">
                デザインや数量の相談も、チャット感覚で気軽にできます。
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sparkle-yellow/10 w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-4xl">📋</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">注文履歴管理</h3>
              <p className="text-sm sm:text-base text-gray-600">
                過去の注文履歴もLINEで確認。追加注文も簡単です。
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-8">
          <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">よくあるご質問</h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-sm sm:text-base font-bold mb-1">Q. LINEでの注文に料金はかかりますか？</h3>
              <p className="text-xs sm:text-base text-gray-600">A. いいえ、LINE利用料は完全無料です。商品代金のみお支払いください。</p>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold mb-1">Q. 支払い方法は何が使えますか？</h3>
              <p className="text-xs sm:text-base text-gray-600">A. 銀行振込、クレジットカード、後払いからお選びいただけます。</p>
            </div>
          </div>
          <Link href="/faq" className="inline-flex items-center gap-2 text-sparkle-pink font-bold mt-3 sm:mt-4 hover:underline text-sm sm:text-base">
            もっと見る
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
