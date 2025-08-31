// mvスライダー
// スライドの要素を取得
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

// スライドを切り替える関数
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active')); // すべて非表示
    slides[index].classList.add('active'); // 指定のスライドを表示
}

// 3秒ごとにスライドを切り替える
function startSlider() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides; // 次のスライドへ
        showSlide(currentSlide);
    }, 3000);
}

// 最初のスライドを表示してスタート
showSlide(currentSlide);
startSlider();
// ここまでmvスライダー

// 実績スライダー
const swiperTop = new Swiper(".swiper-top", {
    loop: true, // 無限ループ
    autoplay: {
        delay: 2000, // 2秒ごとにスライド
        disableOnInteraction: false, // ユーザーが操作しても止まらない
    },
    slidesPerView: 4, // 4枚表示
    spaceBetween: 10, // スライド間の余白
});

const swiperBottom = new Swiper(".swiper-bottom", {
    loop: true, // 無限ループ
    autoplay: {
        delay: 2000, // 2秒ごとにスライド
        disableOnInteraction: false,
        reverseDirection: true, // 左に流れる
    },
    slidesPerView: 4,
    spaceBetween: 10,
});

//ここから 実績スライダー（ボタン付き）
document.addEventListener("DOMContentLoaded", () => {
    // 複数のスライダー要素を取得
    const sliders = document.querySelectorAll('.achievement_content_item01_slide, .achievement_03');

    // 各スライダーに対して処理を実行
    sliders.forEach(slider => {
        if (!slider) return; // スライダーがなければ処理を終了

        const slides = slider.querySelectorAll('.achievement_content_item01_slide_img, .achievement_03_img');
        const pagination = slider.querySelector('.pagination');
        let currentIndex = 0;
        let intervalId;

        // ページネーション（○ボタン）を作成
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => updateSlide(i));
            pagination.appendChild(dot);
        });

        // スライドを更新する関数
        function updateSlide(index) {
            slides[currentIndex].classList.remove('active');
            pagination.children[currentIndex].classList.remove('active');
            slides[index].classList.add('active');
            pagination.children[index].classList.add('active');
            currentIndex = index;
        }

        // 自動スライド（4秒ごと）
        function startAutoSlide() {
            intervalId = setInterval(() => {
                let nextIndex = (currentIndex + 1) % slides.length;
                updateSlide(nextIndex);
            }, 4000);
        }

        // クリックで次のスライドへ
        slider.addEventListener("click", () => {
            let nextIndex = (currentIndex + 1) % slides.length;
            updateSlide(nextIndex);
        });

        // 初期表示と自動スライド開始
        updateSlide(currentIndex);
        startAutoSlide();
    });
});

// ここまで実績スライダー（ボタン付き）
// ここまで実績スライダー
// ここからフロートボタン
// ページのスクロールイベントを監視
window.addEventListener('scroll', function () {
    const mv = document.querySelector('.mv'); // MVセクションを取得
    const footer = document.querySelector('footer'); // フッターを取得
    const floatButtonContainer = document.querySelector('.fixedButton_container'); // フロートボタンの親コンテナを取得
    const floatButtons = document.querySelectorAll('.fixedButton'); // 各フロートボタンを取得

    // MVセクションの位置を取得
    const mvPosition = mv.getBoundingClientRect();

    // フッターの位置を取得
    const footerPosition = footer.getBoundingClientRect();

    // MVセクションが表示されている間はフロートボタンを非表示に
    if (mvPosition.top <= window.innerHeight && mvPosition.bottom >= 0) {
        floatButtonContainer.classList.add('hidden'); // フロートボタン全体を非表示
    } else {
        floatButtonContainer.classList.remove('hidden'); // MVを過ぎたら再表示
    }

    // フッターに到達したら「一番上に戻る」ボタン以外を非表示にする
    if (footerPosition.top <= window.innerHeight) {
        floatButtons.forEach((button, index) => {
            if (index !== floatButtons.length) { // 最後のボタン（一番上に戻るボタン）以外を非表示
                button.classList.add('hidden');
            }
        });
    } else {
        floatButtons.forEach(button => {
            button.classList.remove('hidden'); // フッターを過ぎたら再表示
        });
    }
});
// ここまでフロートボタン
// スマホ版のボイス
const swiper = new Swiper('.voice_swiper', {
    loop: true, // ループ
    speed: 1500, // スライドの速度
    autoplay: { // 自動再生
        delay: 3000, // 3秒ごとに次のスライド
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
        el: '.voice_swiper-pagination',
        clickable: true, // ページネーションをクリック可能に
    },
    // 前後の矢印
    navigation: {
        nextEl: '.voice_swiper-button-next',
        prevEl: '.voice_swiper-button-prev',
    }
});
