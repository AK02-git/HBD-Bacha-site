  // 🎆 Floating hearts animation
function floatingHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = "24px";
    heart.style.animation = "floatUp 5s linear forwards";
    heart.style.zIndex = 1;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 1000);
}

// Add CSS animation for floating hearts
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);

// Start hearts when page loads
window.onload = () => {
  floatingHearts();
};
