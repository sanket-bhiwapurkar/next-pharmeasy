const autoFocusInput = function (inputContainerId) {
  const cardNoInputs = document.querySelectorAll(
    `#${inputContainerId} > *[id]`
  );
  cardNoInputs.forEach((input, i) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && input.value === "" && i !== 0) {
        cardNoInputs[i - 1].focus();
      }
      if (event.key === "Backspace") {
        return;
      }
      if (
        input.value.length == input.getAttribute("maxlength") &&
        i < cardNoInputs.length - 1
      ) {
        cardNoInputs[i + 1].focus();
      }
      const digitPeriodRegExp = new RegExp("[0-9]");
      if (!digitPeriodRegExp.test(event.key)) {
        event.preventDefault();
      }
    });

    input.addEventListener("focus", function () {
      const len = input.value.length;
      input.setSelectionRange(len, len);
    });
  });
};
autoFocusInput("card-no");
autoFocusInput("card-expiry");

const cardExpiryMonthInput = document.getElementById("card-expiry-month");
cardExpiryMonthInput.addEventListener("blur", function () {
  if (cardExpiryMonthInput.value.length === 1)
    cardExpiryMonthInput.value = "0" + cardExpiryMonthInput.value;
});

const paymentWithPaypalCard = document.getElementById("payment-with-card");
const paymentWithPaypalRadio = document.getElementById("payment-with-paypal");
const paypalBtn = document.getElementById("paypal-btn");

if (paymentWithPaypalCard.checked) {
  paypalBtn.classList.add("is-disabled");
}

paymentWithPaypalCard.addEventListener("change", function () {
  paypalBtn.classList.add("is-disabled");
});

paymentWithPaypalRadio.addEventListener("change", function () {
  paypalBtn.classList.remove("is-disabled");
});

const first4CardDigitInput = document.getElementById("first4");
first4CardDigitInput.addEventListener("change", function () {
  const userCardIconEl = document.getElementById("user-card-icon");
  const digits = first4CardDigitInput.value;
  if (
    digits.startsWith("6011") ||
    digits.startsWith("6446") ||
    (digits.startsWith("65") && !digits.startsWith("6521"))
  ) {
    userCardIconEl.classList.remove("d-none");
    userCardIconEl.setAttribute(
      "src",
      "./assets/img/icons/charge_credit card_discover_payment_icon.png"
    );
  } else if (digits.startsWith("60") || digits.startsWith("6521")) {
    userCardIconEl.classList.remove("d-none");
    userCardIconEl.setAttribute(
      "src",
      "./assets/img/icons/bank_card_payment_rupay_icon.png"
    );
  } else if (digits.startsWith("5")) {
    userCardIconEl.classList.remove("d-none");
    userCardIconEl.setAttribute(
      "src",
      "./assets/img/icons/mastercard_curved_icon.png"
    );
  } else if (digits.startsWith("4")) {
    userCardIconEl.classList.remove("d-none");
    userCardIconEl.setAttribute(
      "src",
      "./assets/img/icons/visa_straight_icon.png"
    );
  } else if (digits.startsWith("3")) {
    userCardIconEl.classList.remove("d-none");
    userCardIconEl.setAttribute(
      "src",
      "./assets/img/icons/american_express_straight_icon.png"
    );
  } else {
    userCardIconEl.classList.remove("d-none");
    userCardIconEl.setAttribute("src", "./assets/img/icons/other_cards.png");
  }
});
