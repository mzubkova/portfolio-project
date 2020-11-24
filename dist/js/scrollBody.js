const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".modal--close");

function existVerticalScroll() {
  return document.body.offsetHeight > window.innerHeight;
}

function getBodyScrollTop() {
  return (
    self.pageYOffset ||
    (document.documentElement && document.documentElement.ScrollTop) ||
    (document.body && document.body.scrollTop)
  );
}

openModalButton.addEventListener("click", (e) => {
  e.preventDefault();

  body.dataset.scrollY = getBodyScrollTop();
  modal.classList.add("modal--open");
});

closeModalButton.addEventListener("click", (e) => {
  e.preventDefault();

  modal.classList.remove("modal--open");

  if (existVerticalScroll()) {
    body.classList.remove("body-lock");
    window.scrollTo(0, body.dataset.scrollY);
  }
});
