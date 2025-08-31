// ここからハンバーガーメニュー
// ハンバーガーアイコンをクリックした時の処理
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // バッテンにする
    nav.classList.toggle('active'); // メニューを開く
});
// ここまでハンバーガーメニュー


