import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      productType,
      quantity,
      printMethod,
      colors,
      description,
      contactName,
      email,
      phone,
      files
    } = body;

    // メール送信設定
    const transporter = nodemailer.createTransport({
      service: 'gmail', // または他のメールサービス
      auth: {
        user: process.env.EMAIL_USER, // 送信元メールアドレス
        pass: process.env.EMAIL_PASS, // アプリパスワード
      },
    });

    // メール内容
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contact@la-muse.org', // 送信先メールアドレス
      subject: '新しいお見積もり依頼',
      html: `
        <h2>新しいお見積もり依頼が届きました</h2>
        
        <h3>商品情報</h3>
        <ul>
          <li><strong>商品種類:</strong> ${productType}</li>
          <li><strong>数量:</strong> ${quantity}枚</li>
          <li><strong>希望加工方法:</strong> ${printMethod || '未選択'}</li>
          <li><strong>使用色数:</strong> ${colors || '未記入'}</li>
        </ul>
        
        <h3>詳細・ご要望</h3>
        <p>${description || '記入なし'}</p>
        
        <h3>お客様情報</h3>
        <ul>
          <li><strong>お名前:</strong> ${contactName}</li>
          <li><strong>メールアドレス:</strong> ${email}</li>
          <li><strong>電話番号:</strong> ${phone || '未記入'}</li>
        </ul>
        
        ${files && files.length > 0 ? `
        <h3>アップロードファイル</h3>
        <p>${files.length}個のファイルがアップロードされました</p>
        ` : ''}
        
        <hr>
        <p><small>このメールは自動送信されています。</small></p>
      `,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'お見積もり依頼を受け付けました。担当者よりご連絡いたします。' },
      { status: 200 }
    );
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メール送信に失敗しました。しばらく時間をおいて再度お試しください。' },
      { status: 500 }
    );
  }
}