import { showSubmenu, productsCarousel } from "./commonFunctions.js";

function homepageStartPopup() {
  const postRequirementTrigger = document.querySelector(
    'button[data-bs-target="#nav-requirement-modal"]'
  );
  postRequirementTrigger.click();
}

// const homepageStartPopupTimerId = setTimeout(homepageStartPopup, 4000);
function homepageStartPopupFlushTimer() {
  const postRequirementClose = document.querySelector(
    '#nav-requirement-modal button[aria-label="Close"]'
  );
  postRequirementClose.addEventListener("click", function () {
    clearTimeout(homepageStartPopupTimerId);
  });
  const postRequirementSubmit = document.querySelector(
    "#nav-requirement-modal .nav-sign-in-modal-form"
  );
  postRequirementSubmit.addEventListener("submit", function (e) {
    e.preventDefault();
    clearTimeout(homepageStartPopupTimerId);
  });
}
homepageStartPopupFlushTimer();

const categoryDropDownBtnEl = document.querySelectorAll("#categories button");
for (let btn of categoryDropDownBtnEl) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    showSubmenu(event);
  });
}

productsCarousel();

$(function () {
  $(".owl-carousel.testimonials").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
});

$(function () {
  $(".owl-carousel.top-seller-owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
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
        items: 3,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });
});

$(function () {
  const categoryCardsHolder = $(".category-cards-holder");
  const scrollAmount =
    categoryCardsHolder.outerWidth() - (categoryCardsHolder.outerWidth() % 174);
  const categoryCardsHolderPrev = $(".category-cards-wrapper .owl-prev");
  categoryCardsHolderPrev.click(function () {
    categoryCardsHolder.animate({ scrollLeft: "-=" + scrollAmount }, 500);
  });
  const categoryCardsHolderNext = $(".category-cards-wrapper .owl-next");
  categoryCardsHolderNext.click(function () {
    categoryCardsHolder.animate({ scrollLeft: "+=" + scrollAmount }, 500);
  });

  categoryCardsHolder.scroll(function () {
    if (categoryCardsHolder.scrollLeft() === 0) {
      categoryCardsHolderPrev.attr("style", "display: none !important");
    } else if (
      categoryCardsHolder.scrollLeft() + categoryCardsHolder.outerWidth() + 3 >=
      categoryCardsHolder[0].scrollWidth
    ) {
      categoryCardsHolderNext.attr("style", "display: none !important");
    } else {
      categoryCardsHolderPrev.show();
      categoryCardsHolderNext.show();
    }
  });
});
