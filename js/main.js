

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


// モーダル機能
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalCloseBtns = document.querySelectorAll('.modal__close-btn');
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.dataset.modalId;
        const targetModal = document.getElementById(modalId);


        if (targetModal) {
            targetModal.showModal();
        }
    });
});

modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetModal = btn.closest('.modal');
        if (targetModal) {
            targetModal.close();
        }
    });
});

const allModals = document.querySelectorAll('.modal');
allModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
});





