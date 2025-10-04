// ハンバーガーメニュー
const hamburgerButton = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const label = document.querySelector('.header__hamburger--label');

// ボタンクリックで開閉
hamburgerButton.addEventListener('click', () => {
    const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // メニューを閉じる
        hamburgerButton.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
        label.textContent = 'menu';
    } else {
        // メニューを開く
        hamburgerButton.setAttribute('aria-expanded', 'true');
        nav.setAttribute('aria-hidden', 'false');
        label.textContent = 'close';
    }
});

// ====== 追加部分 ======
// ナビゲーションリンククリックで閉じる
const navLinks = document.querySelectorAll('.header__nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburgerButton.getAttribute('aria-expanded') === 'true') {
            hamburgerButton.setAttribute('aria-expanded', 'false');
            nav.setAttribute('aria-hidden', 'true');
            label.textContent = 'menu'; // ラベルを戻す
        }
    });
});





