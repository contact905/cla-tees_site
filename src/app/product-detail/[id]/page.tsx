"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowRight, Instagram } from "lucide-react";
import { WavePatternTop, WavePatternBottom } from "@/components/WavePattern";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("details");
  const [selectedImage, setSelectedImage] = useState("");

  // ProductTabsと同期した商品データ
  const productCategories = {
    soccer: [
      { id: "soccer-1", name: "サッカーユニフォーム1", price: 1600, image: "/クラT画像/サッカー1.png", sizes: ["S", "M", "L", "XL"], colors: ["ブルー", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-2", name: "サッカーユニフォーム2", price: 1600, image: "/クラT画像/サッカー2.png", sizes: ["S", "M", "L", "XL"], colors: ["レッド", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-3", name: "サッカーユニフォーム3", price: 1600, image: "/クラT画像/サッカー3.png", sizes: ["S", "M", "L", "XL"], colors: ["グリーン", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-4", name: "サッカーユニフォーム4", price: 1600, image: "/クラT画像/サッカー4.png", sizes: ["S", "M", "L", "XL"], colors: ["イエロー", "ブラック"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-5", name: "サッカーユニフォーム5", price: 1600, image: "/クラT画像/サッカー5.png", sizes: ["S", "M", "L", "XL"], colors: ["パープル", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-6", name: "サッカーユニフォーム6", price: 1600, image: "/クラT画像/サッカー6.png", sizes: ["S", "M", "L", "XL"], colors: ["オレンジ", "ブラック"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-7", name: "サッカーユニフォーム7", price: 1600, image: "/クラT画像/サッカー7.png", sizes: ["S", "M", "L", "XL"], colors: ["ブラック", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-8", name: "サッカーユニフォーム8", price: 1600, image: "/クラT画像/サッカー8.png", sizes: ["S", "M", "L", "XL"], colors: ["ネイビー", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-9", name: "サッカーユニフォーム9", price: 1600, image: "/クラT画像/サッカー9.png", sizes: ["S", "M", "L", "XL"], colors: ["ピンク", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-10", name: "サッカーユニフォーム10", price: 1600, image: "/クラT画像/サッカー10.png", sizes: ["S", "M", "L", "XL"], colors: ["ライトブルー", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-11", name: "サッカーユニフォーム11", price: 1600, image: "/クラT画像/サッカー11.png", sizes: ["S", "M", "L", "XL"], colors: ["マルーン", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-12", name: "サッカーユニフォーム12", price: 1600, image: "/クラT画像/サッカー12.png", sizes: ["S", "M", "L", "XL"], colors: ["ターコイズ", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-13", name: "サッカーユニフォーム13", price: 1600, image: "/クラT画像/サッカー13.png", sizes: ["S", "M", "L", "XL"], colors: ["ライム", "ブラック"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-14", name: "サッカーユニフォーム14", price: 1600, image: "/クラT画像/サッカー14.png", sizes: ["S", "M", "L", "XL"], colors: ["ゴールド", "ブラック"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-15", name: "サッカーユニフォーム15", price: 1600, image: "/クラT画像/サッカー15.png", sizes: ["S", "M", "L", "XL"], colors: ["シルバー", "ブラック"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-16", name: "サッカーユニフォーム16", price: 1600, image: "/クラT画像/サッカー16.png", sizes: ["S", "M", "L", "XL"], colors: ["ブラウン", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-17", name: "サッカーユニフォーム17", price: 1600, image: "/クラT画像/サッカー17.png", sizes: ["S", "M", "L", "XL"], colors: ["インディゴ", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-18", name: "サッカーユニフォーム18", price: 1600, image: "/クラT画像/サッカー18.png", sizes: ["S", "M", "L", "XL"], colors: ["クリムゾン", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-19", name: "サッカーユニフォーム19", price: 1600, image: "/クラT画像/サッカー19.png", sizes: ["S", "M", "L", "XL"], colors: ["フォレストグリーン", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "soccer-20", name: "サッカーユニフォーム20", price: 1600, image: "/クラT画像/サッカー20.png", sizes: ["S", "M", "L", "XL"], colors: ["ロイヤルブルー", "ホワイト"], description: "高品質なサッカーユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
    ],
    basketball: [
      { id: "basketball-1", name: "バスケユニフォーム1", price: 1600, image: "/クラT画像/バスケ1.png", sizes: ["S", "M", "L", "XL"], colors: ["ブルー", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-2", name: "バスケユニフォーム2", price: 1600, image: "/クラT画像/バスケ2.png", sizes: ["S", "M", "L", "XL"], colors: ["レッド", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-3", name: "バスケユニフォーム3", price: 1600, image: "/クラT画像/バスケ3.png", sizes: ["S", "M", "L", "XL"], colors: ["グリーン", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-4", name: "バスケユニフォーム4", price: 1600, image: "/クラT画像/バスケ4.png", sizes: ["S", "M", "L", "XL"], colors: ["イエロー", "ブラック"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-5", name: "バスケユニフォーム5", price: 1600, image: "/クラT画像/バスケ5.png", sizes: ["S", "M", "L", "XL"], colors: ["パープル", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-6", name: "バスケユニフォーム6", price: 1600, image: "/クラT画像/バスケ6.png", sizes: ["S", "M", "L", "XL"], colors: ["オレンジ", "ブラック"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-7", name: "バスケユニフォーム7", price: 1600, image: "/クラT画像/バスケ7.png", sizes: ["S", "M", "L", "XL"], colors: ["ブラック", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-8", name: "バスケユニフォーム8", price: 1600, image: "/クラT画像/バスケ8.png", sizes: ["S", "M", "L", "XL"], colors: ["ネイビー", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-9", name: "バスケユニフォーム9", price: 1600, image: "/クラT画像/バスケ9.png", sizes: ["S", "M", "L", "XL"], colors: ["ピンク", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-10", name: "バスケユニフォーム10", price: 1600, image: "/クラT画像/バスケ10.png", sizes: ["S", "M", "L", "XL"], colors: ["ライトブルー", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-11", name: "バスケユニフォーム11", price: 1600, image: "/クラT画像/バスケ11.png", sizes: ["S", "M", "L", "XL"], colors: ["マルーン", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-12", name: "バスケユニフォーム12", price: 1600, image: "/クラT画像/バスケ12.png", sizes: ["S", "M", "L", "XL"], colors: ["ターコイズ", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-13", name: "バスケユニフォーム13", price: 1600, image: "/クラT画像/バスケ13.png", sizes: ["S", "M", "L", "XL"], colors: ["ライム", "ブラック"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-14", name: "バスケユニフォーム14", price: 1600, image: "/クラT画像/バスケ14.png", sizes: ["S", "M", "L", "XL"], colors: ["ゴールド", "ブラック"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-15", name: "バスケユニフォーム15", price: 1600, image: "/クラT画像/バスケ15.png", sizes: ["S", "M", "L", "XL"], colors: ["シルバー", "ブラック"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-16", name: "バスケユニフォーム16", price: 1600, image: "/クラT画像/バスケ16.png", sizes: ["S", "M", "L", "XL"], colors: ["ブラウン", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-17", name: "バスケユニフォーム17", price: 1600, image: "/クラT画像/バスケ17.png", sizes: ["S", "M", "L", "XL"], colors: ["インディゴ", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-18", name: "バスケユニフォーム18", price: 1600, image: "/クラT画像/バスケ18.png", sizes: ["S", "M", "L", "XL"], colors: ["クリムゾン", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "basketball-19", name: "バスケユニフォーム19", price: 1600, image: "/クラT画像/バスケ19.png", sizes: ["S", "M", "L", "XL"], colors: ["フォレストグリーン", "ホワイト"], description: "高品質なバスケユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
    ],
    baseball: [
      { id: "baseball-1", name: "野球ユニフォーム1", price: 1600, image: "/クラT画像/野球1.png", sizes: ["S", "M", "L", "XL"], colors: ["ブルー", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-2", name: "野球ユニフォーム2", price: 1600, image: "/クラT画像/野球2.png", sizes: ["S", "M", "L", "XL"], colors: ["レッド", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-3", name: "野球ユニフォーム3", price: 1600, image: "/クラT画像/野球3.png", sizes: ["S", "M", "L", "XL"], colors: ["グリーン", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-4", name: "野球ユニフォーム4", price: 1600, image: "/クラT画像/野球4.png", sizes: ["S", "M", "L", "XL"], colors: ["イエロー", "ブラック"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-5", name: "野球ユニフォーム5", price: 1600, image: "/クラT画像/野球5.png", sizes: ["S", "M", "L", "XL"], colors: ["パープル", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-6", name: "野球ユニフォーム6", price: 1600, image: "/クラT画像/野球6.png", sizes: ["S", "M", "L", "XL"], colors: ["オレンジ", "ブラック"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-7", name: "野球ユニフォーム7", price: 1600, image: "/クラT画像/野球7.png", sizes: ["S", "M", "L", "XL"], colors: ["ブラック", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
      { id: "baseball-8", name: "野球ユニフォーム8", price: 1600, image: "/クラT画像/野球8.png", sizes: ["S", "M", "L", "XL"], colors: ["ネイビー", "ホワイト"], description: "高品質な野球ユニフォーム", material: "ポリエステル100%", isNew: false, isSale: false, isTemplate: false },
    ],
    classt: [
      { id: "classt-1", name: "Tシャツ1", price: 1300, image: "/クラT画像/Tシャツ1.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-2", name: "Tシャツ2", price: 1300, image: "/クラT画像/Tシャツ2.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-3", name: "Tシャツ3", price: 1300, image: "/クラT画像/Tシャツ3.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-4", name: "Tシャツ4", price: 1300, image: "/クラT画像/Tシャツ4.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-5", name: "Tシャツ5", price: 1300, image: "/クラT画像/Tシャツ5.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-6", name: "Tシャツ6", price: 1300, image: "/クラT画像/Tシャツ6.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-7", name: "Tシャツ7", price: 1300, image: "/クラT画像/Tシャツ7.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-8", name: "Tシャツ8", price: 1300, image: "/クラT画像/Tシャツ8.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-9", name: "Tシャツ9", price: 1300, image: "/クラT画像/Tシャツ9.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-10", name: "Tシャツ10", price: 1300, image: "/クラT画像/Tシャツ10.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-11", name: "Tシャツ11", price: 1300, image: "/クラT画像/Tシャツ11.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-12", name: "Tシャツ12", price: 1300, image: "/クラT画像/Tシャツ12.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-13", name: "Tシャツ13", price: 1300, image: "/クラT画像/Tシャツ13.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },
      { id: "classt-14", name: "Tシャツ14", price: 1300, image: "/クラT画像/Tシャツ14.png", sizes: ["S", "M", "L", "XL"], colors: ["ホワイト", "ブラック"], description: "高品質なクラスTシャツ", material: "コットン100%", isNew: false, isSale: false, isTemplate: false },

  
    ],

  };

  // 全商品を統合
  const allProducts = [...productCategories.soccer, ...productCategories.basketball, ...productCategories.baseball, ...productCategories.classt];
  
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
      "soccer-1": ["/クラT画像/サッカー1.png"],
      "soccer-2": ["/クラT画像/サッカー2.png"],
      "soccer-3": ["/クラT画像/サッカー3.png"],
      "soccer-4": ["/クラT画像/サッカー4.png"],
      "soccer-5": ["/クラT画像/サッカー5.png"],
      "soccer-6": ["/クラT画像/サッカー6.png"],
      "soccer-7": ["/クラT画像/サッカー7.png"],
      "soccer-8": ["/クラT画像/サッカー8.png"],
      "soccer-9": ["/クラT画像/サッカー9.png"],
      "soccer-10": ["/クラT画像/サッカー10.png"],
      "soccer-11": ["/クラT画像/サッカー11.png"],
      "soccer-12": ["/クラT画像/サッカー12.png"],
      "soccer-13": ["/クラT画像/サッカー13.png"],
      "soccer-14": ["/クラT画像/サッカー14.png"],
      "soccer-15": ["/クラT画像/サッカー15.png"],
      "soccer-16": ["/クラT画像/サッカー16.png"],
      "soccer-17": ["/クラT画像/サッカー17.png"],
      "soccer-18": ["/クラT画像/サッカー18.png"],
      "soccer-19": ["/クラT画像/サッカー19.png"],
      "soccer-20": ["/クラT画像/サッカー20.png"],
      "basketball-1": ["/クラT画像/バスケ1.png"],
      "basketball-2": ["/クラT画像/バスケ2.png"],
      "basketball-3": ["/クラT画像/バスケ3.png"],
      "basketball-4": ["/クラT画像/バスケ4.png"],
      "basketball-5": ["/クラT画像/バスケ5.png"],
      "basketball-6": ["/クラT画像/バスケ6.png"],
      "basketball-7": ["/クラT画像/バスケ7.png"],
      "basketball-8": ["/クラT画像/バスケ8.png"],
      "basketball-9": ["/クラT画像/バスケ9.png"],
      "basketball-10": ["/クラT画像/バスケ10.png"],
      "basketball-11": ["/クラT画像/バスケ11.png"],
      "basketball-12": ["/クラT画像/バスケ12.png"],
      "basketball-13": ["/クラT画像/バスケ13.png"],
      "basketball-14": ["/クラT画像/バスケ14.png"],
      "basketball-15": ["/クラT画像/バスケ15.png"],
      "basketball-16": ["/クラT画像/バスケ16.png"],
      "basketball-17": ["/クラT画像/バスケ17.png"],
      "basketball-18": ["/クラT画像/バスケ18.png"],
      "basketball-19": ["/クラT画像/バスケ19.png"],
      "baseball-1": ["/クラT画像/野球1.png"],
      "baseball-2": ["/クラT画像/野球2.png"],
      "baseball-3": ["/クラT画像/野球3.png"],
      "baseball-4": ["/クラT画像/野球4.png"],
      "baseball-5": ["/クラT画像/野球5.png"],
      "baseball-6": ["/クラT画像/野球6.png"],
      "baseball-7": ["/クラT画像/野球7.png"],
      "baseball-8": ["/クラT画像/野球8.png"],
      "classt-1": ["/クラT画像/クラスT1.png"],
    "classt-2": ["/クラT画像/クラスT2.png"],
    "classt-3": ["/クラT画像/クラスT3.png"],
    "classt-4": ["/クラT画像/クラスT4.png"],
    "classt-5": ["/クラT画像/クラスT5.png"],
    "classt-6": ["/クラT画像/クラスT6.png"],
    "classt-7": ["/クラT画像/クラスT7.png"],
    "classt-8": ["/クラT画像/クラスT8.png"],
    "classt-9": ["/クラT画像/クラスT9.png"],
    "classt-10": ["/クラT画像/クラスT10.png"],
    "classt-11": ["/クラT画像/クラスT11.png"],
    "classt-12": ["/クラT画像/クラスT12.png"],
    "classt-13": ["/クラT画像/クラスT13.png"],
    "classt-14": ["/クラT画像/クラスT14.png"],

  

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

                {/* Menu Toggle */}
                <div className="flex items-center space-x-2">
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
                {/* 商品説明 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">商品について</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* CTAボタンエリア */}
                <div className="space-y-3">

                  
                  {/* 購入ボタン（工事中ページへリダイレクト） */}
                  <Link
                    href="/under-construction"
                    className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-full font-bold text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                      <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
                    </svg>
                    🛒 ECサイトで購入
                  </Link>
                  
                  {/* LINEで相談ボタン */}
                  <a
                    href="https://line.me/R/ti/p/@your-line-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-full font-bold text-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                    💬 LINEで相談
                  </a>
                  

                </div>
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