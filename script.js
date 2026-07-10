const siteData = {
  // Edit these sections to personalize the website:
  // roles: modal photos and paragraphs
  // gallery: polaroid captions
  // letters: envelope letters and signatures
  // qualities/jarMemories: visible family text
  roles: [
    {
      title: "A Father",
      image: "assets/images/father.jpg",
      alt: "Dadu sitting with family on the sofa",
      text: "You have shown that love is often quiet, steady, and present every single day. In the way you guide, protect, forgive, and stand beside everyone, you have given this family a kind of strength that cannot be measured."
    },
    {
      title: "A Grandfather",
      image: "assets/images/grandfather.jpg",
      alt: "Dadu sharing a happy hug with his granddaughter",
      text: "To your family, you are comfort, laughter, stories, and home all at once. You make ordinary afternoons feel special, and somehow your smile can turn even a simple photograph into a memory we want to keep forever."
    },
    {
      title: "A Friend",
      image: "assets/images/friend.jpg",
      alt: "Dadu smiling beside his granddaughter and Oreo",
      text: "You listen with patience, laugh with your whole heart, and make people feel understood. That is why being around you never feels formal. It feels easy, warm, and full of belonging."
    },
    {
      title: "A Teacher",
      image: "assets/images/teacher.jpg",
      alt: "Dadu at an evening celebration with his granddaughter",
      text: "You have taught us without making lessons feel like lessons. Through your choices, your values, and your way of treating people, you have shown us what dignity, kindness, and resilience look like."
    },
    {
      title: "The Heart of Our Family",
      image: "assets/images/family-heart.jpg",
      alt: "Dadu surrounded by family",
      text: "Every family has a centre, someone everyone turns toward. For us, that person is you. Your presence makes gatherings complete and your love holds so many of our best moments together."
    }
  ],
  gallery: [
    "One of our favourite days.",
    "The best family lunches.",
    "Still one of my favourite pictures.",
    "A moment we will always remember.",
    "You make every celebration better.",
    "The smile behind so many of ours.",
    "Proof that home can be a person.",
    "A laugh we can almost hear."
  ],
  letters: [
    {
      from: "From Your Family",
      signature: "With endless love, your family",
      text: "Dear Dadu, when we think of you, we think of warmth before anything else. You have a way of making people feel welcome without making a big show of it. You ask, you listen, you remember, and you care in ways that quietly become part of our everyday lives. So much of what feels steady in this family comes from you. Today is just one day, but our gratitude for you lives in all the days around it."
    },
    {
      from: "From Your Children",
      signature: "With love, your children",
      text: "Dear Papa, thank you for being the kind of father whose love has always been felt in actions. In your advice, your protection, your sacrifices, and even your silences, we have found guidance. You have given us values that continue to shape our homes and our decisions. We may not say it every day, but we carry your strength with us. This letter is a small way of saying what our hearts have known for years."
    },
    {
      from: "From Oreo",
      signature: "Oreo",
      text: "Dear Dadu, I may not write letters very often, but I know exactly where the warmest lap and the kindest hands are. Thank you for holding me like family, for smiling at me, and for letting me quietly become part of everyone’s memories. I hope your day has extra love, extra laughter, and maybe one soft little nudge from me too."
    },
    {
      from: "From Anika",
      signature: "With all my love, Anika",
      text: "Dear Dadu, this card is my little attempt to hold some of our memories in one place. Every photograph here reminds me of your smile, your hugs, and the way you make family feel complete. I hope when you look through it, you feel how deeply loved you are. Thank you for being my Dadu, for making ordinary days special, and for giving me memories I know I will keep close forever."
    },
    {
      from: "From All of Us",
      signature: "All of us",
      text: "Dear Dadu, if love could be collected, this card would still not be big enough. There would be too many memories, too many laughs, too many small things that mattered. You have given this family more than we can put into perfect words. You have given us belonging. You have given us example. You have given us home. May this small gift remind you that you are treasured beyond measure."
    }
  ],
  qualities: [
    ["The way you make everyone feel welcome", "No one feels like a guest around you for long."],
    ["Your stories", "They turn ordinary evenings into family history."],
    ["Your sense of humour", "You make laughter feel effortless."],
    ["Your patience", "You give people the time they need."],
    ["Your advice", "It stays with us because it comes from love."],
    ["Your strength", "Quiet, steady, and always there."],
    ["The way you care for the family", "You notice what people need before they ask."],
    ["Your morning phone calls", "They make the day begin with connection."],
    ["The way you remember the little things", "Small details become big love in your hands."],
    ["Your belief in us", "You make us braver than we felt before."],
    ["Your laughter", "It changes the whole room."]
  ],
  jarMemories: [
    "The way you smile when the whole family is together.",
    "The sound of your laughter during a simple conversation.",
    "The comfort of sitting beside you at home.",
    "A family photo that became everyone’s favourite.",
    "The advice that made things feel less difficult.",
    "The way you ask about everyone with genuine care.",
    "A day that felt ordinary then and precious now.",
    "The way you make celebrations feel complete.",
    "The stories we ask you to repeat again and again.",
    "The calm feeling of knowing you are there.",
    "A shared joke only the family understands.",
    "The warmth in your voice during phone calls.",
    "The little things you remember without being reminded.",
    "The pride in your smile when we do something well.",
    "A meal, a room, a laugh, and everyone together.",
    "The way your presence makes home feel like home.",
    "A candid photo that says more than a posed one ever could.",
    "The lessons we learned just by watching you live.",
    "The way you turn simple moments into memories.",
    "The love you give without ever asking for anything back."
  ]
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const loader = $("#loader");
const giftScreen = $("#giftScreen");
const mainSite = $("#mainSite");
const backgroundMusic = $("#backgroundMusic");
const musicToggle = $("#musicToggle");
const nav = $("#navbar");
const navLinks = $("#navLinks");
const menuToggle = $("#menuToggle");
let musicEnabled = true;
let currentLightboxIndex = 0;
let currentAudio = null;
let lastMemoryIndex = -1;

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 500);
});

function buildRoleCards() {
  $("#roleCards").innerHTML = siteData.roles.map((role, index) => `
    <button class="role-card reveal" data-role="${index}">
      <h3>${role.title}</h3>
      <span>Open this memory</span>
    </button>
  `).join("");
}

function buildGallery() {
  $("#galleryGrid").innerHTML = siteData.gallery.map((caption, index) => {
    const rotate = [-3, 2, -1, 3, -2, 1, 2.5, -2.5, 1.5, -1.5, 3.5, -3.5][index];
    return `
      <button class="polaroid reveal" style="transform: rotate(${rotate}deg)" data-photo="${index}">
        <img loading="lazy" src="assets/images/memory-${index + 1}.jpg" alt="${caption}" />
        <span class="caption">${caption}</span>
      </button>
    `;
  }).join("");
}

function buildLetters() {
  $("#letterGrid").innerHTML = siteData.letters.map((letter, index) => `
    <button class="envelope reveal" data-letter="${index}">
      <span>${letter.from}</span>
    </button>
  `).join("");
}

function buildQualities() {
  $("#qualitiesGrid").innerHTML = siteData.qualities.map(([title, message]) => `
    <button class="quality-card reveal" type="button">
      <strong>${title}</strong>
      <span>${message}</span>
    </button>
  `).join("");
}

function buildFunnyGallery() {
  $("#funnyGrid").innerHTML = Array.from({ length: 6 }, (_, index) => `
    <img loading="lazy" src="assets/images/funny-${index + 1}.jpg" alt="Candid family memory ${index + 1}" />
  `).join("");
}

function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el) => observer.observe(el));
}

function openGift() {
  giftScreen.classList.add("opened");
  mainSite.classList.add("visible");
  mainSite.focus({ preventScroll: true });
  if (musicEnabled) {
    backgroundMusic.volume = 0.28;
    backgroundMusic.play().catch(() => {
      musicToggle.textContent = "Music Off";
      musicToggle.setAttribute("aria-pressed", "true");
    });
  }
}

function toggleMusic() {
  musicEnabled = !musicEnabled;
  if (musicEnabled) {
    backgroundMusic.volume = 0.28;
    backgroundMusic.play().catch(() => {});
    musicToggle.textContent = "Music On";
    musicToggle.setAttribute("aria-pressed", "false");
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = "Music Off";
    musicToggle.setAttribute("aria-pressed", "true");
  }
}

function updateScrollEffects() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  $("#scrollProgress").style.width = `${docHeight ? (scrollTop / docHeight) * 100 : 0}%`;
  nav.classList.toggle("scrolled", scrollTop > 24);
  $("#backToTop").classList.toggle("show", scrollTop > 600);
  const heroPhoto = $(".parallax-photo");
  if (heroPhoto) heroPhoto.style.transform = `translateY(${scrollTop * 0.12}px)`;
}

function openRoleModal(index) {
  const role = siteData.roles[index];
  $("#roleModalImage").src = role.image;
  $("#roleModalImage").alt = role.alt;
  $("#roleModalTitle").textContent = role.title;
  $("#roleModalText").textContent = role.text;
  showModal($("#roleModal"));
}

function openLetterModal(index) {
  const letter = siteData.letters[index];
  $("#letterModalTitle").textContent = letter.from;
  $("#letterModalText").textContent = letter.text;
  $("#letterModalSignature").textContent = letter.signature;
  showModal($("#letterModal"));
}

function showModal(modal) {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  modal.querySelector("button").focus();
}

function closeModals() {
  $$(".modal.show, .lightbox.show").forEach((modal) => {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  });
  document.body.classList.remove("locked");
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightbox();
  const lightbox = $("#lightbox");
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  $("#lightboxClose").focus();
}

function updateLightbox() {
  const caption = siteData.gallery[currentLightboxIndex];
  $("#lightboxImage").src = `assets/images/memory-${currentLightboxIndex + 1}.jpg`;
  $("#lightboxImage").alt = caption;
  $("#lightboxCaption").textContent = caption;
}

function moveLightbox(direction) {
  currentLightboxIndex = (currentLightboxIndex + direction + siteData.gallery.length) % siteData.gallery.length;
  updateLightbox();
}

function playVoice(button) {
  const card = button.closest(".message-card");
  const progress = card.querySelector(".progress span");
  const src = button.dataset.audio;

  if (currentAudio && currentAudio.button !== button) {
    currentAudio.audio.pause();
    currentAudio.audio.currentTime = 0;
    currentAudio.button.textContent = "▶";
    currentAudio.progress.style.width = "0%";
  }

  if (currentAudio && currentAudio.button === button && !currentAudio.audio.paused) {
    currentAudio.audio.pause();
    button.textContent = "▶";
    return;
  }

  const audio = currentAudio && currentAudio.button === button ? currentAudio.audio : new Audio(src);
  currentAudio = { audio, button, progress };
  audio.play().then(() => {
    button.textContent = "❚❚";
  }).catch(() => {
    button.textContent = "▶";
    progress.style.width = "100%";
    setTimeout(() => progress.style.width = "0%", 700);
  });
  audio.ontimeupdate = () => {
    progress.style.width = `${audio.duration ? (audio.currentTime / audio.duration) * 100 : 0}%`;
  };
  audio.onended = () => {
    button.textContent = "▶";
    progress.style.width = "0%";
  };
}

function pickMemory() {
  let index = Math.floor(Math.random() * siteData.jarMemories.length);
  if (index === lastMemoryIndex) index = (index + 1) % siteData.jarMemories.length;
  lastMemoryIndex = index;
  const note = $("#memoryNote");
  note.classList.remove("pull");
  void note.offsetWidth;
  note.textContent = siteData.jarMemories[index];
  note.classList.add("pull");
}

function releaseConfetti() {
  const layer = $("#confettiLayer");
  layer.innerHTML = "";
  for (let i = 0; i < 70; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = [ "#C5A45D", "#FFF9F0", "#793D45", "#E8D8C3" ][i % 4];
    piece.style.animationDelay = `${Math.random() * 0.35}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    layer.appendChild(piece);
  }
  setTimeout(() => layer.innerHTML = "", 2500);
}

function revealSurprise() {
  $("#surpriseWarning").textContent = "A brief warning: this may cause smiling.";
  $("#surpriseBtn").textContent = "You clicked it anyway";
  $("#hiddenGallery").hidden = false;
  releaseConfetti();
}

function showFinalSequence() {
  const sequence = $("#finalSequence");
  sequence.classList.add("show");
  sequence.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function replayWebsite() {
  $("#finalSequence").classList.remove("show");
  $("#finalSequence").setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
  window.scrollTo({ top: 0, behavior: "smooth" });
  giftScreen.classList.remove("opened");
  mainSite.classList.remove("visible");
}

function bindEvents() {
  $("#openGift").addEventListener("click", openGift);
  musicToggle.addEventListener("click", toggleMusic);
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) navLinks.classList.remove("open");
  });
  window.addEventListener("scroll", updateScrollEffects, { passive: true });
  $("#backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  $("#roleCards").addEventListener("click", (event) => {
    const card = event.target.closest("[data-role]");
    if (card) openRoleModal(Number(card.dataset.role));
  });
  $("#letterGrid").addEventListener("click", (event) => {
    const envelope = event.target.closest("[data-letter]");
    if (envelope) openLetterModal(Number(envelope.dataset.letter));
  });
  $("#galleryGrid").addEventListener("click", (event) => {
    const photo = event.target.closest("[data-photo]");
    if (photo) openLightbox(Number(photo.dataset.photo));
  });
  $("#qualitiesGrid").addEventListener("click", (event) => {
    const card = event.target.closest(".quality-card");
    if (card) card.classList.toggle("show");
  });
  $("[data-close-modal]").addEventListener("click", closeModals);
  $$("[data-close-modal]")[1].addEventListener("click", closeModals);
  $$(".modal").forEach((modal) => modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModals();
  }));
  $("#lightboxClose").addEventListener("click", closeModals);
  $("#lightboxPrev").addEventListener("click", () => moveLightbox(-1));
  $("#lightboxNext").addEventListener("click", () => moveLightbox(1));
  $("#memoryJar").addEventListener("click", pickMemory);
  $("#pickMemory").addEventListener("click", pickMemory);
  $("#pickAnother").addEventListener("click", pickMemory);
  $("#surpriseBtn").addEventListener("click", revealSurprise);
  $("#lastThing").addEventListener("click", showFinalSequence);
  $("#replaySite").addEventListener("click", replayWebsite);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModals();
    if ($("#lightbox").classList.contains("show") && event.key === "ArrowLeft") moveLightbox(-1);
    if ($("#lightbox").classList.contains("show") && event.key === "ArrowRight") moveLightbox(1);
  });
}

function init() {
  buildRoleCards();
  buildGallery();
  buildLetters();
  buildQualities();
  buildFunnyGallery();
  bindEvents();
  initRevealAnimations();
  updateScrollEffects();
}

init();
