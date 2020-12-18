let additionItem = document.getElementsByClassName(
  "addition-section__list--item"
);
let additionIcon = document.getElementsByClassName(
  "addition-section__list--icon"
);
for (i = 0; i < additionIcon.length; i++) {
  additionIcon[i].addEventListener("click", openCard, false);
}

function openCard() {
  let cardClass = this.parentNode.className;
  for (i = 0; i < additionItem.length; i++) {
    additionItem[i].className = "addition-section__list--item close-card";
  }

  if (cardClass == "addition-section__list--item close-card") {
    this.parentNode.className = "addition-section__list--item open";
  }
}
