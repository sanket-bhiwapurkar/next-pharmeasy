import { productsCarousel } from "./commonFunctions.js";
import { reviewCarousel, getRatingInput } from "./commonFunctions.js";
reviewCarousel();
getRatingInput();

productsCarousel();

const tabBtns = document.querySelectorAll(".c-tab-btn");
for (let tabBtn of tabBtns) {
  tabBtn.addEventListener("click", function (event) {
    for (let tabBtn of tabBtns) {
      tabBtn.classList.remove("is-active");
    }
    event.currentTarget.classList.add("is-active");

    const tabs = document.querySelectorAll(".product-details-tab-section");
    for (let tab of tabs) {
      tab.id === tabBtn.getAttribute("data-tab-id")
        ? tab.classList.remove("d-none")
        : tab.classList.add("d-none");
    }
  });
}

const productDetailsDrawer = function () {
  const drawerBtns = document.querySelectorAll(
    ".product-details-drawer button"
  );

  for (let drawerBtn of drawerBtns) {
    drawerBtn.style.borderColor = "transparent";
    drawerBtns[0].style.borderColor = "#007cc2";
    drawerBtn.addEventListener("click", function () {
      const drawerImageSrc = drawerBtn.querySelector("img").getAttribute("src");

      for (let drawerBtn of drawerBtns) {
        drawerBtn.style.borderColor = "transparent";
      }

      drawerBtn.style.borderColor = "#007cc2";
      const imageContainer = document.getElementById("product-details-image");
      imageContainer.setAttribute("src", drawerImageSrc);
    });
  }
};
productDetailsDrawer();
