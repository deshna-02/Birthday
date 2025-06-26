// Page fade transitions
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("fade-out");

  document.querySelectorAll("a[href]").forEach(link => {
    if (link.hostname === location.hostname) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location = this.href;
        }, 300);
      });
    }
  });
});

// Floating heart animation
function addFloatingHearts() {
  const container = document.getElementById('hearts');
  if (!container) return;
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 5 + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 300);
}
addFloatingHearts();

// Music Toggle
// const music = document.getElementById('bg-music');
// const btn = document.getElementById('music-btn');
// if (btn && music) {
//   btn.addEventListener('click', () => {
//     if (music.paused) {
//       music.play();
//       btn.textContent = '🔊';
//     } else {
//       music.pause();
//       btn.textContent = '🔇';
//     }
//   });
// }

document.getElementById("music-btn").addEventListener("click", function () {
  const player = document.getElementById("music-player");
  if (player) {
    player.contentWindow.postMessage("toggleMusic", "*");
  }
});



// Confetti launcher (on button click)
function launchConfetti() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
  const interval = setInterval(() => {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    }));
  }, 250);
}

// Cover page button function
function enterSite() {
  launchConfetti();
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1200);
}

// Heart Typing Effect for Message Page
document.addEventListener("DOMContentLoaded", () => {
  const text = `Happy Birthday, my love! 🎉💖

Every moment with you feels like a fairytale, and today I just want to remind you how deeply you're loved — not just today, but every single day.

You're my safe place, my home, and my heart. I’m so proud of the person you are and beyond lucky to be yours. 💑

So today, I celebrate you. I love you to the moon and back — and then some. 🌙💞`;

  const typedText = document.getElementById("typedText");
  let index = 0;

  function typeChar() {
    if (index < text.length) {
      typedText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeChar, 35); // typing speed
    }
  }

  if (typedText) {
    typeChar();
  }
});

function openLightbox(id) {
  const img = document.querySelector(`[onclick="openLightbox('${id}')"] img`);
  const caption = document.querySelector(`[onclick="openLightbox('${id}')"] .caption`).textContent;

  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-caption').textContent = caption;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

let videoIndex = 0;
const videos = [
  'assests/video1.mp4',
  'assests/video3.mp4',
  'assests/video2.mp4',
  'assests/video4.mp4',
  'assests/video5.mp4'

];

function changeVideo(direction) {
  videoIndex += direction;
  if (videoIndex < 0) videoIndex = videos.length - 1;
  if (videoIndex >= videos.length) videoIndex = 0;
  const videoElement = document.getElementById('videoCarousel');
  videoElement.src = videos[videoIndex];
  videoElement.play();
}

function revealSurprise() {
  document.getElementById('audio-box').style.display = 'block';
}

function showFloatingHeart(event) {
  const heart = document.createElement('div');
  heart.className = 'click-heart';
  heart.innerText = '💖';

  document.body.appendChild(heart);

  const x = event.clientX;
  const y = event.clientY;

  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  setTimeout(() => {
    heart.remove();
  }, 1500);
}

  function revealSurprise() {
    const box = document.getElementById("audio-box");
    const audio = document.getElementById("surprise-audio");

    box.style.display = "block";
    audio.play(); // Play manually when button is clicked
  }

  function playSecretAudio() {
    const audioBox = document.getElementById("secret-audio-box");
    const audio = document.getElementById("secret-audio");
    audioBox.style.display = "block";
    audio.play();
  }

  function unlockCoupons() {
  const code = document.getElementById("code-input").value.trim().toLowerCase();
  const status = document.getElementById("code-status");
  const coupons = document.getElementById("coupon-list");

  if (code === "muffin") {
    coupons.style.filter = "none";
    coupons.style.pointerEvents = "auto";
    status.textContent = "Unlocked! Enjoy your surprises 💖";
    status.style.color = "#28a745";
  } else {
    status.textContent = "Oops! Wrong code 😢";
    status.style.color = "#e60000";
  }
}
