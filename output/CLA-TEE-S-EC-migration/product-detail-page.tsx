"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowRight, Plus, Minus, ShoppingCart, Instagram } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(10);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedPrintMethod, setSelectedPrintMethod] = useState("silkscreen");
  const [activeTab, setActiveTab] = useState("details");
  const [selectedImage, setSelectedImage] = useState("");

  // ProductTabsと同期した商品データ
  const productCategories = {
    soccer: [
      { id: "3-3", name: "レッドサッカーユニフォーム", price: 1600, image: "/クラT画像/サッカー2.png", sizes: ["S", "M", "L", "XL"], colors: ["レッド", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "3-4", name: "ホワイトサッカーユニフォーム", price: 1600, image: "/クラT画像/サッカー3.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブルー"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "3-5", name: "ブルーサッカーユニフォーム", price: 1600, image: "/クラT画像/サッカー4.png", sizes: ["S", "M", "L", "XL"], colors: ["ブルー", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "3-6", name: "QUESTサッカーユニフォーム", price: 1600, image: "/クラT画像/サッカー5.png", sizes: ["S", "M", "L", "XL"], colors: ["ブルー", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "3-7", name: "Spot サッカーユニフォーム", price: 1600, image: "/クラT画像/サッカー7.png", sizes: ["S", "M", "L", "XL"], colors: ["ブラック", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
    ],
    basketball: [
      { id: "basketball-1", name: "バスケユニフォーム1", price: 1600, image: "/クラT画像/バスケ1.png", sizes: ["S", "M", "L", "XL"], colors: ["ブルー", "ホワイト"], description: "高品質なバスケットボールユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-4", name: "バスケユニフォーム4", price: 1600, image: "/クラT画像/バスケ4.png", sizes: ["S", "M", "L", "XL"], colors: ["レッド", "ホワイト"], description: "高品質なバスケットボールユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-5", name: "バスケユニフォーム5", price: 1600, image: "/クラT画像/バスケ5.png", sizes: ["S", "M", "L", "XL"], colors: ["グリーン", "ホワイト"], description: "高品質なバスケットボールユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-6", name: "バスケユニフォーム6", price: 1600, image: "/クラT画像/バスケ6.png", sizes: ["S", "M", "L", "XL"], colors: ["パープル", "ホワイト"], description: "高品質なバスケットボールユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-7", name: "バスケユニフォーム7", price: 1600, image: "/クラT画像/バスケ7.png", sizes: ["S", "M", "L", "XL"], colors: ["オレンジ", "ホワイト"], description: "高品質なバスケットボールユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
        { id: "basketball-8", name: "バスケユニフォーム8", price: 1600, image: "/クラT画像/バスケ8.png", sizes: ["S", "M", "L", "XL"], colors: ["ブルー", "ホワイト"], description: "高品質なバスケットボールユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
 
      ],
    baseball: [
      { id: "baseball-1", name: "野球ユニフォーム", price: 1600, image: "/クラT画像/野球.png", sizes: ["S", "M", "L", "XL"], colors: ["ブルー", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },

      { id: "baseball-4", name: "野球ユニフォーム3", price: 1600, image: "/クラT画像/野球3.png", sizes: ["S", "M", "L", "XL"], colors: ["グリーン", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-5", name: "野球ユニフォーム4", price: 1600, image: "/クラT画像/野球4.png", sizes: ["S", "M", "L", "XL"], colors: ["レッド", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-6", name: "野球ユニフォーム5", price: 1600, image: "/クラT画像/野球5.png", sizes: ["S", "M", "L", "XL"], colors: ["パープル", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-7", name: "野球ユニフォーム7", price: 1600, image: "/クラT画像/野球7.png", sizes: ["S", "M", "L", "XL"], colors: ["ブラック", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-8", name: "野球ユニフォーム8", price: 1600, image: "/クラT画像/野球8.png", sizes: ["S", "M", "L", "XL"], colors: ["ブルー", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
    ],
    volleyball: [
      { id: "volleyball-1", name: "バレーボールユニフォーム", price: 1600, image: "/クラT画像/バレー.png", sizes: ["S", "M", "L", "XL"], colors: ["ブルー", "ホワイト"], description: "高品質なバレーボールユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "volleyball-2", name: "バレーボールユニフォーム2", price: 1600, image: "/クラT画像/バレ-2.png", sizes: ["S", "M", "L", "XL"], colors: ["レッド", "ホワイト"], description: "高品質なバレーボールユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
    ],
    classt: [
      { id: "5", name: "ポリエステルT", price: 1500, image: "/クラT画像/ポリエステルT.png", sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], colors: ["ホワイト", "ブラック", "ネイビー", "レッド", "ブルー"], description: "吸汗速乾性に優れたポリエステルTシャツ", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "6", name: "コットンT", price: 1500, image: "/クラT画像/コットンT.png", sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], colors: ["ホワイト", "ブラック", "ネイビー", "レッド", "ブルー"], description: "肌触りの良いコットンTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "8", name: "ポロシャツ", price: 2200, image: "/クラT画像/ポロシャツ.png", sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], colors: ["ホワイト", "ブラック", "ネイビー", "レッド", "ブルー"], description: "上品なポロシャツ", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "10", name: "ヘビーウェイトTシャツ", price: 1500, image: "/クラT画像/ヘビーウェイトT.png", sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], colors: ["ホワイト", "ブラック", "ネイビー", "レッド", "ブルー"], description: "厚手で丈夫なヘビーウェイトTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-1", name: "Tシャツ1", price: 1500, image: "/クラT画像/Tシャツ1.png", sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], colors: ["ブラック", "ホワイト", "グレー"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
    { id: "classt-2", name: "Tシャツ2", price: 1500, image: "/クラT画像/Tシャツ2.png", sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], colors: ["ブラック", "ホワイト", "グレー"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
    { id: "classt-3", name: "Tシャツ3", price: 1500, image: "/クラT画像/Tシャツ3.png", sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], colors: ["ブラック", "ホワイト", "グレー"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
    { id: "classt-4", name: "Tシャツ4", price: 1500, image: "/クラT画像/Tシャツ4.png", sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], colors: ["ブラック", "ホワイト", "グレー"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
    { id: "classt-5", name: "Tシャツ5", price: 1500, image: "/クラT画像/Tシャツ5.png", sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"], colors: ["ブラック", "ホワイト", "グレー"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false }
    ]
  };

  // 全商品を統合
  const allProducts = [...productCategories.soccer, ...productCategories.basketball, ...productCategories.baseball, ...productCategories.volleyball, ...productCategories.classt];
  
  // 現在の商品を取得
  const product = allProducts.find(p => p.id === productId) || {
    id: productId,
    name: "商品が見つかりません",
    price: 0,
    image: "/placeholder.png",
    sizes: ["S", "M", "L", "XL"],
    colors: ["ホワイト", "ブラック"],
    description: "商品が見つかりません",
    material: "不明"
  };

  // 商品画像配列（商品に対応する複数の画像）
  const getProductImages = (productId: string): string[] => {
    const imageMap: { [key: string]: string[] } = {
      "3-3": ["/クラT画像/サッカー2.png"],
      "3-4": ["/クラT画像/サッカー3.png"],
      "3-5": ["/クラT画像/サッカー4.png"],
      "3-6": ["/クラT画像/サッカー5.png"],
      "3-7": ["/クラT画像/サッカー7.png"],
      "basketball-1": ["/クラT画像/バスケ1.png"],
      "basketball-4": ["/クラT画像/バスケ4.png"],
      "basketball-5": ["/クラT画像/バスケ5.png"],
      "basketball-6": ["/クラT画像/バスケ6.png"],
      "basketball-7": ["/クラT画像/バスケ7.png"],
        "basketball-8": ["/クラT画像/バスケ8.png"],
 
        "baseball-1": ["/クラT画像/野球.png"],

      "baseball-4": ["/クラT画像/野球3.png"],
      "baseball-5": ["/クラT画像/野球4.png"],
      "baseball-6": ["/クラT画像/野球5.png"],
      "baseball-7": ["/クラT画像/野球7.png"],
      "baseball-8": ["/クラT画像/野球8.png"],
      "volleyball-1": ["/クラT画像/バレー.png"],
      "volleyball-2": ["/クラT画像/バレ-2.png"],
      "5": ["/クラT画像/ポリエステルT.png"],
      "6": ["/クラT画像/コットンT.png"],
      "8": ["/クラT画像/ポロシャツ.png"],
      "10": ["/クラT画像/ヘビーウェイトT.png"],
      "classt-1": ["/クラT画像/Tシャツ1.png"],
    "classt-2": ["/クラT画像/Tシャツ2.png"],
    "classt-3": ["/クラT画像/Tシャツ3.png"],
    "classt-4": ["/クラT画像/Tシャツ4.png"],
    "classt-5": ["/クラT画像/Tシャツ5.png"]
    };
    return imageMap[productId] || [product.image];
  };
  
  const productImages = getProductImages(productId);

  // 初期画像設定
  useEffect(() => {
    if (productImages.length > 0) {
      setSelectedImage(productImages[0]);
    }
  }, [productImages]);

  // サイズ表データ
  const sizeChart = [
    { size: "XS", chest: "44", length: "59", shoulder: "38" },
    { size: "S", chest: "48", length: "62", shoulder: "42" },
    { size: "M", chest: "52", length: "65", shoulder: "46" },
    { size: "L", chest: "56", length: "68", shoulder: "50" },
    { size: "XL", chest: "60", length: "71", shoulder: "54" },
    { size: "XXL", chest: "64", length: "74", shoulder: "58" },
    { size: "3XL", chest: "68", length: "77", shoulder: "62" },
    { size: "4XL", chest: "72", length: "80", shoulder: "66" },
    { size: "5XL", chest: "76", length: "83", shoulder: "70" }
  ];

  // 加工賃表データ
  const printPricing = [
    {
      method: "silkscreen",
      name: "シルクスクリーン",
      description: "大量生産に最適",
      pricing: [
        { quantity: "1-9枚", price: "¥800" },
        { quantity: "10-29枚", price: "¥600" },
        { quantity: "30-49枚", price: "¥500" },
        { quantity: "50-99枚", price: "¥400" },
        { quantity: "100枚以上", price: "¥350" }
      ]
    },
    {
      method: "dtf",
      name: "DTFプリント",
      description: "フルカラー対応",
      pricing: [
        { quantity: "1-9枚", price: "¥1,200" },
        { quantity: "10-29枚", price: "¥1,000" },
        { quantity: "30-49枚", price: "¥900" },
        { quantity: "50-99枚", price: "¥800" },
        { quantity: "100枚以上", price: "¥700" }
      ]
    },
    {
      method: "embroidery",
      name: "刺繍",
      description: "高級感のある仕上がり",
      pricing: [
        { quantity: "1-9枚", price: "¥1,500" },
        { quantity: "10-29枚", price: "¥1,200" },
        { quantity: "30-49枚", price: "¥1,000" },
        { quantity: "50-99枚", price: "¥900" },
        { quantity: "100枚以上", price: "¥800" }
      ]
    }
  ];

  // 自動見積もり計算
  const calculateEstimate = () => {
    const basePrice = product.price;
    const selectedPricing = printPricing.find(p => p.method === selectedPrintMethod);
    if (!selectedPricing) return 0;

    let printPrice = 0;
    for (const tier of selectedPricing.pricing) {
      const [min, max] = tier.quantity.includes("以上") 
        ? [parseInt(tier.quantity), Infinity]
        : tier.quantity.split("-").map(n => parseInt(n.replace("枚", "")));
      
      if (quantity >= min && (max === Infinity || quantity <= max)) {
        printPrice = parseInt(tier.price.replace("¥", "").replace(",", ""));
        break;
      }
    }

    return (basePrice + printPrice) * quantity;
  };

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
                    className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-green-600 transition flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                    </svg>
                    LINEで相談
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
              </div>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main className="pb-20">
          {/* Breadcrumb */}
          <div className="px-4 py-3 bg-gray-50 text-sm">
            <Link href="/" className="text-gray-500 hover:text-sparkle-pink">ホーム</Link>
            <span className="mx-2 text-gray-400">›</span>
            <Link href="/products" className="text-gray-500 hover:text-sparkle-pink">商品一覧</Link>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-700">{product.name}</span>
          </div>

          {/* Product Images Gallery */}
          <div className="px-4 py-6">
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-2 overflow-x-auto">
                {productImages.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`flex-shrink-0 w-20 h-20 relative bg-gray-100 rounded-lg overflow-hidden border-2 ${
                      selectedImage === image ? 'border-sparkle-pink' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="px-4 pb-6">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-3xl font-bold text-sparkle-pink mb-4">¥{product.price.toLocaleString()}〜</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="text-sm text-gray-500">
              <p>素材: {product.material}</p>
              <p>カラー: {product.colors.length}色展開</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-4">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("details")}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
                  activeTab === "details"
                    ? "border-sparkle-pink text-sparkle-pink"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                商品詳細
              </button>
              <button
                onClick={() => setActiveTab("size")}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
                  activeTab === "size"
                    ? "border-sparkle-pink text-sparkle-pink"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                サイズ表
              </button>
              <button
                onClick={() => setActiveTab("pricing")}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
                  activeTab === "pricing"
                    ? "border-sparkle-pink text-sparkle-pink"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                加工賃表
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="px-4 py-6">
            {activeTab === "details" && (
              <div className="space-y-6">
                {/* 数量選択 */}
                <div>
                  <label className="block text-sm font-medium mb-2">数量</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-lg font-medium w-16 text-center">{quantity}枚</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* サイズ選択 */}
                <div>
                  <label className="block text-sm font-medium mb-2">サイズ</label>
                  <div className="grid grid-cols-3 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-3 text-sm font-medium rounded-lg border transition ${
                          selectedSize === size
                            ? "border-sparkle-pink bg-sparkle-pink text-white"
                            : "border-gray-300 text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 加工方法選択 */}
                <div>
                  <label className="block text-sm font-medium mb-2">加工方法</label>
                  <div className="space-y-2">
                    {printPricing.map((method) => (
                      <label key={method.method} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="printMethod"
                          value={method.method}
                          checked={selectedPrintMethod === method.method}
                          onChange={(e) => setSelectedPrintMethod(e.target.value)}
                          className="text-sparkle-pink"
                        />
                        <div>
                          <div className="font-medium">{method.name}</div>
                          <div className="text-sm text-gray-500">{method.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 見積もり結果 */}
                <div className="bg-sparkle-pink bg-opacity-10 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">合計金額</span>
                    <span className="text-2xl font-bold text-sparkle-pink">
                      ¥{calculateEstimate().toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    商品代: ¥{(product.price * quantity).toLocaleString()} + 加工代
                  </div>
                </div>

                {/* 自動見積もりボタン */}
                <Link
                  href="/estimate"
                  className="block w-full bg-sparkle-pink text-white py-4 px-6 rounded-full font-bold text-center hover:bg-sparkle-pink-dark transition"
                >
                  <ShoppingCart className="inline-block mr-2" size={20} />
                  この条件で見積もり依頼
                </Link>
              </div>
            )}

            {activeTab === "size" && (
              <div>
                <h3 className="text-lg font-bold mb-4">サイズ表（cm）</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-3 text-left font-medium">サイズ</th>
                        <th className="p-3 text-left font-medium">胸囲</th>
                        <th className="p-3 text-left font-medium">着丈</th>
                        <th className="p-3 text-left font-medium">肩幅</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChart.map((size) => (
                        <tr key={size.size} className="border-b">
                          <td className="p-3 font-medium">{size.size}</td>
                          <td className="p-3">{size.chest}</td>
                          <td className="p-3">{size.length}</td>
                          <td className="p-3">{size.shoulder}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  ※サイズは目安です。商品により多少の誤差がある場合があります。
                </div>
              </div>
            )}

            {activeTab === "pricing" && (
              <div>
                <h3 className="text-lg font-bold mb-4">加工賃表</h3>
                <div className="space-y-6">
                  {printPricing.map((method) => (
                    <div key={method.method} className="border rounded-lg p-4">
                      <h4 className="font-bold text-lg mb-2">{method.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="p-2 text-left font-medium">数量</th>
                              <th className="p-2 text-left font-medium">単価</th>
                            </tr>
                          </thead>
                          <tbody>
                            {method.pricing.map((tier, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-2">{tier.quantity}</td>
                                <td className="p-2 font-medium text-sparkle-pink">{tier.price}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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