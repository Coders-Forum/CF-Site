"use strict";

const sliders = document.querySelectorAll(".mini-slider-container");

sliders.forEach(slider => {
  const nextBtn = slider.querySelector(".mini-next");
  const prevBtn = slider.querySelector(".mini-prev");
  const slide = slider.querySelector(".mini-slide");

  nextBtn.addEventListener("click", function () {
    let items = slide.querySelectorAll(".mini-item");
    slide.appendChild(items[0]);
  });

  prevBtn.addEventListener("click", function () {
    let items = slide.querySelectorAll(".mini-item");
    slide.prepend(items[items.length - 1]);
  });

  setInterval(() => {
    let items = slide.querySelectorAll(".mini-item");
    slide.appendChild(items[0]);
  }, 5000);
});

(function () {
  const items = document.querySelectorAll(".timeline-item");
  if (!items.length) return;

  function updateTimeline() {
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const prog = item.querySelector(".timeline-progress");
      const dot = item.querySelector(".timeline-dot");
      const visiblePx = Math.max(0, Math.min(rect.height, window.innerHeight - Math.max(0, rect.top)));

      if (prog) prog.style.height = `${visiblePx}px`;
      if (dot) {
        const clamped = Math.max(0, Math.min(rect.height, visiblePx));
        const dotOffset = clamped - (dot.offsetHeight / 2);
        dot.style.top = `${Math.max(0, dotOffset)}px`;
      }
    });
  }

  let raf = null;
  function onScroll() {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(updateTimeline);
  }

  updateTimeline();
  document.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
})();

window.addEventListener("scroll", () => {
  const pointer = document.querySelector(".timeline-pointer");
  if (!pointer) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const progress = scrollTop / docHeight;
  const slowProgress = progress * 95;
  pointer.style.top = `${slowProgress}vh`;
});

document.querySelectorAll(".timeline-item img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("modalImage").src = img.src;
    let modal = new bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
  });
});

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");

  // Add soft glow shimmer overlay
  const overlay = document.createElement("div");
  overlay.classList.add("page-loader-overlay");
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), 1000);
});

document.querySelectorAll("a").forEach((link) => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;

      e.preventDefault();
      document.body.classList.add("page-transition");
      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  }
});
