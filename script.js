// script.js — floating emojis & confetti (improved visuals)

// 🌸 Floating Emojis (rise from bottom to top)
function floatingEmojis() {
  // create an interval that spawns an emoji
  const intervalId = setInterval(() => {
    const emojis = ["💖", "💞", "💓", "⭐", "✨"];
    const emoji = document.createElement("div");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * (window.innerWidth - 40) + "px";
    emoji.style.top = (window.innerHeight + 30) + "px"; // start just below viewport
    const size = Math.floor(Math.random() * 22) + 20;
    emoji.style.fontSize = size + "px";
    emoji.style.pointerEvents = "none";
    emoji.style.zIndex = 9999;
    emoji.style.opacity = (0.5 + Math.random() * 0.7).toString();
    emoji.style.transform = `translateY(0) rotate(${Math.random() * 360}deg)`;
    emoji.style.transition = `transform 6s linear, opacity 6s linear`;
    document.body.appendChild(emoji);

    // let it float up
    requestAnimationFrame(() => {
      emoji.style.transform = `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 720 - 360}deg)`;
      emoji.style.opacity = "0";
    });

    // cleanup
    setTimeout(() => {
      emoji.remove();
    }, 7000);
  }, 900);

  // return id in case caller wants to clear
  return () => clearInterval(intervalId);
}

// 🎉 Confetti burst (visible colorful chips/emoji)
function launchConfetti(count = 52) {
  const chars = ["🎉","✨","💖","💫","🎊","💚","💛","❤️"];
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.textContent = chars[Math.floor(Math.random() * chars.length)];
    confetti.style.position = "fixed";
    confetti.style.left = (Math.random() * window.innerWidth) + "px";
    confetti.style.top = "-20px";
    confetti.style.fontSize = (12 + Math.random() * 24) + "px";
    confetti.style.zIndex = 9999;
    confetti.style.pointerEvents = "none";
    confetti.style.opacity = "1";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.transition = `transform 2.5s ease-out, top 2.5s ease-out, opacity 2.5s ease-out`;
    document.body.appendChild(confetti);

    // give each confetti a slightly different fall path
    const finalX = (Math.random() * 200 - 100) + (parseFloat(confetti.style.left) || 0);
    const duration = 1800 + Math.random() * 800;

    // animate using requestAnimationFrame to allow different durations
    setTimeout(() => {
      confetti.style.top = (window.innerHeight + 60) + "px";
      confetti.style.left = finalX + "px";
      confetti.style.opacity = "0";
      confetti.style.transform = `rotate(${Math.random() * 720}deg) translateY(${window.innerHeight}px)`;
    }, Math.random() * 120);

    // cleanup
    setTimeout(() => confetti.remove(), duration + 300);
  }
}

// start floating emojis once page loads
let stopEmojis = null;
window.addEventListener("load", () => {
  stopEmojis = floatingEmojis();
});

// cleanup on unload
window.addEventListener("beforeunload", () => {
  if (typeof stopEmojis === "function") stopEmojis();
});
