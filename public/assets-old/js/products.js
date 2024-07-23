import { showSubmenu, productsCarousel } from "./commonFunctions.js";

const filters = document.querySelectorAll("#filter-panel > li > a");

for (let filter of filters) {
  filter.addEventListener("click", function () {
    const list = filter.parentElement.getElementsByTagName("ul")[0];
    if (list) list.classList.toggle("d-block");
  });
}

const filterDropDownBtnEl = document.querySelectorAll("#filter-panel button");
for (let btn of filterDropDownBtnEl) {
  btn.addEventListener("click", function (event) {
    showSubmenu(event);
  });
}

productsCarousel();

$(function () {
  $(".products-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });
});
