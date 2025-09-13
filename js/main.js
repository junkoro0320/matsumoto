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



window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    const waveContainer = loading.querySelector(".wave-container");
    // 5秒後にフェードアウト
    setTimeout(() => {
        loading.style.opacity = "0"; // 透明にする

        // 透明になったら display:none にする
        setTimeout(() => {
            loading.style.display = "none";
        }, 1000); // CSSの transition時間と合わせる
    }, 5000);
});



