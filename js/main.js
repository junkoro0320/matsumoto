

// フェードインセクションの設定

document.addEventListener("DOMContentLoaded", () => {
    // ===== fade-in
    const targets = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    targets.forEach(target => observer.observe(target));
});


// ローディング画面フェードアウト

window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    const waveContainer = loading.querySelector(".wave-container");
    // 4秒後にフェードアウト
    setTimeout(() => {
        loading.style.opacity = "0";

        // 透明になったら display:none にする
        setTimeout(() => {
            loading.style.display = "none";
        }, 1000); // CSSの transition時間１Sと合わせる
    }, 4500);
});


// ========================
// モーダル処理
// ========================

// モーダルを開く
document.querySelectorAll('.modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.dataset.modalId;
        const targetModal = document.getElementById(modalId);
        if (targetModal) {
            targetModal.showModal();
            document.body.style.overflow = 'hidden'; // ここで実行
        }
    });
});

// モーダルを閉じる（背景クリック・×ボタン）
document.querySelectorAll('.modal').forEach(modal => {
    // 背景クリック
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
            document.body.style.overflow = ''; // ここで実行
        }
    });

    // ×ボタン
    const closeBtn = modal.querySelector('.modal__close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.close();
            document.body.style.overflow = ''; // ここで実行
        });
    }
});

// 必要なら明示的に閉じる関数
function closeModalById(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.close();
        modal.blur();
        document.body.focus();
        document.body.style.overflow = ''; // ここで実行
    }
}

const floatingButtons = document.querySelector('.floating-buttons');
const targetSection = document.querySelector('#hometown');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const sectionTop = targetSection ? targetSection.offsetTop : 0;
    const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;

    // セクションに到達 && フッター前
    if (scrollPosition + windowHeight > sectionTop &&
        scrollPosition + windowHeight < footerTop) {
        floatingButtons.classList.add('visible');
    } else {
        floatingButtons.classList.remove('visible');
    }
});





