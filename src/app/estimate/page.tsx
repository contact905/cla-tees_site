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
          <div className="bg-sparkle-pink text-white py-3">
            <div className="px-4 text-center">
              <span className="text-base md:text-lg font-bold">🎉 LINEで簡単注文 | 学生の味方！</span>
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
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-base md:text-lg hover:bg-green-600 transition flex items-center gap-2 whitespace-nowrap shrink-0 min-h-[48px]"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.84 5.42-1.19 7.18-.15.76-.45 1.02-.75 1.04-.64.04-1.13-.42-1.75-.83-.97-.64-1.52-1.03-2.47-1.66-1.09-.71-.38-1.1.24-1.74.16-.16 2.92-2.68 2.98-2.91.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-2.03 1.29-5.73 3.78-.54.37-1.03.56-1.47.55-.48-.01-1.41-.27-2.1-.5-.85-.28-1.52-.43-1.46-.91.03-.25.46-.51 1.28-.78 5.01-2.18 8.35-3.63 10.02-4.35 1.43-.61 1.72-.72 1.91-.72.04 0 .14 0 .2.07.05.05.06.14.06.18-.01.06-.01.24-.02.38z"/>
                    </svg>
                    LINEで相談
                  </Link>

                  {/* Menu Toggle */}
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-3 rounded-lg hover:bg-gray-100 shrink-0 min-h-[48px] min-w-[48px] flex items-center justify-center"
                  >
                    {isMenuOpen ? <X className="w-7 h-7 md:w-8 md:h-8" /> : <Menu className="w-7 h-7 md:w-8 md:h-8" />}
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
                  <X className="w-7 h-7 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 p-4 space-y-6">
                <Link href="/" className="block text-xl md:text-2xl font-bold py-4 border-b hover:text-sparkle-pink transition min-h-[48px] flex items-center">
                  ホーム
                </Link>
                <Link href="/products" className="block text-xl md:text-2xl font-bold py-4 border-b hover:text-sparkle-pink transition min-h-[48px] flex items-center">
                  データ入稿・お見積もり
                </Link>
                <Link href="/products" className="block text-xl md:text-2xl font-bold py-4 border-b hover:text-sparkle-pink transition min-h-[48px] flex items-center">
                  商品一覧
                </Link>
                <Link href="#" className="block text-xl md:text-2xl font-bold py-4 border-b hover:text-sparkle-pink transition min-h-[48px] flex items-center">
                  デザインサンプル
                </Link>
                <Link href="#" className="block text-xl md:text-2xl font-bold py-4 border-b hover:text-sparkle-pink transition min-h-[48px] flex items-center">
                  ご注文方法
                </Link>
              </div>

              {/* Contact Info in Menu */}
              <div className="p-6 bg-gray-50 border-t">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-sparkle-pink" />
                    <span className="font-bold text-lg md:text-xl">070-9362-9828</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-sparkle-pink" />
                    <span className="text-lg md:text-xl">contact@la-muse.org</span>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">データ入稿・お見積もり</h1>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-90">デザインデータをお送りいただき、<br />正確なお見積もりをご提供いたします</p>
            </div>
          </section>

          {/* Breadcrumb */}
          <div className="px-4 py-4 bg-gray-50">
            <div className="flex items-center gap-2 text-base md:text-lg text-gray-600">
              <Link href="/" className="hover:text-sparkle-pink transition py-2 min-h-[48px] flex items-center">ホーム</Link>
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sparkle-pink font-bold">データ入稿・お見積もり</span>
            </div>
          </div>

          {/* Form Section */}
          <section className="py-8">
            <div className="px-4">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* File Upload Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Upload className="w-8 h-8 md:w-10 md:h-10 text-sparkle-pink" />
                    デザインデータのアップロード
                  </h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-sparkle-pink transition min-h-[120px] flex flex-col justify-center">
                    <input
                      type="file"
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <FileText className="w-16 h-16 md:w-20 md:h-20 text-gray-400 mx-auto mb-6" />
                      <p className="text-xl md:text-2xl font-bold text-gray-700 mb-3">ファイルを選択またはドラッグ&ドロップ</p>
                      <p className="text-base md:text-lg text-gray-500">対応形式: JPG, PNG, PDF, AI, PSD</p>
                    </label>
                  </div>
                  {selectedFiles.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-bold mb-3 text-lg md:text-xl">選択されたファイル:</h3>
                      <ul className="space-y-2">
                        {selectedFiles.map((file, index) => (
                          <li key={index} className="text-base md:text-lg text-gray-600 flex items-center gap-3 py-2">
                            <FileText className="w-5 h-5 md:w-6 md:h-6" />
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Product Information */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Calculator className="w-8 h-8 md:w-10 md:h-10 text-sparkle-pink" />
                    商品・加工情報
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-base md:text-lg font-bold mb-3">商品タイプ *</label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleInputChange}
                        className="w-full p-4 md:p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent text-base md:text-lg min-h-[56px]"
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
                      <label className="block text-base md:text-lg font-bold mb-3">数量 *</label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full p-4 md:p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent text-base md:text-lg min-h-[56px]"
                        placeholder="例: 30"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-base md:text-lg font-bold mb-3">希望加工方法</label>
                      <select
                        name="printMethod"
                        value={formData.printMethod}
                        onChange={handleInputChange}
                        className="w-full p-4 md:p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent text-base md:text-lg min-h-[56px]"
                      >
                        <option value="">選択してください</option>
                        <option value="silkscreen">シルクスクリーン</option>
                        <option value="dtf">DTFプリント</option>
                        <option value="embroidery">刺繍</option>
                        <option value="consultation">相談したい</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-base md:text-lg font-bold mb-3">使用色数</label>
                      <input
                        type="text"
                        name="colors"
                        value={formData.colors}
                        onChange={handleInputChange}
                        className="w-full p-4 md:p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent text-base md:text-lg min-h-[56px]"
                        placeholder="例: 3色、フルカラー"
                      />
                    </div>

                    <div>
                      <label className="block text-base md:text-lg font-bold mb-3">詳細・ご要望</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full p-4 md:p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent text-base md:text-lg min-h-[120px]"
                        placeholder="デザインの詳細、希望納期、その他ご要望をお書きください"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">お客様情報</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-base md:text-lg font-bold mb-3">お名前 *</label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full p-4 md:p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent text-base md:text-lg min-h-[56px]"
                        placeholder="山田太郎"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-base md:text-lg font-bold mb-3">メールアドレス *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 md:p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent text-base md:text-lg min-h-[56px]"
                        placeholder="example@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-base md:text-lg font-bold mb-3">電話番号</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-4 md:p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sparkle-pink focus:border-transparent text-base md:text-lg min-h-[56px]"
                        placeholder="090-1234-5678"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <button
                    type="submit"
                    className="flex-1 bg-sparkle-pink text-white px-8 py-5 md:py-6 rounded-lg font-bold hover:bg-pink-600 transition-colors flex items-center justify-center gap-3 text-lg md:text-xl min-h-[56px]"
                  >
                    <Mail className="w-6 h-6 md:w-7 md:h-7" />
                    メールでお見積もりを依頼する
                  </button>
                  
                  <Link
                    href="https://line.me/R/ti/p/@895gydcc"
                    className="flex-1 bg-green-500 text-white px-8 py-5 md:py-6 rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-3 text-lg md:text-xl min-h-[56px]"
                  >
                    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12.017.572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                    LINEでお見積もり依頼をする
                  </Link>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  ※ 通常1-2営業日以内にご連絡いたします
                </p>
              </form>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">ご注文について</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">ご注文の流れ</Link></li>
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">お支払い方法</Link></li>
                  <li><Link href="/shipping" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">配送について</Link></li>
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">返品・交換</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">プリントについて</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">プリント方法</Link></li>
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">データ入稿について</Link></li>
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">色について</Link></li>
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">サイズについて</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">加工方法について</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">シルクスクリーン</Link></li>
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">DTFプリント</Link></li>
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">刺繍</Link></li>
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">その他の加工</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">CLA TEE'Sについて</h3>
                <ul className="space-y-3">
                  <li><Link href="/company" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">会社概要</Link></li>
                  <li><Link href="#" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">お問い合わせ</Link></li>
                  <li><Link href="/privacy" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">プライバシーポリシー</Link></li>
                  <li><Link href="/legal" className="text-base md:text-lg hover:text-sparkle-pink transition-colors py-2 min-h-[48px] flex items-center">利用規約</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-base md:text-lg">&copy; 2024 CLA TEE'S. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}