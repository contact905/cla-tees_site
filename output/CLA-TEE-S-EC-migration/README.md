# CLA-TEE-S-EC 商品一覧UI移植パッケージ

## 含まれるファイル

### コンポーネント
- `ProductTabs.tsx` - メイン商品タブコンポーネント（Swiperスライダー付き）
- `products-page.tsx` - 商品一覧ページ
- `product-detail-page.tsx` - 商品詳細ページ

### 画像
- `クラT画像/` - 全ての商品画像フォルダ

## 必要な依存関係

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "swiper": "^11.0.0",
    "tailwindcss": "^3.0.0"
  }
}
```

## セットアップ手順

### 1. ファイルの配置
```bash
# コンポーネントをコピー
cp ProductTabs.tsx [新プロジェクト]/src/components/
cp products-page.tsx [新プロジェクト]/src/app/products/page.tsx
cp product-detail-page.tsx [新プロジェクト]/src/app/product-detail/[id]/page.tsx

# 画像フォルダをコピー
cp -r クラT画像 [新プロジェクト]/public/
```

### 2. 依存関係のインストール
```bash
npm install swiper
# または
yarn add swiper
```

### 3. Swiperスタイルの追加
`layout.tsx`または`globals.css`に以下を追加：
```css
import 'swiper/css';
import 'swiper/css/navigation';
```

### 4. TailwindCSS設定
TailwindCSSが設定されていることを確認してください。

## 商品データ構造

```typescript
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  sizes?: string;
  colors?: number;
  isNew?: boolean;
  isSale?: boolean;
  isTemplate?: boolean;
}
```

## カテゴリ
- `soccer` - サッカーユニフォーム（5商品）
- `basketball` - バスケットボールユニフォーム（6商品）
- `baseball` - 野球ユニフォーム（6商品）
- `volleyball` - バレーボールユニフォーム（2商品）
- `classt` - クラスTシャツ（9商品）

## 注意事項

1. **画像パス**: 画像パスは `/クラT画像/ファイル名.png` 形式です
2. **ルーティング**: Next.js App Routerを使用しています
3. **レスポンシブ**: TailwindCSSでレスポンシブデザイン対応済み
4. **リンク調整**: 新プロジェクトのルーティング構造に合わせてリンクを調整してください

## カスタマイズ

### 商品データの外部化
商品データを外部ファイルやAPIに分離することを推奨します：

```typescript
// data/products.ts
export const productCategories = {
  // 商品データ
};
```

### スタイルのカスタマイズ
TailwindCSSクラスを変更してデザインをカスタマイズできます。

## サポート

移植に関する質問や問題がある場合は、元のプロジェクトの開発者にお問い合わせください。