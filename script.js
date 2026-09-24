document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mobileNav.hidden = true;
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
  } else {
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fechar menu");
    mobileNav.hidden = false;
    document.body.classList.add("menu-open");
  }
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header") && menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 950 && menuToggle.getAttribute("aria-expanded") === "true") closeMenu();
});

document.querySelectorAll("[data-medicine-dialog]").forEach((trigger) => {
  const dialog = document.getElementById(trigger.dataset.medicineDialog);
  trigger.addEventListener("click", () => {
    dialog.returnFocusTo = trigger;
    dialog.showModal();
    document.body.classList.add("dialog-open");
    dialog.querySelector("[data-close-dialog]").focus();
  });
});

document.querySelectorAll(".medicine-dialog").forEach((dialog) => {
  dialog.querySelector("[data-close-dialog]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    dialog.returnFocusTo?.focus();
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reducedMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".desktop-nav a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-25% 0px -60% 0px" });
  document.querySelectorAll("#instituto, #vivencias, #jeane, #duvidas, #contato").forEach((section) => sectionObserver.observe(section));
}
