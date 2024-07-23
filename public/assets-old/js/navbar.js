// for suggestion search bar

function autocomplete(input, data) {
  var currentFocus;

  input.addEventListener("input", function () {
    const value = input.value;
    closeAllPreviousLists();
    if (!value) return false;
    currentFocus = -1;
    const suggestionSearchOptionsList = document.createElement("ul");

    suggestionSearchOptionsList.id = "suggestion-search-options";
    suggestionSearchOptionsList.setAttribute(
      "class",
      "c-list-none bg-light suggestion-search-options border"
    );
    input.parentNode.appendChild(suggestionSearchOptionsList);

    data.forEach(function (item) {
      if (item.toLowerCase().startsWith(value.toLowerCase())) {
        const suggestionSearchResult = document.createElement("li");
        suggestionSearchResult.setAttribute(
          "class",
          "p-1 suggestion-search-result"
        );
        suggestionSearchResult.innerHTML = `<b>${item.substr(
          0,
          value.length
        )}</b>${item.substr(value.length)}`;
        suggestionSearchResult.addEventListener("click", function () {
          input.value = item;
          closeAllPreviousLists();
        });
        suggestionSearchOptionsList.appendChild(suggestionSearchResult);
      }
    });
    if (!suggestionSearchOptionsList.childNodes.length) {
      const suggestionNoResult = document.createElement("li");
      suggestionNoResult.setAttribute("class", "p-1 suggestion-search-result");
      suggestionNoResult.innerHTML = "No Result Found";
      suggestionSearchOptionsList.appendChild(suggestionNoResult);
    }
  });

  // on Arraw key press
  input.addEventListener("keydown", function (event) {
    const suggestionSearchOptionsList = document.getElementById(
      "suggestion-search-options"
    );
    if (
      !suggestionSearchOptionsList ||
      !suggestionSearchOptionsList.childNodes.length
    )
      return;
    if (event.key === "ArrowDown") {
      currentFocus++;
      activateResultOption(suggestionSearchOptionsList);
    }
    if (event.key === "ArrowUp") {
      currentFocus--;
      activateResultOption(suggestionSearchOptionsList);
    }
    if (event.key === "Enter" || event.key === "Tab") {
      event.preventDefault();

      if (currentFocus !== -1)
        suggestionSearchOptionsList.childNodes[currentFocus].click();
    }
  });
  function closeAllPreviousLists() {
    var previousSuggestionList = document.querySelectorAll(
      ".suggestion-search-options"
    );
    previousSuggestionList.forEach(function (list) {
      list.parentNode.removeChild(list);
    });
  }
  function activateResultOption(list) {
    list.childNodes.forEach(function (item) {
      item.classList.remove("is-active");
    });

    if (currentFocus >= list.childNodes.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = list.childNodes.length - 1;
    list.childNodes[currentFocus].classList.add("is-active");
  }
  document.addEventListener("click", function (event) {
    closeAllPreviousLists();
  });
}

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central Arfrican Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauro",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre & Miquelon",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St Kitts & Nevis",
  "St Lucia",
  "St Vincent",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const searchbars = document.querySelectorAll(".nav-search");
searchbars.forEach((searchbar) => autocomplete(searchbar, countries));

// autocomplete(document.getElementById("nav-search"), countries);

// navbar forms
const navForms = document.querySelectorAll(".nav-sign-up-modal-1-form");
navForms.forEach((form) => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});

function autoFocusInput(inputContainerId) {
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
        i < cardNoInputs.length - 1
      ) {
        cardNoInputs[i + 1].focus();
      }
    });
  });
}

autoFocusInput("otp");

// for toggle left panel

function toggleLeftPanel(btnId, panelId) {
  const categoriesToggleBtnEl = document.getElementById(btnId);
  const homeCategoriesEl = document.getElementById(panelId);
  homeCategoriesEl.classList.toggle("d-block");
  categoriesToggleBtnEl.classList.toggle("border-primary");
  categoriesToggleBtnEl.classList.toggle("text-primary");

  var scrollLocked = document.body.style.overflowY;

  scrollLocked === ""
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "");
}

// Mobile search Toggle
const searchToggleBtnMobile = document.getElementById(
  "search-toggle-btn-mobile"
);
searchToggleBtnMobile.addEventListener("click", function () {
  const searchbar = document.querySelector(".nav-searchbar-wrapper");
  searchbar.classList.toggle("responsive");
  searchbar.classList.toggle("d-none");
  searchToggleBtnMobile.childNodes[0].classList.toggle("fa-magnifying-glass");
  searchToggleBtnMobile.childNodes[0].classList.toggle("fa-circle-xmark");
});

// Password input toggle btn

const passwordViewToggleBtns = document.querySelectorAll(
  ".password-view-toggle-btn"
);

passwordViewToggleBtns.forEach((passwordViewToggleBtn, i) => {
  passwordViewToggleBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const passwordInputEl = passwordViewToggleBtn.previousElementSibling;
    passwordInputEl.getAttribute("type") === "password"
      ? passwordInputEl.setAttribute("type", "text")
      : passwordInputEl.setAttribute("type", "password");

    passwordViewToggleBtn.childNodes[0].classList.toggle("fa-eye");
    passwordViewToggleBtn.childNodes[0].classList.toggle("fa-eye-slash");
  });
});
