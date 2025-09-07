"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu, X, Phone, Mail, Upload, FileText, Calculator } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

export default function EstimatePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    productType: "",
    quantity: "",
    printMethod: "",
    colors: "",
    description: "",
    contactName: "",
    email: "",
    phone: ""
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          files: selectedFiles.map(file => file.name)
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        // フォームをリセット
        setFormData({
          productType: "",
          quantity: "",
          printMethod: "",
          colors: "",
          description: "",
          contactName: "",
          email: "",
          phone: ""
        });
        setSelectedFiles([]);
      } else {
        alert(result.error || 'エラーが発生しました。');
      }
    } catch (error) {
      console.error('送信エラー:', error);
      alert('送信に失敗しました。ネットワーク接続を確認してください。');
    }
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
              <div className="flex-1 p-4 space-y-6">
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

        {/* Main Content */}
        <main className="pb-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-sparkle-pink to-sparkle-pink-light text-white py-12">
            <div className="px-4 text-center">
              <h1 className="text-3xl font-bold mb-4">データ入稿・お見積もり</h1>
              <p className="text-lg opacity-90">デザインデータをお送りいただき、<br />正確なお見積もりをご提供いたします</p>
            </div>
          </section>

          {/* Breadcrumb */}
          <div className="px-4 py-4 bg-gray-50">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-sparkle-pink transition">ホーム</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-sparkle-pink font-bold">データ入稿・お見積もり</span>
            </div>
          </div>

          {/* Form Section */}
          <section className="py-8">
            <div className="px-4">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* File Upload Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Upload className="w-6 h-6 text-sparkle-pink" />
                    デザインデータのアップロード
                  </h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-sparkle-pink transition">
                    <input
                      type="file"
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-bold text-gray-700 mb-2">ファイルを選択またはドラッグ&ドロップ</p>
                      <p className="text-sm text-gray-500">対応形式: JPG, PNG, PDF, AI, PSD</p>
                    </label>
                  </div>
                  {selectedFiles.length > 0 && (
                    <div className="mt-4">
                      <h3 className="font-bold mb-2">選択されたファイル:</h3>
                      <ul className="space-y-1">
                        {selectedFiles.map((file, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Product Information */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calculator className="w-6 h-6 text-sparkle-pink" />
                    商品・加工情報
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">商品タイプ *</label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent"
                        required
                      >
                        <option value="">選択してください</option>
                        <option value="tshirt">Tシャツ</option>
                        <option value="polo">ポロシャツ</option>
                        <option value="hoodie">パーカー</option>
                        <option value="other">その他</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">数量 *</label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent"
                        placeholder="例: 30"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">希望加工方法</label>
                      <select
                        name="printMethod"
                        value={formData.printMethod}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent"
                      >
                        <option value="">選択してください</option>
                        <option value="silkscreen">シルクスクリーン</option>
                        <option value="dtf">DTFプリント</option>
                        <option value="embroidery">刺繍</option>
                        <option value="consultation">相談したい</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">使用色数</label>
                      <input
                        type="text"
                        name="colors"
                        value={formData.colors}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent"
                        placeholder="例: 3色、フルカラー"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">詳細・ご要望</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent"
                        placeholder="デザインの詳細、希望納期、その他ご要望をお書きください"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-4">お客様情報</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">お名前 *</label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent"
                        placeholder="山田太郎"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">メールアドレス *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent"
                        placeholder="example@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-2">電話番号</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent"
                        placeholder="090-1234-5678"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center space-y-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-sparkle-pink to-sparkle-pink-light text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all"
                  >
                    メールでお見積もりを依頼する
                  </button>
                  <Link
                     href="https://line.me/R/ti/p/@895gydcc"
                     className="w-full bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                   >
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                     </svg>
                     LINEでお見積もり依頼をする
                   </Link>
                  <p className="text-sm text-gray-600 mt-4">
                    ※ 通常1-2営業日以内にご連絡いたします
                  </p>
                </div>
              </form>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="px-4">
            <div className="grid grid-cols-1 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ご注文について</h3>
                <ul className="space-y-2">
                  <Link href="#" className="block hover:text-sparkle-pink transition">注文用紙</Link>
                  <Link href="/shipping" className="block hover:text-sparkle-pink transition">配送事項</Link>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">プリントについて</h3>
                <ul className="space-y-2">
                  <Link href="#" className="block hover:text-sparkle-pink transition">商品</Link>
                  <Link href="#" className="block hover:text-sparkle-pink transition">デザインサンプル</Link>
                  <Link href="#" className="block hover:text-sparkle-pink transition">全般の詳細</Link>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">加工方法について</h3>
                <ul className="space-y-2">
                  <Link href="/estimate" className="block hover:text-sparkle-pink transition">お見積もり診断</Link>
                  <Link href="#" className="block hover:text-sparkle-pink transition">加工方法</Link>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">スパークルについて</h3>
                <ul className="space-y-2">
                  <Link href="/company" className="block hover:text-sparkle-pink transition">会社概要</Link>
                  <Link href="/legal" className="block hover:text-sparkle-pink transition">特定商取引に基づく表記</Link>
                  <Link href="#" className="block hover:text-sparkle-pink transition">採用情報</Link>
                  <Link href="/privacy" className="block hover:text-sparkle-pink transition">プライバシーポリシー</Link>
                  <Link href="#" className="block hover:text-sparkle-pink transition">ブログ / コラム</Link>
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