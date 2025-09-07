// 🎂 Countdown Timer
function startCountdown() {
  const eventDate = new Date("2025-09-10 00:00:00").getTime(); // change your date
  const countdownElement = document.getElementById("countdown");

  setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      countdownElement.innerHTML = "🎉 Happy Birthday! 🎂";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

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

// Start everything when page loads
window.onload = () => {
  if (document.getElementById("countdown")) startCountdown();
  floatingHearts();
};
