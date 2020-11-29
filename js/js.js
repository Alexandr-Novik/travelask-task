/*
"use strict";

const data = {
    "hotels": [
        {
            "name": "Marina Inn",
            "img": "./imgs/img1.png",
            "country": "Россия",
            "address": "Фалираки, Родос, Греция",
            "stars": 4,
            "type": "Отель",
            "description": "Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с террасой и сауна. Из номеров открывается вид на море или на средневековый город.",
            "services": ["Пляж", "Кондиционер", "Открытый бассейн", "Бесплатная парковка", "Бесплатный WiFi", "Вид на море", "Бесплатный завтрак"],
            "min_price": 2789.00,
            "currency": "RUR",
            "rating": 4.5,
            "reviews_amount": 18,
            "last_review": "Отличное расположение. Вкусный завтрак. Отдыхали с детьми - все понравилось."
        },
        {
            "name": "Mondrian Suites",
            "img": "./imgs/img2.png",
            "country": "Греция",
            "address": "Фалираки, Родос, Греция",
            "stars": 5,
            "type": "Апартаменты",
            "description": "Из окон открывается вид на город.К услугам гостей номера-студио с балконом и чайником в 2,7 км от пляжа.",
            "services": ["Пляж", "Кондиционер", "Открытый бассейн", "Платная парковка", "Бесплатный WiFi", "Вид на море"],
            "min_price": 3245.20,
            "currency": "RUR",
            "rating": 5,
            "reviews_amount": 4,
            "last_review": "Потрясающее место, в номере есть все необходимое. Красивый вид на море."
        },
        {
            "name": "Sunny Appartments",
            "img": "./imgs/img3.png",
            "country": "Греция",
            "address": "Родос, Родос, Греция",
            "stars": 2,
            "type": "Апартаменты",
            "description": "Все номера и апартаменты оборудованы кондиционером и телевизором с плоским экраном. Также в распоряжении гостей тостер и чайник.",
            "services": ["Пляж", "Кондиционер", "Бесплатная парковка", "Бесплатный WiFi"],
            "min_price": 1153.00,
            "currency": "RUR",
            "rating": 2.4,
            "reviews_amount": 36,
            "last_review": "Бассейн очень маленький. Кормят невкусно. Больше не поедем."
        },
        {
            "name": "Super All Inclusive Hotel",
            "img": "./imgs/img4.png",
            "country": "Франция",
            "address": "Родос, Родос, Греция",
            "stars": 4,
            "type": "Отель",
            "description": "Все номера оснащены телевизором с плоским экраном. Из некоторых номеров открывается вид на море или город.",
            "services": ["Пляж", "Кондиционер", "Открытый бассейн", "Бесплатный WiFi", "Вид на море", "Бесплатный завтрак"],
            "min_price": 3689.00,
            "currency": "RUR",
            "rating": 4.1,
            "reviews_amount": 14,
            "last_review": "Недалёко от пляжа и старого города, вокруг много разных магазинчиков"
        },
        {
            "name": "Adams Hotel",
            "img": "./imgs/img1.png",
            "country": "Франция",
            "address": "Родос, Родос, Греция",
            "stars": 3,
            "type": "Отель",
            "description": "Отель расположен всего в 100 метрах от пляжа и в 5-ти минутах ходьбы от исторической части города, недалеко от всех основных достопримечательностей. Из отеля открывается вид на море. К услугам гостей спокойный открытый бассейн.",
            "services": ["Пляж", "Кондиционер", "Открытый бассейн", "Бесплатная парковка", "Бесплатный WiFi", "Бесплатный завтрак"],
            "min_price": 1896.00,
            "currency": "RUR",
            "rating": 0,
            "reviews_amount": 0,
            "last_review": ""
        }
    ]
}

function slideToggle(event) {
    const getElement = event.parentNode.children[1];
    const getArrow = event.children[1];
    getArrow.classList.toggle('slideToggleArrow');
    getElement.classList.toggle('slideToggle');
}

document.onclick = function (event) {
    const getId = event.target.id;
    if (getId === 'country') {
        document.getElementById('countryes').classList.add('header__form__container-cityes-inputs_position__container-active');
    } else if (getId != 'country') {
        document.getElementById('countryes').classList.remove('header__form__container-cityes-inputs_position__container-active');
    }
}

function updateRender() {
    const getSelectorStars = document.querySelectorAll('.section__container');
    getSelectorStars.forEach(el => {
        const getStars = el.children[1].children[1].children[1].textContent;
        const getStarText = el.children[1].children[1].children[1].children[1];
        const getStarContainer = el.children[1].children[1].children[0];
        const getStarsNumber = Number(getStars);
        if (getStarsNumber === 0) {
            getStarText.innerHTML = 'звёзд'
        } else if (getStarsNumber === 1) {
            getStarText.innerHTML = 'звезда'
        } else if (getStarsNumber === 2) {
            getStarText.innerHTML = 'звезды'
        } else if (getStarsNumber === 3) {
            getStarText.innerHTML = 'звезды'
        } else if (getStarsNumber === 4) {
            getStarText.innerHTML = 'звезды'
        } else if (getStarsNumber === 5) {
            getStarText.innerHTML = 'звёзд'
        }
        for (let i = 0; getStarsNumber > i; i++) {
            const newSpan = document.createElement('span');
            newSpan.innerHTML = `<img src="./imgs/star.png" alt="star">`;
            getStarContainer.append(newSpan);
        }
    })
    const getSelectorAllRedStar = document.querySelectorAll('.ratings');
    getSelectorAllRedStar.forEach(el => {
        const getSpan = el.parentNode.children[1];
        const getRedStar = el.textContent;
        const getRedStarNumber = Number(getRedStar);
        if (getRedStarNumber <= 2) {
            getSpan.innerText = 'Низкий';
        } else if (getRedStarNumber <= 3) {
            getSpan.innerText = 'Средний';
        } else if (getRedStarNumber <= 5) {
            getSpan.innerText = 'Хороший';
        }
    })
    const getCurrency = document.querySelectorAll('.currency');
    getCurrency.forEach(el => {
        const getCurrency = el.textContent;
        const getElementCurrency = el;
        if (getCurrency === 'RUR') {
            getElementCurrency.innerText = '';
            getElementCurrency.innerHTML = `
                <img class="currency__img" src="./imgs/ruble.png" alt="ruble">
            `
        }
    })
    const getReviewsAmount = document.querySelectorAll('.reviews_amount');
    getReviewsAmount.forEach(el => {
        const getReviewsAmountText = el.innerText;
        const getReviewsAmountElement = el.parentNode.parentNode.parentNode;
        if (getReviewsAmountText === '0') {
            getReviewsAmountElement.innerHTML = '';
            getReviewsAmountElement.innerHTML = `
                <img class="img-star-gray" src="./imgs/star-gray.png" alt="star no comment">
                <p class="text-star-gray">Нет оценок.</p>
            `
        }
    });
}

function funcRender(img, address, country, name, stars, type, description, rating, reviews_amount, last_review, min_price, currency) {
    const element = `
            <div>
                <img src="${img}" alt="img">
            </div>
            <div class="section__container-main-info">
                <div>
                    <p class="section__container-main-info-country">${address}<span class="section__container-main-info-country__span">${country}</span></p>
                    <h2>${name}</h2>
                </div>
                <div class="section__container-info">
                    <div class="stars__container">
                    
                    </div>
                    <span><span class="stars">${stars}</span> <span></span></span>
                    <span class="section__container-info__link">${type}</span>
                </div>
                <div>
                    <p>
                        ${description}
                    </p>
                </div>
            </div>
            <div class="section__container_flex">
                <div class="section__container_flex__container">
                    <div>
                        <img src="./imgs/red-star.png" alt="red star">
                        <span class="section__container_flex__container__span"><span class="ratings">${rating}</span> - <span></span> - <span class="reviews_amount">${reviews_amount}</span> отзывов</span>
                    </div>
                    <div class="section__container_flex__container-comment">
                        <p>
                            ${last_review}
                        </p>
                    </div>
                </div>
                <div class="section__container_flex__container-btn">
                    <span class="section__container_flex__span">от <span>${min_price}</span><span class="currency">${currency}</span></span>
                    <a class="section__container_flex__span__link" href="#">Забронировать</a>
                </div>
            </div>
        `
    const getParent = document.getElementById('posts');
    const newElement = document.createElement('div');
    newElement.classList.add('section__container');
    newElement.innerHTML = element;
    getParent.append(newElement);
}

var arrDataSearch = [];

var arrDataSearchAfter = [];

document.getElementById('country').onkeyup = function () {
    const getText = this.value;
    if (arrDataSearch.length === 0) {
        console.log(getText);
        console.log(arrDataSearch);
        data.hotels.forEach(el => {
            funcRender(el.img, el.address, el.country, el.name, el.stars, el.type, el.description, el.rating, el.reviews_amount, el.last_review, el.min_price, el.currency);
        });
        getQuerySelector();
        arrDataDisplay(getText);
        updateRender();
        console.log(arrDataSearch);
    } else if (arrDataSearch.length > 0) {
        console.log(getText);
        document.getElementById('posts').innerHTML = '';
        getQuerySelector();
        arrDataDisplay(getText);
        updateRender();
    }
}

function getCountryItem(event) {
    const getText = event.textContent;
    document.getElementById('country').value = getText;
    if (arrDataSearch.length === 0) {
        data.hotels.forEach(el => {
            funcRender(el.img, el.address, el.country, el.name, el.stars, el.type, el.description, el.rating, el.reviews_amount, el.last_review, el.min_price, el.currency);
        });
        getQuerySelector();
        arrDataDisplay(getText);
        updateRender();
    } else if (arrDataSearch.length > 0) {
        document.getElementById('posts').innerHTML = '';
        getQuerySelector();
        arrDataDisplay(getText);
        updateRender();
    }
}

function getQuerySelector() {
    const getSelectors = document.querySelectorAll('.section__container');
    getSelectors.forEach(el => {
        arrDataSearch.push(el);
    });
}

function arrDataDisplay(content) {
    arrDataSearch.forEach(el => {
        const getElement = el;
        getElement.classList.add('section__container-none');
        const getElementText = el.children[1].children[0].children[0].children[0].textContent;
        if (content === getElementText) {
            getElement.classList.remove('section__container-none');
        }
        const getElementClass = el.classList[1];
        if (getElementClass === undefined) {
            arrDataSearchAfter.push(getElement);
        }
    });
}














































var arrDataCheckbox = [];

var arrDataCheckboxElements = [];

function funcCheckboxActive(event) {
    const getChekbox = event.parentNode;
    const getChekboxValue = event.value;
    const getChekboxValueNumber = Number(getChekboxValue);
    const getChekboxBool = getChekbox.classList.toggle('header__form__container-cityes-inputs__label-active');
    if (getChekboxBool === true) {
        data.hotels.forEach(el => {
            const getStar = el.stars;
            const getElement = el;
            if (getChekboxValueNumber === getStar) {
                arrDataCheckbox.push(getElement);
                funcRender(el.img, el.address, el.country, el.name, el.stars, el.type, el.description, el.rating, el.reviews_amount, el.last_review, el.min_price, el.currency);
            }
        });
    } else if (getChekboxBool === false) {
        data.hotels.forEach((el) => {
            const getElement = el;
            arrDataCheckbox.forEach((el, index) => {
                if (getElement === el) {
                    delete arrDataCheckbox[index];
                    funcRender(el.img, el.address, el.country, el.name, el.stars, el.type, el.description, el.rating, el.reviews_amount, el.last_review, el.min_price, el.currency);
                }
            })
        });
    }
    updateRender();
}
*/