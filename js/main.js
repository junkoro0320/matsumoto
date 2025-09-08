document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target); // 1回だけ実行
            }
        });
    }, { threshold: 0.2 }); // 20%見えたら実行

    targets.forEach(target => observer.observe(target));
});
