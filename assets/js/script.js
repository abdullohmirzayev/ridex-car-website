window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    loader = document.querySelector(".loader");

  loader;
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2500);

  function hideTabsContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabsContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabsContent();
  showTabsContent();

  tabsParent.addEventListener("click", (even) => {
    const target = even.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, idx) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(idx);
        }
      });
    }
  });

  // Timer

  const deadline = "2024-10-03";

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const timer = Date.parse(endtime) - Date.parse(new Date());

    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(timer / (1000 * 60 * 60 * 24));
      hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((timer / 1000 / 60) % 60);
      seconds = Math.floor((timer / 1000) % 60);
    }

    return {
      timer,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    let days, hours, minutes, seconds;
    const timer = document.querySelector(selector);

    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = timer.querySelector("#days");
      hours = timer.querySelector("#hours");
      minutes = timer.querySelector("#minutes");
      seconds = timer.querySelector("#seconds");
      timeInterval = setInterval(updatClock, 1000);
    }

    updatClock();

    function updatClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.timer <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", deadline);

  // Modal

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modalCloseBtn = document.querySelector("[data-close]"),
    modal = document.querySelector(".modal");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    clearInterval(modalTimerId);
  }

  modalTrigger.forEach((item) => {
    item.addEventListener("click", openModal);
  });

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 4000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);

  // Class

  class Cards {
    constructor(
      src,
      alt,
      carName,
      yearCar,
      peopleSit,
      motor,
      litreKm,
      price,
      parentSelector
    ) {
      this.src = src;
      this.alt = alt;
      this.carName = carName;
      this.yearCar = yearCar;
      this.peopleSit = peopleSit;
      this.motor = motor;
      this.litreKm = litreKm;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("div");

      element.innerHTML = `
        <li>
          <div class="featured-car-card">
            <figure class="card-banner">
              <img
                src=${this.src}
                alt=${this.alt}
                loading="lazy"
                width="440"
                height="300"
                class="w-100"
              />
            </figure>
            <div class="card-content">
              <div class="card-title-wrapper">
              <h3 class="h3 card-title">
                <a href="#">${this.carName}</a>
              </h3>
              <data class="year" value="2021">${this.yearCar}</data>
            </div>
            <ul class="card-list">
              <li class="card-list-item">
                <ion-icon name="people-outline"></ion-icon>
                <span class="card-item-text">${this.peopleSit}</span>
              </li>
              <li class="card-list-item">
                <ion-icon name="flash-outline"></ion-icon>
                <span class="card-item-text">${this.motor}</span>
              </li>
              <li class="card-list-item">
                <ion-icon name="speedometer-outline"></ion-icon>
                <span class="card-item-text">${this.litreKm}</span>
              </li>
              <li class="card-list-item">
                <ion-icon name="hardware-chip-outline"></ion-icon>
                <span class="card-item-text">Automatic</span>
              </li>
            </ul>
            <div class="card-price-wrapper">
              <p class="card-price"><strong>${this.price}</strong> uzs/month</p>
              <button
                class="btn fav-btn"
                aria-label="Add to favourite list"
              >
                <ion-icon name="heart-outline"></ion-icon>
              </button>
              <button class="btn" data-modal>Rent now</button>
            </div>
          </div>    
        </div>
      </li>
      `;

      this.parent.append(element);
    }
  }

  new Cards(
    "./assets/images/car-1.jpg",
    "Toyota RAV4 2021",
    "Toyota RAV4",
    2021,
    "4 People",
    "Hybrid",
    "6.1km / 1-litre",
    440,
    ".featured-car .featured-car-list"
  ).render();

  new Cards(
    "./assets/images/car-2.jpg",
    "BMW 3 Series 2019",
    "BMW 3 Series",
    2019,
    "4 People",
    "Gasoline",
    "8.2km / 1-litre",
    350,
    ".featured-car .featured-car-list"
  ).render();

  new Cards(
    "./assets/images/car-3.jpg",
    "Volkswagen T-Cross 2020",
    "Volkswagen T-Cross",
    2020,
    "4 People",
    "Gasoline",
    "5.3km / 1-litre",
    400,
    ".featured-car .featured-car-list"
  ).render();

  new Cards(
    "./assets/images/car-4.jpg",
    "Cadillac Escalade 2020",
    "Cadillac Escalade",
    2020,
    "4 People",
    "Gasoline",
    "7.7km / 1-litre",
    620,
    ".featured-car .featured-car-list"
  ).render();

  new Cards(
    "./assets/images/car-5.jpg",
    "BMW 4 Series GTI 2021",
    "BMW 4 Series GTI",
    2021,
    "4 People",
    "Gasoline",
    "7.6km / 1-litre",
    530,
    ".featured-car .featured-car-list"
  ).render();

  new Cards(
    "./assets/images/car-6.jpg",
    "BMW 4 Series 2019",
    "BMW 4 Series",
    2019,
    "4 People",
    "Gasoline",
    "7.2km / 1-litre",
    440,
    ".featured-car .featured-car-list"
  ).render();

  class Blog {
    constructor(icon, title, descr, classIcon, parentSelector) {
      this.icon = icon;
      this.title = title;
      this.descr = descr;
      this.class = classIcon;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("div");

      element.innerHTML = `
      <li>
        <div class="get-start-card">
          <div class=${this.class}>
            <ion-icon name=${this.icon}></ion-icon>
          </div>
          <h3 class="card-title">${this.title}</h3>
          <p class="card-text">${this.descr}</p>
        </div>
      </li>
    `;
      this.parent.append(element);
    }
  }

  new Blog(
    "person-add-outline",
    "Create a profile",
    "If you are going to use a passage of Lorem Ipsum, you need to be sure.",
    "card-icon icon-1",
    ".get-start .get-start-list"
  ).render();

  new Blog(
    "car-outline",
    "Tell us what car you want",
    "Various versions have evolved over the years, sometimes by accident, ",
    "card-icon icon-2",
    ".get-start .get-start-list"
  ).render();

  new Blog(
    "person-outline",
    "Match with seller",
    "It to make a type specimen book. It has survived not only five centuries,  ",
    "card-icon icon-3",
    ".get-start .get-start-list"
  ).render();

  new Blog(
    "card-outline",
    "Make a deal",
    "There are many variations of passages of Lorem available, but the majority ",
    "card-icon icon-4",
    ".get-start .get-start-list"
  ).render();

  // Form
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    bindPostData(form);
  });

  const msg = {
    loading: "./img/spinner.svg",
    success: "Thank's for submitting our form",
    failure: "Something went wrong",
  };

  async function postData(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    return await res.json();
  }

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMassage = document.createElement("img");
      statusMassage.src = msg.loading;
      statusMassage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement("afterend", statusMassage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/request", json)
        .then((data) => {
          console.log(data);
          showThanksModal(msg.success);
          statusMassage.remove();
        })
        .catch(() => {
          showThanksModal(msg.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal();

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
      <div class='modal__content'>
        <div data-close class="modal__close">&times;</div>
        <div class='modal__title'>${message}</div>
      </div>
    `;

    document.querySelector(".modal").append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 4000);
  }
});
