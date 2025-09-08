// ここからハンバーガーメニュー
const hamburgerButton = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const label = document.querySelector('.header__hamburger--label');

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




