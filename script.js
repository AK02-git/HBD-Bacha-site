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
    emoji.style.zIndex = "9999"; // keep above background
    document.body.appendChild(emoji);

    setTimeout(() => emoji.remove(), 6000);
  }, 1000);
}

// ✨ CSS Animation for floating
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);

// Start on load
window.onload = () => {
  floatingEmojis();
};
