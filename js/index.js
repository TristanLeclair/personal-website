const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// set theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
  });
});

// index.js

document.addEventListener("DOMContentLoaded", function () {
  const isGitHubPages =
    window.location.hostname !== "127.0.0.1" &&
    window.location.hostname !== "localhost";
  const baseTag = document.getElementById("base-tag");
  if (isGitHubPages) {
    // baseTag.setAttribute("href", "/personal-website/");
  }

  const basePath = isGitHubPages ? "/personal-website/" : "/";

  fetch(`${basePath}translations/translations.json`)
    .then((response) => response.json())
    .then((resources) => {
      i18next.use(i18nextBrowserLanguageDetector).init(
        {
          resources,
          fallbackLng: "en",
          debug: true,
          detection: {
            order: [
              "querystring",
              "cookie",
              "localStorage",
              "navigator",
              "htmlTag",
              "path",
              "subdomain",
            ],
            caches: ["localStorage", "cookie"],
          },
        },
        function (err, t) {
          updateContent();
        },
      );

      function updateContent() {
        document.querySelectorAll("[data-i18n]").forEach(function (element) {
          element.innerHTML = i18next.t(element.getAttribute("data-i18n"));
        });
      }

      document
        .getElementById("language-switch")
        .addEventListener("change", function () {
          const language = this.checked ? "fr" : "en";
          i18next.changeLanguage(language, updateContent);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Toggle display
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
