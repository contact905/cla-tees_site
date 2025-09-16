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
    label: "サッカーT",
    products: [
      {
        id: "soccer-1",
        name: "サッカーユニフォーム1",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー1.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-2",
        name: "サッカーユニフォーム2",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー2.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-3",
        name: "サッカーユニフォーム3",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー3.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-4",
        name: "サッカーユニフォーム4",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー4.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-5",
        name: "サッカーユニフォーム5",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー5.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-6",
        name: "サッカーユニフォーム6",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー6.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-7",
        name: "サッカーユニフォーム7",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー7.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-8",
        name: "サッカーユニフォーム8",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー8.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-9",
        name: "サッカーユニフォーム9",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー9.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-10",
        name: "サッカーユニフォーム10",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー10.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-11",
        name: "サッカーユニフォーム11",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー11.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-12",
        name: "サッカーユニフォーム12",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー12.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-13",
        name: "サッカーユニフォーム13",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー13.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-14",
        name: "サッカーユニフォーム14",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー14.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-15",
        name: "サッカーユニフォーム15",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー15.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-16",
        name: "サッカーユニフォーム16",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー16.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-17",
        name: "サッカーユニフォーム17",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー17.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-18",
        name: "サッカーユニフォーム18",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー18.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-19",
        name: "サッカーユニフォーム19",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー19.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "soccer-20",
        name: "サッカーユニフォーム20",
        price: "¥1,600〜",
        image: "/クラT画像/サッカー20.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
    ],
  },
  basketball: {
    label: "バスケT",
    products: [
      {
        id: "basketball-1",
        name: "バスケユニフォーム1",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ1.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-2",
        name: "バスケユニフォーム2",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ2.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-3",
        name: "バスケユニフォーム3",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ3.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-4",
        name: "バスケユニフォーム4",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ4.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-5",
        name: "バスケユニフォーム5",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ5.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-6",
        name: "バスケユニフォーム6",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ6.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-7",
        name: "バスケユニフォーム7",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ7.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-8",
        name: "バスケユニフォーム8",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ8.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-9",
        name: "バスケユニフォーム9",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ9.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-10",
        name: "バスケユニフォーム10",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ10.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-11",
        name: "バスケユニフォーム11",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ11.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-12",
        name: "バスケユニフォーム12",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ12.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-13",
        name: "バスケユニフォーム13",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ13.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-14",
        name: "バスケユニフォーム14",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ14.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-15",
        name: "バスケユニフォーム15",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ15.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-16",
        name: "バスケユニフォーム16",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ16.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-17",
        name: "バスケユニフォーム17",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ17.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-18",
        name: "バスケユニフォーム18",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ18.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "basketball-19",
        name: "バスケユニフォーム19",
        price: "¥1,600〜",
        image: "/クラT画像/バスケ19.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
    ],
  },
  baseball: {
    label: "野球T",
    products: [
      {
        id: "baseball-1",
        name: "野球ユニフォーム1",
        price: "¥1,600〜",
        image: "/クラT画像/野球1.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "baseball-2",
        name: "野球ユニフォーム2",
        price: "¥1,600〜",
        image: "/クラT画像/野球2.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "baseball-3",
        name: "野球ユニフォーム3",
        price: "¥1,600〜",
        image: "/クラT画像/野球3.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "baseball-4",
        name: "野球ユニフォーム4",
        price: "¥1,600〜",
        image: "/クラT画像/野球4.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "baseball-5",
        name: "野球ユニフォーム5",
        price: "¥1,600〜",
        image: "/クラT画像/野球5.png",
        sizes: "S-XL",
        colors: 12,
        isNew: true,
      },
      {
        id: "baseball-6",
        name: "野球ユニフォーム6",
        price: "¥1,600〜",
        image: "/クラT画像/野球6.png",
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
  polo: {
    label: "ポロシャツ",
    products: [
      {
        id: "polo-1",
        name: "ポロシャツ1",
        price: "¥1,500〜",
        image: "/クラT画像/ポロシャツ1.png",
        sizes: "S-XL",
        colors: 8,
        isNew: true,
      },
      {
        id: "polo-2",
        name: "ポロシャツ2",
        price: "¥1,500〜",
        image: "/クラT画像/ポロシャツ2.png",
        sizes: "S-XL",
        colors: 8,
        isNew: true,
      },
      {
        id: "polo-3",
        name: "ポロシャツ3",
        price: "¥1,500〜",
        image: "/クラT画像/ポロシャツ3.png",
        sizes: "S-XL",
        colors: 8,
        isNew: true,
      },
      {
        id: "polo-4",
        name: "ポロシャツ4",
        price: "¥1,500〜",
        image: "/クラT画像/ポロシャツ4.png",
        sizes: "S-XL",
        colors: 8,
        isNew: true,
      },
    ],
  },
  classt: {
    label: "Tシャツ",
    products: [
      {
        id: "classt-1",
        name: "クラスT1",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT1.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-2",
        name: "クラスT2",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT2.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-3",
        name: "クラスT3",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT3.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-4",
        name: "クラスT4",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT4.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-5",
        name: "クラスT5",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT5.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-6",
        name: "クラスT6",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT6.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-7",
        name: "クラスT7",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT7.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-8",
        name: "クラスT8",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT8.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-9",
        name: "クラスT9",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT9.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-10",
        name: "クラスT10",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT10.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-11",
        name: "クラスT11",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT11.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-12",
        name: "クラスT12",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT12.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-13",
        name: "クラスT13",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT13.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-14",
        name: "クラスT14",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT14.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-15",
        name: "クラスT15",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT15.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-16",
        name: "クラスT16",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT16.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-17",
        name: "クラスT17",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT17.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-18",
        name: "クラスT18",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT18.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-19",
        name: "クラスT19",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT19.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-20",
        name: "クラスT20",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT20.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
      },
      {
        id: "classt-21",
        name: "クラスT21",
        price: "¥1,300〜",
        image: "/クラT画像/クラスT21.png",
        sizes: "S-XL",
        colors: 10,
        isNew: true,
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
