function clas() {
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

  axios.get("http://localhost:3000/blog").then((data) => {
    data.data.forEach(({ icon, title, descr, classIcon }) => {
      new Blog(
        icon,
        title,
        descr,
        classIcon,
        ".container .get-start-list"
      ).render();
    });
  });

  
}
module.exports = clas;