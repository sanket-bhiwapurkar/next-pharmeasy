import { expandableList } from "./commonFunctions.js";
expandableList("expandable-list-seller-faq");
expandableList("expandable-list-buyer-faq");
expandableList("expandable-list-other-faq");

const tabBtns = document.querySelectorAll(".c-tab-btn");
for (let tabBtn of tabBtns) {
  tabBtn.addEventListener("click", function (event) {
    for (let tabBtn of tabBtns) {
      tabBtn.classList.remove("is-active");
    }
    event.currentTarget.classList.add("is-active");

    const tabs = document.querySelectorAll(".faq-tab-section");
    for (let tab of tabs) {
      tab.id === tabBtn.getAttribute("data-tab-id")
        ? tab.classList.remove("d-none")
        : tab.classList.add("d-none");
    }
  });
}
