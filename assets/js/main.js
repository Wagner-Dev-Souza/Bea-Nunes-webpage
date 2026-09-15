/* ==========================================================================
   Beatriz Nunes — Médica Veterinária
   Interações JS vanilla: smooth scroll, reveal, header, lightbox, menu mobile
   ========================================================================== */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* ---------- Header: sombra ao rolar ---------- */
    var header = document.getElementById("site-header");
    function onScroll() {
      if (window.scrollY > 8) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- Menu mobile (hamburger) ---------- */
    var hamburger = document.getElementById("hamburger");
    var nav = document.getElementById("site-nav");

    function closeMenu() {
      nav.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Abrir menu");
    }

    hamburger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
      hamburger.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    // Fecha o menu ao clicar em um link de navegação (mobile)
    nav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Fecha o menu ao redimensionar para desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) closeMenu();
    });

    /* ---------- Smooth scroll (fallback p/ navegadores sem CSS smooth) ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var targetId = this.getAttribute("href");
        if (targetId === "#" || targetId.length < 2) return;
        var target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        var headerOffset = header.offsetHeight;
        var top = target.getBoundingClientRect().top + window.scrollY - headerOffset + 2;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });

    /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
    var revealEls = document.querySelectorAll(
      ".hero-content, .hero-media, .about-media, .about-content, .diff-card, .service-card, .section-head, .gallery-item, .contact-inner"
    );
    revealEls.forEach(function (el) {
      el.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: mostra tudo imediatamente
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }

    /* ---------- Lightbox da galeria ---------- */
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    var closeBtn = document.getElementById("lightbox-close");
    var prevBtn = document.getElementById("lightbox-prev");
    var nextBtn = document.getElementById("lightbox-next");
    var galleryBtns = Array.prototype.slice.call(
      document.querySelectorAll(".gallery-btn")
    );

    // Coleta src + alt de cada foto (na ordem do grid)
    var images = galleryBtns.map(function (btn) {
      var img = btn.querySelector("img");
      return { src: img.getAttribute("src"), alt: img.getAttribute("alt") };
    });

    var currentIndex = 0;
    var lastFocused = null;

    function showImage(index) {
      currentIndex = (index + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
      lightboxImg.alt = images[currentIndex].alt;
    }

    function openLightbox(index) {
      lastFocused = document.activeElement;
      showImage(index);
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    }

    galleryBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        openLightbox(parseInt(btn.getAttribute("data-index"), 10));
      });
    });

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", function () {
      showImage(currentIndex - 1);
    });
    nextBtn.addEventListener("click", function () {
      showImage(currentIndex + 1);
    });

    // Fecha ao clicar no fundo escuro
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    // Navegação por teclado
    document.addEventListener("keydown", function (e) {
      if (lightbox.hidden) return;
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        showImage(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        showImage(currentIndex + 1);
      }
    });
  });
})();
