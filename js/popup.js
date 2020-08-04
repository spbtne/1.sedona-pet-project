var searchButton = document.querySelector(".search-button");
var searchForm = document.querySelector(".search-form");
var findButton = document.querySelector(".find-button");
var searchFormWrapper = document.querySelector(".form-wrapper");

/*переменные для подмены полей*/

var dateInFill = document.querySelector("#arrival-date");
var dateInButton = document.querySelector(".calendar-button-in");
var dateInCalendar = document.querySelector(".dateIn-hidden");

var dateOutFill = document.querySelector("#leave-date");
var dateOutButton = document.querySelector(".calendar-button-out");
var dateOutCalendar = document.querySelector(".dateOut-hidden");

// переменные для счетчика гостей
var adultsCount = document.querySelector("[name=adults-count]");
var childrenCount = document.querySelector("[name=children-count]");
var adultMinus = document.querySelector(".adult-minus");
var adultPlus = document.querySelector(".adult-plus");
var childMinus = document.querySelector(".child-minus");
var childPlus = document.querySelector(".child-plus");

// счетчик кликов для закрытия окна поиска
var clickCount = 0;

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adultsCount");
} catch (err) {
  isStorageSupport = false;
}

// анимация формы поиска

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchFormWrapper.classList.remove("visually-hidden");
  searchForm.classList.remove("form-hide");
  searchForm.classList.remove("visually-hidden");
  searchForm.classList.remove("shake");
  searchForm.classList.add("form-show");
  clickCount++;
  if (clickCount % 2 == 0) {
    searchForm.classList.remove("form-show");
    searchForm.classList.add("form-hide");
    setTimeout(() => searchFormWrapper.classList.add("visually-hidden"), 1000);
  }
});

// searchForm.addEventListener("submit", function (evt) {
//   if (!dateInFill.value || !dateOutFill.value) {
//     evt.preventDefault();
//     searchForm.classList.remove("form-show");
//     searchForm.classList.remove("popup-error");
//     searchButton.classList.remove("popup-error");
//     searchForm.offsetWidth = searchForm.offsetWidth;
//     searchForm.classList.add("popup-error");
//     searchButton.classList.add("popup-error");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("adultsCount", adults.value);
//       localStorage.setItem("childrenCount", kids.value);
//       searchForm.classList.remove("form-show");
//       searchForm.classList.add("form-hide");
//     }
//   }
// });

// Подменил input type text на input type date

dateInButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  dateInFill.classList.add("visually-hidden");
  dateInCalendar.classList.remove("visually-hidden");
  dateInButton.classList.add("visually-hidden");
});

dateOutButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  dateOutFill.classList.add("visually-hidden");
  dateOutCalendar.classList.remove("visually-hidden");
  dateOutButton.classList.add("visually-hidden");
});

// счетчик гостей
adultMinus.addEventListener("click", function (evt) {
  adultsCount.value--;
});
adultPlus.addEventListener("click", function (evt) {
  adultsCount.value++;
});
childMinus.addEventListener("click", function (evt) {
  childrenCount.value--;
});
childPlus.addEventListener("click", function (evt) {
  childrenCount.value++;
});
// проверка заполнения полей
searchForm.addEventListener("submit", function (evt) {
  if (
    (!dateInCalendar.value || !dateOutCalendar.value) &&
    (!dateInFill.value || !dateOutFill.value)
  ) {
    evt.preventDefault();
    searchForm.classList.remove("form-show");
    searchForm.classList.remove("popup-error");
    searchButton.classList.remove("popup-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("popup-error");
    searchButton.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultsCount", adults.value);
      localStorage.setItem("childrenCount", kids.value);
      searchForm.classList.remove("form-show");
      searchForm.classList.add("form-hide");
    }
  }
});
