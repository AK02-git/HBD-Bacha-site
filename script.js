// 🌸 Floating Hearts & Stars
function floatingEmojis() {
  setInterval(() => {
    const emojis = ["💖", "💞", "💓", "⭐", "✨"];
    const emoji = document.createElement("div");
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = window.innerHeight + "px";
    emoji.style.fontSize = Math.random() * 30 + 20 + "px";
    emoji.style.animation = "floatUp 6s linear forwards";
    document.body.appendChild(emoji);

    setTimeout(() => emoji.remove(), 6000);
  }, 1000);
}

// 🎉 Confetti burst
function launchConfetti() {
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = -50 + "px";
    confetti.style.fontSize = "20px";
    confetti.style.animation = "fall 3s linear forwards";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

// ✨ CSS Animations
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}
@keyframes fall {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(100vh); opacity: 0; }
}`;
document.head.appendChild(style);

// Start effects
window.onload = () => {
  floatingEmojis();
};
