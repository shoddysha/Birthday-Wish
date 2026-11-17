
function revealSurprise() {
    const message = document.getElementById("final-message");
    const button = document.querySelector(".surprise-button");

    message.classList.add("show");

    button.textContent = "YOUR SURPRISE IS UNLOCKED ❤️";
    button.disabled = true;

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // Celebrate Queen Dee with floating hearts
    for (let i = 0; i < 35; i++) {
        createFloatingHeart();
    }
}

function createFloatingHeart() {
    const heart = document.createElement("div");

    const symbols = ["♥", "♡", "✦", "✧"];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.color =
        Math.random() > 0.5 ? "#b77c7c" : "#b79a69";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    const duration = 3000 + Math.random() * 3000;

    heart.animate([
        {
            transform: "translateY(0) rotate(0deg)",
            opacity: 1
        },
        {
            transform: "translateY(-110vh) rotate(360deg)",
            opacity: 0
        }
    ], {
        duration: duration,
        easing: "ease-out"
    });

    setTimeout(() => heart.remove(), duration);
}