/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// style\n// import '../css/style.css'\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  //js\n\n  const clas = __webpack_require__(/*! ../modules/class */ \"./assets/modules/class.js\"),\n    form = __webpack_require__(/*! ../modules/form */ \"./assets/modules/form.js\"),\n    loader = __webpack_require__(/*! ../modules/loader */ \"./assets/modules/loader.js\"),\n    modal = __webpack_require__(/*! ../modules/modal */ \"./assets/modules/modal.js\"),\n    tab = __webpack_require__(/*! ../modules/tap */ \"./assets/modules/tap.js\"),\n    timer = __webpack_require__(/*! ../modules/timer */ \"./assets/modules/timer.js\");\n\n  clas();\n  form();\n  loader();\n  modal();\n  tab();\n  timer();\n});\n\n\n//# sourceURL=webpack://ridex-car-website-master/./assets/js/script.js?");

/***/ }),

/***/ "./assets/modules/class.js":
/*!*********************************!*\
  !*** ./assets/modules/class.js ***!
  \*********************************/
/***/ ((module) => {

eval("function clas() {\r\n  // Class\r\n\r\n  class Cards {\r\n    constructor(\r\n      src,\r\n      alt,\r\n      carName,\r\n      yearCar,\r\n      peopleSit,\r\n      motor,\r\n      litreKm,\r\n      price,\r\n      parentSelector\r\n    ) {\r\n      this.src = src;\r\n      this.alt = alt;\r\n      this.carName = carName;\r\n      this.yearCar = yearCar;\r\n      this.peopleSit = peopleSit;\r\n      this.motor = motor;\r\n      this.litreKm = litreKm;\r\n      this.price = price;\r\n      this.parent = document.querySelector(parentSelector);\r\n    }\r\n\r\n    render() {\r\n      const element = document.createElement(\"div\");\r\n\r\n      element.innerHTML = `\r\n        <li>\r\n          <div class=\"featured-car-card\">\r\n            <figure class=\"card-banner\">\r\n              <img\r\n                src=${this.src}\r\n                alt=${this.alt}\r\n                loading=\"lazy\"\r\n                width=\"440\"\r\n                height=\"300\"\r\n                class=\"w-100\"\r\n              />\r\n            </figure>\r\n            <div class=\"card-content\">\r\n              <div class=\"card-title-wrapper\">\r\n              <h3 class=\"h3 card-title\">\r\n                <a href=\"#\">${this.carName}</a>\r\n              </h3>\r\n              <data class=\"year\" value=\"2021\">${this.yearCar}</data>\r\n            </div>\r\n            <ul class=\"card-list\">\r\n              <li class=\"card-list-item\">\r\n                <ion-icon name=\"people-outline\"></ion-icon>\r\n                <span class=\"card-item-text\">${this.peopleSit}</span>\r\n              </li>\r\n              <li class=\"card-list-item\">\r\n                <ion-icon name=\"flash-outline\"></ion-icon>\r\n                <span class=\"card-item-text\">${this.motor}</span>\r\n              </li>\r\n              <li class=\"card-list-item\">\r\n                <ion-icon name=\"speedometer-outline\"></ion-icon>\r\n                <span class=\"card-item-text\">${this.litreKm}</span>\r\n              </li>\r\n              <li class=\"card-list-item\">\r\n                <ion-icon name=\"hardware-chip-outline\"></ion-icon>\r\n                <span class=\"card-item-text\">Automatic</span>\r\n              </li>\r\n            </ul>\r\n            <div class=\"card-price-wrapper\">\r\n              <p class=\"card-price\"><strong>${this.price}</strong> uzs/month</p>\r\n              <button\r\n                class=\"btn fav-btn\"\r\n                aria-label=\"Add to favourite list\"\r\n              >\r\n                <ion-icon name=\"heart-outline\"></ion-icon>\r\n              </button>\r\n              <button class=\"btn\" data-modal>Rent now</button>\r\n            </div>\r\n          </div>    \r\n        </div>\r\n      </li>\r\n      `;\r\n\r\n      this.parent.append(element);\r\n    }\r\n  }\r\n\r\n  new Cards(\r\n    \"./assets/images/car-1.jpg\",\r\n    \"Toyota RAV4 2021\",\r\n    \"Toyota RAV4\",\r\n    2021,\r\n    \"4 People\",\r\n    \"Hybrid\",\r\n    \"6.1km / 1-litre\",\r\n    440,\r\n    \".featured-car .featured-car-list\"\r\n  ).render();\r\n\r\n  new Cards(\r\n    \"./assets/images/car-2.jpg\",\r\n    \"BMW 3 Series 2019\",\r\n    \"BMW 3 Series\",\r\n    2019,\r\n    \"4 People\",\r\n    \"Gasoline\",\r\n    \"8.2km / 1-litre\",\r\n    350,\r\n    \".featured-car .featured-car-list\"\r\n  ).render();\r\n\r\n  new Cards(\r\n    \"./assets/images/car-3.jpg\",\r\n    \"Volkswagen T-Cross 2020\",\r\n    \"Volkswagen T-Cross\",\r\n    2020,\r\n    \"4 People\",\r\n    \"Gasoline\",\r\n    \"5.3km / 1-litre\",\r\n    400,\r\n    \".featured-car .featured-car-list\"\r\n  ).render();\r\n\r\n  new Cards(\r\n    \"./assets/images/car-4.jpg\",\r\n    \"Cadillac Escalade 2020\",\r\n    \"Cadillac Escalade\",\r\n    2020,\r\n    \"4 People\",\r\n    \"Gasoline\",\r\n    \"7.7km / 1-litre\",\r\n    620,\r\n    \".featured-car .featured-car-list\"\r\n  ).render();\r\n\r\n  new Cards(\r\n    \"./assets/images/car-5.jpg\",\r\n    \"BMW 4 Series GTI 2021\",\r\n    \"BMW 4 Series GTI\",\r\n    2021,\r\n    \"4 People\",\r\n    \"Gasoline\",\r\n    \"7.6km / 1-litre\",\r\n    530,\r\n    \".featured-car .featured-car-list\"\r\n  ).render();\r\n\r\n  new Cards(\r\n    \"./assets/images/car-6.jpg\",\r\n    \"BMW 4 Series 2019\",\r\n    \"BMW 4 Series\",\r\n    2019,\r\n    \"4 People\",\r\n    \"Gasoline\",\r\n    \"7.2km / 1-litre\",\r\n    440,\r\n    \".featured-car .featured-car-list\"\r\n  ).render();\r\n\r\n  class Blog {\r\n    constructor(icon, title, descr, classIcon, parentSelector) {\r\n      this.icon = icon;\r\n      this.title = title;\r\n      this.descr = descr;\r\n      this.class = classIcon;\r\n      this.parent = document.querySelector(parentSelector);\r\n    }\r\n\r\n    render() {\r\n      const element = document.createElement(\"div\");\r\n\r\n      element.innerHTML = `\r\n      <li>\r\n        <div class=\"get-start-card\">\r\n          <div class=${this.class}>\r\n            <ion-icon name=${this.icon}></ion-icon>\r\n          </div>\r\n          <h3 class=\"card-title\">${this.title}</h3>\r\n          <p class=\"card-text\">${this.descr}</p>\r\n        </div>\r\n      </li>\r\n    `;\r\n      this.parent.append(element);\r\n    }\r\n  }\r\n\r\n  axios.get(\"http://localhost:3000/blog\").then((data) => {\r\n    data.data.forEach(({ icon, title, descr, classIcon }) => {\r\n      new Blog(\r\n        icon,\r\n        title,\r\n        descr,\r\n        classIcon,\r\n        \".container .get-start-list\"\r\n      ).render();\r\n    });\r\n  });\r\n\r\n  \r\n}\r\nmodule.exports = clas;\n\n//# sourceURL=webpack://ridex-car-website-master/./assets/modules/class.js?");

/***/ }),

/***/ "./assets/modules/form.js":
/*!********************************!*\
  !*** ./assets/modules/form.js ***!
  \********************************/
/***/ ((module) => {

eval("function form() {\r\n  // Form\r\n  const forms = document.querySelectorAll(\"form\");\r\n\r\n  forms.forEach((form) => {\r\n    bindPostData(form);\r\n  });\r\n\r\n  const msg = {\r\n    loading: \"./img/spinner.svg\",\r\n    success: \"Thank's for submitting our form\",\r\n    failure: \"Something went wrong\",\r\n  };\r\n\r\n  async function postData(url, data) {\r\n    const res = await fetch(url, {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      body: data,\r\n    });\r\n\r\n    return await res.json();\r\n  }\r\n\r\n  function bindPostData(form) {\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n\r\n      const statusMassage = document.createElement(\"img\");\r\n      statusMassage.src = msg.loading;\r\n      statusMassage.style.cssText = `\r\n        display: block;\r\n        margin: 0 auto;\r\n      `;\r\n      form.insertAdjacentElement(\"afterend\", statusMassage);\r\n\r\n      const formData = new FormData(form);\r\n\r\n      const json = JSON.stringify(Object.fromEntries(formData.entries()));\r\n\r\n      postData(\"http://localhost:3000/request\", json)\r\n        .then((data) => {\r\n          console.log(data);\r\n          showThanksModal(msg.success);\r\n          statusMassage.remove();\r\n        })\r\n        .catch(() => {\r\n          showThanksModal(msg.failure);\r\n        })\r\n        .finally(() => {\r\n          form.reset();\r\n        });\r\n    });\r\n  }\r\n\r\n  function showThanksModal(message) {\r\n    const prevModalDialog = document.querySelector(\".modal__dialog\");\r\n\r\n    prevModalDialog.classList.add(\"hide\");\r\n    openModal();\r\n\r\n    const thanksModal = document.createElement(\"div\");\r\n    thanksModal.classList.add(\"modal__dialog\");\r\n    thanksModal.innerHTML = `\r\n      <div class='modal__content'>\r\n        <div data-close class=\"modal__close\">&times;</div>\r\n        <div class='modal__title'>${message}</div>\r\n      </div>\r\n    `;\r\n\r\n    document.querySelector(\".modal\").append(thanksModal);\r\n\r\n    setTimeout(() => {\r\n      thanksModal.remove();\r\n      prevModalDialog.classList.add(\"show\");\r\n      prevModalDialog.classList.remove(\"hide\");\r\n      closeModal();\r\n    }, 4000);\r\n  }\r\n}\r\nmodule.exports = form;\r\n\n\n//# sourceURL=webpack://ridex-car-website-master/./assets/modules/form.js?");

/***/ }),

/***/ "./assets/modules/loader.js":
/*!**********************************!*\
  !*** ./assets/modules/loader.js ***!
  \**********************************/
/***/ ((module) => {

eval("function loader() {\r\n  loader = document.querySelector(\".loader\");\r\n\r\n  // loader\r\n  setTimeout(() => {\r\n    loader.style.opacit = \"0\";\r\n    setTimeout(() => {\r\n      loader.style.display = \"none\";\r\n    }, 500);\r\n  }, 2000);\r\n}\r\nmodule.exports = loader;\r\nmodule.exports = loader;\n\n//# sourceURL=webpack://ridex-car-website-master/./assets/modules/loader.js?");

/***/ }),

/***/ "./assets/modules/modal.js":
/*!*********************************!*\
  !*** ./assets/modules/modal.js ***!
  \*********************************/
/***/ ((module) => {

eval("function modal() {\r\n  // Modal\r\n\r\n  const modalTrigger = document.querySelectorAll(\"[data-modal]\"),\r\n    modalCloseBtn = document.querySelector(\"[data-close]\"),\r\n    modal = document.querySelector(\".modal\");\r\n\r\n  function openModal() {\r\n    modal.classList.add(\"show\");\r\n    modal.classList.remove(\"hide\");\r\n    document.body.style.overflow = \"hidden\";\r\n  }\r\n\r\n  function closeModal() {\r\n    modal.classList.add(\"hide\");\r\n    modal.classList.remove(\"show\");\r\n    document.body.style.overflow = \"\";\r\n    clearInterval(modalTimerId);\r\n  }\r\n\r\n  modalTrigger.forEach((item) => {\r\n    item.addEventListener(\"click\", openModal);\r\n  });\r\n\r\n  modalCloseBtn.addEventListener(\"click\", closeModal);\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (e.target == modal) {\r\n      closeModal();\r\n    }\r\n  });\r\n\r\n  document.addEventListener(\"keydown\", (e) => {\r\n    if (e.code === \"Escape\" && modal.classList.contains(\"show\")) {\r\n      closeModal();\r\n    }\r\n  });\r\n\r\n  const modalTimerId = setTimeout(openModal, 4000);\r\n\r\n  function showModalByScroll() {\r\n    if (\r\n      window.pageYOffset + document.documentElement.clientHeight >=\r\n      document.documentElement.scrollHeight\r\n    ) {\r\n      openModal();\r\n      window.removeEventListener(\"scroll\", showModalByScroll);\r\n    }\r\n  }\r\n\r\n  window.addEventListener(\"scroll\", showModalByScroll);\r\n}\r\nmodule.exports = modal;\n\n//# sourceURL=webpack://ridex-car-website-master/./assets/modules/modal.js?");

/***/ }),

/***/ "./assets/modules/tap.js":
/*!*******************************!*\
  !*** ./assets/modules/tap.js ***!
  \*******************************/
/***/ ((module) => {

eval("function tab() {\r\n  const tabsParent = document.querySelector(\".tabheader__items\"),\r\n    tabs = document.querySelectorAll(\".tabheader__item\"),\r\n    tabsContent = document.querySelectorAll(\".tabcontent\");\r\n\r\n  function hideTabsContent() {\r\n    tabsContent.forEach((item) => {\r\n      item.classList.add(\"hide\");\r\n      item.classList.remove(\"show\", \"fade\");\r\n    });\r\n\r\n    tabs.forEach((item) => {\r\n      item.classList.remove(\"tabheader__item_active\");\r\n    });\r\n  }\r\n\r\n  function showTabsContent(i = 0) {\r\n    tabsContent[i].classList.add(\"show\", \"fade\");\r\n    tabsContent[i].classList.remove(\"hide\");\r\n    tabs[i].classList.add(\"tabheader__item_active\");\r\n  }\r\n\r\n  hideTabsContent();\r\n  showTabsContent();\r\n\r\n  tabsParent.addEventListener(\"click\", (even) => {\r\n    const target = even.target;\r\n\r\n    if (target && target.classList.contains(\"tabheader__item\")) {\r\n      tabs.forEach((item, idx) => {\r\n        if (target == item) {\r\n          hideTabsContent();\r\n          showTabsContent(idx);\r\n        }\r\n      });\r\n    }\r\n  });\r\n}\r\nmodule.exports = tab;\n\n//# sourceURL=webpack://ridex-car-website-master/./assets/modules/tap.js?");

/***/ }),

/***/ "./assets/modules/timer.js":
/*!*********************************!*\
  !*** ./assets/modules/timer.js ***!
  \*********************************/
/***/ ((module) => {

eval("function timer() {\r\n  // Timer\r\n\r\n  const deadline = \"2024-10-03\";\r\n\r\n  function getTimeRemaining(endtime) {\r\n    let days, hours, minutes, seconds;\r\n    const timer = Date.parse(endtime) - Date.parse(new Date());\r\n\r\n    if (timer <= 0) {\r\n      days = 0;\r\n      hours = 0;\r\n      minutes = 0;\r\n      seconds = 0;\r\n    } else {\r\n      days = Math.floor(timer / (1000 * 60 * 60 * 24));\r\n      hours = Math.floor((timer / (1000 * 60 * 60)) % 24);\r\n      minutes = Math.floor((timer / 1000 / 60) % 60);\r\n      seconds = Math.floor((timer / 1000) % 60);\r\n    }\r\n\r\n    return {\r\n      timer,\r\n      days,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  }\r\n\r\n  function getZero(num) {\r\n    if (num >= 0 && num < 10) {\r\n      return `0${num}`;\r\n    } else {\r\n      return num;\r\n    }\r\n  }\r\n\r\n  function setClock(selector, endtime) {\r\n    let days, hours, minutes, seconds;\r\n    const timer = document.querySelector(selector);\r\n\r\n    if (timer <= 0) {\r\n      days = 0;\r\n      hours = 0;\r\n      minutes = 0;\r\n      seconds = 0;\r\n    } else {\r\n      days = timer.querySelector(\"#days\");\r\n      hours = timer.querySelector(\"#hours\");\r\n      minutes = timer.querySelector(\"#minutes\");\r\n      seconds = timer.querySelector(\"#seconds\");\r\n      timeInterval = setInterval(updatClock, 1000);\r\n    }\r\n\r\n    updatClock();\r\n\r\n    function updatClock() {\r\n      const t = getTimeRemaining(endtime);\r\n\r\n      days.innerHTML = getZero(t.days);\r\n      hours.innerHTML = getZero(t.hours);\r\n      minutes.innerHTML = getZero(t.minutes);\r\n      seconds.innerHTML = getZero(t.seconds);\r\n\r\n      if (t.timer <= 0) {\r\n        clearInterval(timeInterval);\r\n      }\r\n    }\r\n  }\r\n  setClock(\".timer\", deadline);\r\n}\r\nmodule.exports = timer;\n\n//# sourceURL=webpack://ridex-car-website-master/./assets/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/script.js");
/******/ 	
/******/ })()
;