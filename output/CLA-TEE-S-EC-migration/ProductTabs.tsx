"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  sizes?: string;
  isNew?: boolean;
  isSale?: boolean;
  isTemplate?: boolean;
  colors?: number;
}

const productCategories: Record<string, { label: string; products: Product[] }> = {
  soccer: {
    label: "⚽ サッカーユニ",
    products: [
      {
        id: "3-3",
        name: "レッドサッカーユニフォーム",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー2.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "3-4",
        name: "ホワイトサッカーユニフォーム",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー3.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "3-5",
        name: "ブルーサッカーユニフォーム",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー4.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "3-6",
        name: "QUESTサッカーユニフォーム",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー5.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "3-7",
        name: "Spot サッカーユニフォーム",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー7.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
    ],
  },
  basketball: {
    label: "🏀 バスケユニ",
    products: [
      {
        id: "basketball-1",
        name: "バスケユニフォーム1",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ1.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "basketball-4",
        name: "バスケユニフォーム4",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ4.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "basketball-5",
        name: "バスケユニフォーム5",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ5.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "basketball-6",
        name: "バスケユニフォーム6",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ6.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "basketball-7",
        name: "バスケユニフォーム7",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ7.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "basketball-8",
        name: "バスケユニフォーム8",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ8.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
        isTemplate: false,
      },
    ],
  },
  baseball: {
    label: "⚾ 野球ユニ",
    products: [
      {
        id: "baseball-1",
        name: "野球ユニフォーム",
        price: "¥1,600〜",
        image: "/クラT画像/野球.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },

      {
        id: "baseball-4",
        name: "野球ユニフォーム3",
        price: "¥1,600〜",
        image: "/クラT画像/野球3.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "baseball-5",
        name: "野球ユニフォーム4",
        price: "¥1,600〜",
        image: "/クラT画像/野球4.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "baseball-6",
        name: "野球ユニフォーム5",
        price: "¥1,600〜",
        image: "/クラT画像/野球5.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "baseball-7",
        name: "野球ユニフォーム7",
        price: "¥1,600〜",
        image: "/クラT画像/野球7.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "baseball-8",
        name: "野球ユニフォーム8",
        price: "¥1,600〜",
        image: "/クラT画像/野球8.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
    ],
  },
  volleyball: {
    label: "🏐 バレーユニ",
    products: [
      {
        id: "volleyball-1",
        name: "バレーボールユニフォーム",
        price: "¥1,600〜",
        image: "/クラT画像/バレー.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "volleyball-2",
        name: "バレーボールユニフォーム2",
        price: "¥1,600〜",
        image: "/クラT画像/バレ-2.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
    ],
  },
  classt: {
    label: "👕 クラスT",
    products: [
      {
        id: "5",
        name: "ポリエステルT",
        price: "¥1,500〜",
        image: "/クラT画像/ポリエステルT.png",
        sizes: "XS-5XL",
        colors: 15,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "6",
        name: "コットンT",
        price: "¥1,500〜",
        image: "/クラT画像/コットンT.png",
        sizes: "XS-5XL",
        colors: 15,
        isNew: true,
        isTemplate: false,
      },

      {
        id: "8",
        name: "ポロシャツ",
        price: "¥2,200〜",
        image: "/クラT画像/ポロシャツ.png",
        sizes: "XS-5XL",
        colors: 12,
        isNew: true,
        isTemplate: false,
      },

      {
        id: "10",
        name: "ヘビーウェイトTシャツ",
        price: "¥1,500〜",
        image: "/クラT画像/ヘビーウェイトT.png",
        sizes: "XS-5XL",
        colors: 12,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "classt-1",
        name: "Tシャツ1",
      price: "¥1,500〜",
      image: "/クラT画像/Tシャツ1.png",
        sizes: "XS-5XL",
        colors: 15,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "classt-2",
        name: "Tシャツ2",
      price: "¥1,500〜",
      image: "/クラT画像/Tシャツ2.png",
        sizes: "XS-5XL",
        colors: 15,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "classt-3",
        name: "Tシャツ3",
      price: "¥1,500〜",
      image: "/クラT画像/Tシャツ3.png",
        sizes: "XS-5XL",
        colors: 15,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "classt-4",
        name: "Tシャツ4",
      price: "¥1,500〜",
      image: "/クラT画像/Tシャツ4.png",
        sizes: "XS-5XL",
        colors: 15,
        isNew: true,
        isTemplate: false,
      },
      {
        id: "classt-5",
        name: "Tシャツ5",
      price: "¥1,500〜",
      image: "/クラT画像/Tシャツ5.png",
        sizes: "XS-5XL",
        colors: 15,
        isNew: true,
        isTemplate: false,
      },
    ],
  },

};


export const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("soccer");

  return (
    <section className="pb-16 bg-white">
      <div className="px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 mt-4">商品ラインナップ</h2>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">クラT・前面デザイン済みユニフォームから選択</p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(productCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-3 rounded-full font-bold transition text-sm ${
                activeTab === key
                  ? "bg-sparkle-pink text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="w-full max-w-full mx-auto">
          {true ? (
            <Swiper
              className="product-swiper"
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={2}
              centeredSlides={false}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 25 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 2, spaceBetween: 35 },
              }}
            >
              {productCategories[activeTab].products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group w-full max-w-7xl mx-auto"
                  >
                    <div className="relative h-64 bg-gray-50 overflow-hidden rounded-t-3xl">
                      <Image
                        src={product.image || "/api/placeholder/400/400"}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-300 object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />


                      {product.colors && product.colors > 0 && (
                        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold shadow z-10">
                          {product.colors}色
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 h-12">{product.name}</h3>
                      {!product.isTemplate && (
                        <>
                          <p className="text-2xl font-bold text-sparkle-pink mb-2">
                            {product.price}
                          </p>
                          {product.sizes && (
                            <p className="text-gray-600 text-sm mb-4">
                              サイズ: {product.sizes}
                            </p>
                          )}
                          <Link href={`/product-detail/${product.id}`} className="w-full bg-sparkle-pink text-white py-2 px-8 rounded-full font-bold text-sm hover:bg-sparkle-pink-dark transition">
                            詳細を見る
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories[activeTab].products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
                >
                  <div className="relative h-64 bg-gray-50 overflow-hidden rounded-3xl border border-red-300">
                    <Image
                      src={product.image || "/api/placeholder/400/400"}
                      alt={product.name}
                      fill
                      className="object-contain hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-sparkle-pink text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                        NEW
                      </span>
                    )}
                    {product.isSale && (
                      <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                        SALE
                      </span>
                    )}
                    {product.isTemplate && (
                      <span className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                        テンプレート
                      </span>
                    )}
                    {product.colors && product.colors > 0 && (
                      <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold shadow z-10">
                        {product.colors}色
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 h-12">{product.name}</h3>
                    <p className="text-2xl font-bold text-sparkle-pink mb-2">
                      {product.price}
                    </p>
                    {product.sizes && (
                      <p className="text-gray-600 text-sm mb-4">
                        サイズ: {product.sizes}
                      </p>
                    )}
                    <Link href={`/product-detail/${product.id}`} className="w-full bg-sparkle-pink text-white py-2 px-8 rounded-full font-bold text-sm hover:bg-sparkle-pink-dark transition group-hover:scale-105">
                      詳細を見る
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <Link href={activeTab === 'templates' ? '/products?tab=templates' : '/products'} className="inline-flex items-center gap-2 bg-sparkle-turquoise text-white px-8 py-3 rounded-full font-bold hover:bg-sparkle-turquoise-dark transition">
            {activeTab === 'templates' ? 'すべてのデザインを見る' : 'すべての商品を見る'}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
