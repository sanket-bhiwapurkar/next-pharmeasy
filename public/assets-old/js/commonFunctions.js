// For Tree-like menu
export function showSubmenu(event) {
  const parentCategoryEl = event.currentTarget.parentElement.parentElement;

  const subMenuEl = parentCategoryEl.getElementsByTagName("ul")[0];
  if (subMenuEl !== undefined) {
    parentCategoryEl.children[0].classList.toggle("category-is-active");
    subMenuEl.classList.toggle("d-block");
  }
}

// For Carousel
export function productsCarousel() {
  return $(function () {
    $(".c-products-owl-carousel").owlCarousel({
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
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
        },
        1400: {
          items: 6,
        },
      },
    });
  });
}

export function reviewCarousel() {
  return $(document).ready(function () {
    $(".owl-carousel.c-customer-reviews-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
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
      },
    });
  });
}

// Inside get review Modal

export function getRatingInput() {
  const stars = document.querySelectorAll(".c-rating-input");
  for (let star of stars) {
    star.addEventListener("change", function () {
      const value = parseInt(star.value);
      for (let i = 1; i <= 5; i++) {
        const starCheckbox = document.getElementById(`rate${i}`);
        if (i <= value) {
          starCheckbox.checked = true;
          starCheckbox.nextElementSibling.childNodes[0].classList.add(
            "is-active"
          );
        } else {
          starCheckbox.checked = false;
          starCheckbox.nextElementSibling.childNodes[0].classList.remove(
            "is-active"
          );
        }
      }
    });
  }
}

// For T&C and Privacy policy

export function expandableList(expandableListId) {
  const expandableListHeads = document.querySelectorAll(
    `#${expandableListId} a`
  );
  let prevExpandableListItemId = "";
  for (let expandableListHead of expandableListHeads) {
    expandableListHead.addEventListener("click", function () {
      if (
        prevExpandableListItemId !== "" &&
        prevExpandableListItemId !== expandableListHead.parentElement.id
      ) {
        const prevExpandableListDivEl = document.querySelector(
          `#${prevExpandableListItemId} div`
        );
        prevExpandableListDivEl.classList.add("d-none");

        const prevExpandIcon = document.querySelector(
          `#${prevExpandableListItemId} .expand`
        );
        const prevCollapseIcon = document.querySelector(
          `#${prevExpandableListItemId} .collapse`
        );
        prevExpandIcon.classList.remove("d-none");
        prevCollapseIcon.classList.remove("d-block");
        prevCollapseIcon.classList.add("d-none");
      }

      const expandIcon = expandableListHead.querySelector(".expand");
      const collapseIcon = expandableListHead.querySelector(".collapse");

      expandIcon.classList.toggle("d-none");
      collapseIcon.classList.toggle("d-none");
      collapseIcon.classList.toggle("d-block");

      const expandableListDivEl = expandableListHead.nextElementSibling;
      expandableListDivEl.classList.toggle("d-none");

      prevExpandableListItemId = expandableListHead.parentElement.id;
    });
  }
}

// Auto Fucus Input

export function autoFocusInput(inputContainerId) {
  const cardNoInputs = document.querySelectorAll(
    `#${inputContainerId} > *[id]`
  );
  cardNoInputs.forEach((input, i) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && input.value === "" && i !== 0) {
        cardNoInputs[i - 1].focus();
      }
      if (
        input.value.length == input.getAttribute("maxlength") &&
        i < cardNoInputs.length - 1 &&
        event.keyCode > 47 &&
        event.keyCode < 58
      ) {
        cardNoInputs[i + 1].focus();
      }
    });
  });
}
