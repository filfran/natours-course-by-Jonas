const navCheckbox = document.querySelector(".navigation__checkbox");
const navList = document.querySelector(".navigation__list");
const sectionAbout = document.querySelector(".section-about");
const sectionFeatures = document.querySelector(".section-features");
const sectionTours = document.querySelector(".section-tours");
const sectionStories = document.querySelector(".section-stories");
const sectionBook = document.querySelector(".section-book");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

navList.addEventListener("click", function (e) {
  e.preventDefault();
  const el = e.target.closest(".navigation__link");
  if (!el) return;

  if (el.classList.contains("navigation__link--about"))
    sectionScroll(sectionAbout);
  if (el.classList.contains("navigation__link--features"))
    sectionScroll(sectionFeatures);
  if (el.classList.contains("navigation__link--tours"))
    sectionScroll(sectionTours);
  if (el.classList.contains("navigation__link--stories"))
    sectionScroll(sectionStories);
  if (el.classList.contains("navigation__link--book"))
    sectionScroll(sectionBook);
});

const sectionScroll = function (section) {
  section.scrollIntoView({ behavior: "smooth" });
  navCheckbox.click();
};

popup.addEventListener("click", function (e) {
  const el = e.target.closest(".popup__content");
  if (!el) popupClose.click();
});
