<?php
// 文字コード設定
mb_language("Japanese");
mb_internal_encoding("UTF-8");

// フォームの値を受け取る
$name    = $_POST['user_name'];
$email   = $_POST['user_email'];
$tel     = $_POST['tel'];
$message = $_POST['message'];

// 管理者（あなた）宛てのメール内容
$to = "yourmail@example.com"; // ★あなたのメールアドレスに変更
$subject = "【松本農園】お問い合わせがありました";
$body  = "お名前: " . $name . "\n";
$body .= "メール: " . $email . "\n";
$body .= "電話番号: " . $tel . "\n";
$body .= "お問い合わせ内容:\n" . $message;

// 送信元（フォーム入力者のメールアドレスを指定）
$headers = "From: " . $email;

// メール送信
if (mb_send_mail($to, $subject, $body, $headers)) {
    // 送信成功 → サンクスページへリダイレクト
    header("Location: thanks.html");
    exit;
} else {
    echo "メール送信に失敗しました。";
}
?>
