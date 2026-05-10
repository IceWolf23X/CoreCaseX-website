const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const root = document.documentElement;
const themeMeta = document.querySelector('meta[name="theme-color"]');
const themeKey = "corecasex-theme";

const getStoredTheme = () => {
  try {
    return localStorage.getItem(themeKey);
  } catch (_) {
    return null;
  }
};

const setStoredTheme = (theme) => {
  try {
    localStorage.setItem(themeKey, theme);
  } catch (_) {
    // Ignore storage failures so the toggle still works for the current page.
  }
};

const normalizeTheme = (theme) => (theme === "light" ? "light" : "dark");

const applyTheme = (theme) => {
  const nextTheme = normalizeTheme(theme);

  if (nextTheme === "light") {
    root.dataset.theme = "light";
  } else {
    root.removeAttribute("data-theme");
  }

  if (themeMeta) {
    themeMeta.setAttribute("content", nextTheme === "light" ? "#fff7ef" : "#0b0808");
  }

  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.setAttribute("aria-pressed", String(nextTheme === "light"));
    button.setAttribute(
      "aria-label",
      nextTheme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
    button.title = nextTheme === "light" ? "Switch to dark theme" : "Switch to light theme";

    const label = button.querySelector(".theme-toggle-text");
    if (label) {
      label.textContent = nextTheme === "light" ? "Dark" : "Light";
    }
  });
};

applyTheme(root.dataset.theme === "light" ? "light" : getStoredTheme());

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (navLinks && !navLinks.querySelector(".theme-toggle")) {
  const themeToggle = document.createElement("button");
  themeToggle.className = "theme-toggle";
  themeToggle.type = "button";
  themeToggle.innerHTML =
    '<span class="theme-toggle-icon" aria-hidden="true"></span><span class="theme-toggle-text"></span>';

  themeToggle.addEventListener("click", () => {
    const currentTheme = root.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setStoredTheme(nextTheme);
    applyTheme(nextTheme);
  });

  navLinks.appendChild(themeToggle);
  applyTheme(root.dataset.theme === "light" ? "light" : getStoredTheme());
}

const moreToggle = document.querySelector(".more-toggle");
const secondaryFeatures = document.querySelector("#secondary-features");

if (moreToggle && secondaryFeatures) {
  moreToggle.addEventListener("click", () => {
    const willOpen = secondaryFeatures.hasAttribute("hidden");
    secondaryFeatures.toggleAttribute("hidden", !willOpen);
    secondaryFeatures.classList.toggle("is-open", willOpen);
    moreToggle.setAttribute("aria-expanded", String(willOpen));
    moreToggle.textContent = willOpen ? "Hide extra features" : "See more features";
  });
}

document.querySelectorAll("[data-animated-details] details").forEach((details) => {
  const summary = details.querySelector("summary");

  if (!summary) {
    return;
  }

  let animation = null;

  const setHeight = (height) => {
    details.style.height = `${height}px`;
  };

  const finish = (open) => {
    details.open = open;
    details.classList.remove("is-animating");
    details.style.height = "";
    details.style.overflow = "";
    animation = null;
  };

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (animation) {
      animation.cancel();
    }

    const startHeight = details.offsetHeight;
    details.classList.add("is-animating");
    details.style.overflow = "hidden";

    if (details.open) {
      const endHeight = summary.offsetHeight;
      animation = details.animate(
        { height: [`${startHeight}px`, `${endHeight}px`] },
        { duration: 240, easing: "cubic-bezier(.2, .8, .2, 1)" }
      );
      setHeight(endHeight);
      animation.onfinish = () => finish(false);
      animation.oncancel = () => finish(false);
      return;
    }

    details.open = true;
    const endHeight = details.scrollHeight;
    setHeight(startHeight);
    animation = details.animate(
      { height: [`${startHeight}px`, `${endHeight}px`] },
      { duration: 260, easing: "cubic-bezier(.2, .8, .2, 1)" }
    );
    setHeight(endHeight);
    animation.onfinish = () => finish(true);
    animation.oncancel = () => finish(true);
  });
});
