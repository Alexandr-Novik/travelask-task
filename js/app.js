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

data.hotels.forEach(el => {
    const getElement = `
        <div>
            <img src="${el.img}" alt="img">
        </div>
        <div class="section__container-main-info">
            <div>
                <p class="section__container-main-info-country">${el.address}<span class="section__container-main-info-country__span">${el.country}</span></p>
                <h2>${el.name}</h2>
            </div>
            <div class="section__container-info">
                <div class="stars__container">
                
                </div>
                <span><span class="stars">${el.stars}</span> <span></span></span>
                <span class="section__container-info__link">${el.type}</span>
            </div>
            <div>
                <p>
                    ${el.description}
                </p>
            </div>
        </div>
        <div class="section__container_flex">
            <div class="section__container_flex__container">
                <div>
                    <img src="./imgs/red-star.png" alt="red star">
                    <span class="section__container_flex__container__span"><span class="ratings">${el.rating}</span> - <span></span> - <span class="reviews_amount">${el.reviews_amount}</span> отзывов</span>
                </div>
                <div class="section__container_flex__container-comment">
                    <p>
                        ${el.last_review}
                    </p>
                </div>
            </div>
            <div class="section__container_flex__container-btn">
                <span class="section__container_flex__span">от <span>${el.min_price}</span><span class="currency">${el.currency}</span></span>
                <a class="section__container_flex__span__link" href="#">Забронировать</a>
            </div>
        </div>
    `
    const parentElement = document.getElementById('posts');
    const newElement = document.createElement('div');
    newElement.classList.add('section__container');
    newElement.innerHTML = getElement;
    parentElement.append(newElement);
});

function funcGetCurrency() {
    const getCurrency = document.querySelectorAll('.currency');
    getCurrency.forEach(el => {
        const textElement = el.textContent;
        if (textElement === 'RUR') {
            el.textContent = '';
            const corrency = '<img class="currency__img" src="./imgs/ruble.png" alt="ruble">';
            el.innerHTML = corrency;
        }
    });
};

function funcGetStars() {
    const getStars = document.querySelectorAll('.stars');
    getStars.forEach(el => {
        const textElement = el.textContent;
        const textElementNumber = Number(textElement);
        if (textElementNumber === 0) {
            const elText = el.parentNode.children[1];
            elText.innerText = 'звёзд';
        } else if (textElementNumber === 1) {
            const elText = el.parentNode.children[1];
            elText.innerText = 'звезда';
        } else if (textElementNumber === 2) {
            const elText = el.parentNode.children[1];
            elText.innerText = 'звезды';
        } else if (textElementNumber === 3) {
            const elText = el.parentNode.children[1];
            elText.innerText = 'звезды';
        } else if (textElementNumber === 4) {
            const elText = el.parentNode.children[1];
            elText.innerText = 'звезды';
        } else if (textElementNumber === 5) {
            const elText = el.parentNode.children[1];
            elText.innerText = 'звёзд';
        } else {
            const elText = el.parentNode.children[1];
            elText.innerText = 'errors';
        }
        for (let i = 0; i < textElementNumber; i++) {
            const getParent = el.parentNode.parentNode.children[0];
            const newElement = document.createElement('span');
            const imgStars = '<img src="./imgs/star.png" alt="star">';
            newElement.innerHTML = imgStars;
            getParent.append(newElement);
        }
    });
};

function funcGetTatings() {
    const getRatings = document.querySelectorAll('.ratings');
    getRatings.forEach(el => {
        const getRatingsText = el.textContent;
        const getRatingsTextNumber = Number(getRatingsText);
        const getParent = el.parentNode.children[1];
        if (getRatingsTextNumber <= 2) {
            getParent.innerText = 'Низкое';
        } else if (getRatingsTextNumber <= 4) {
            getParent.innerText = 'Среднее';
        } else if (getRatingsTextNumber <= 5) {
            getParent.innerText = 'Хорошее';
        } else {
            getParent.innerText = 'Errors';
        }
    });
};

function funcGetReviews() {
    const getReviews = document.querySelectorAll('.reviews_amount');
    getReviews.forEach(el => {
        const textElement = el.textContent;
        const textElementNumber = Number(textElement);
        if (textElementNumber === 0) {
            const getParent = el.parentNode.parentNode.parentNode;
            getParent.textContent = "";
            const containerNoComments = `
                <img class="img-star-gray" src="./imgs/star-gray.png" alt="star no comment">
                <p class="text-star-gray">Нет оценок.</p>
            `
            getParent.innerHTML = containerNoComments;
        }
    });
};

document.onclick = function (event) {
    const getElement = event.target.id;
    if (getElement === 'country') {
        document.getElementById('countryes').classList.add('header__form__container-cityes-inputs_position__container-active');
    } else if (getElement != 'country') {
        document.getElementById('countryes').classList.remove('header__form__container-cityes-inputs_position__container-active');
    } else {
        alert('errors');
    }
};

document.getElementById('reset').onclick = function () {
    const getElementCheckbox = document.querySelectorAll('.header__form__container-cityes-inputs__label');
    getElementCheckbox.forEach(el => {
        el.classList.remove('header__form__container-cityes-inputs__label-active');
    });
    const getElementRadio = document.querySelectorAll('.header__form__container-cityes-inputs-radio__label');
    getElementRadio.forEach(el => {
        el.classList.remove('header__form__container-cityes-inputs-radio__label-active');
    });
};

$(document).ready(function ($) {
    var slider = document.getElementById('range-slider');
    var snapValues = [
        document.getElementById('slider-snap-value-lower'),
        document.getElementById('slider-snap-value-upper')
    ];
    noUiSlider.create(slider, {
        start: [0, 9999],
        connect: true,
        tooltips: true,
        range: {
            'min': 0,
            'max': 9999,
        }
    });
    slider.noUiSlider.on('update', function (values, handle) {
        snapValues[handle].innerHTML = values[handle];
    });
});

function slideToggle(event) {
    const getSlideToggleArrow = event.children[1];
    getSlideToggleArrow.classList.toggle('slideToggleArrow');
    const getSlideToggle = event.parentNode.children[1];
    getSlideToggle.classList.toggle('slideToggle');
}

let arrElements = [];

function getElementAll() {
    const getElements = document.querySelectorAll('.section__container');
    getElements.forEach(el => {
        arrElements.push(el);
    });
}

let arrElementsSearch = [];

document.getElementById('country').onkeyup = function () {
    const inputValue = this.value;
    if (inputValue.length === 0) {
        document.querySelector('.search').classList.remove('search_flex');
        arrElements.forEach(el => {
            el.classList.remove('section__container-none');
        });
    } else if (inputValue.length > 0) {
        arrElements.forEach(el => {
            el.classList.add('section__container-none');
        });
        document.querySelector('.search').classList.add('search_flex');
        arrElementsSearch = [];
        arrElements.forEach(el => {
            const getCountryText = el.children[1].children[0].children[0].children[0].textContent;
            if (inputValue === getCountryText) {
                const getCountry = el;
                arrElementsSearch.push(el);
                getCountry.classList.remove('section__container-none');
                document.querySelector('.search').classList.remove('search_flex');
            }
        });
    } else {
        alert('errors');
    }
}

function getCountryItem(event) {
    const getCountryItemText = event.textContent;
    document.getElementById('country').value = getCountryItemText;
    document.querySelector('.search').classList.remove('search_flex');
    arrElements.forEach(el => {
        el.classList.add('section__container-none');
    });
    arrElementsSearch = [];
    arrElements.forEach(el => {
        const getCountryItemAllText = el.children[1].children[0].children[0].children[0].textContent;
        if (getCountryItemText === getCountryItemAllText) {
            const getCountryItemAddClass = el;
            arrElementsSearch.push(el);
            getCountryItemAddClass.classList.remove('section__container-none');
        }
    });
}

let arrElementsSearchCheckbox = [];

let arrCheckClass = [];

function funcCheckboxActive(event) {
    const getElement = event.parentNode;
    const getElementToggleClass = getElement.classList.toggle('header__form__container-cityes-inputs__label-active');
    const getValue = document.getElementById('country').value;
    if (getValue.length === 0) {
        if (getElementToggleClass === true) {
            arrElements.forEach(el => {
                el.classList.add('section__container-none');
            });
            arrElements.forEach(el => {
                const getElementText = el.children[1].children[1].children[1].children[0].textContent;
                const eventNumber = Number(event.value);
                const getElementTextNumber = Number(getElementText);
                const getElement = el;
                if (eventNumber === getElementTextNumber) {
                    arrElementsSearchCheckbox.push(getElement);
                    arrElementsSearchCheckbox.forEach(el => {
                        el.classList.remove('section__container-none');
                    });
                } else if (eventNumber != getElementTextNumber) {
                    arrElementsSearchCheckbox.forEach(el => {
                        el.classList.remove('section__container-none');
                    });
                }
            });
            if (arrElementsSearchCheckbox.length === 0) {
                document.querySelector('.search').classList.add('search_flex');
            } else if (arrElementsSearchCheckbox.length > 0) {
                document.querySelector('.search').classList.remove('search_flex');
            }
        } else if (getElementToggleClass === false) {
            document.querySelector('.search').classList.remove('search_flex');
            const getElementValue = event.value;
            const getElementValueNumber = Number(getElementValue);
            arrElementsSearchCheckbox.forEach((el, index) => {
                const getElement = el;
                const getElmentText = el.children[1].children[1].children[1].children[0].textContent;
                const getElmentTextNumber = Number(getElmentText);
                if (getElementValueNumber === getElmentTextNumber) {
                    getElement.classList.add('section__container-none');
                    delete arrElementsSearchCheckbox[index];
                    arrCheckClass = [];
                    const arrClasses = [];
                    const getElementAll = document.querySelectorAll('.header__form__container-cityes-inputs__label');
                    getElementAll.forEach(el => {
                        const getClass = el.classList;
                        getClass.forEach(el => {
                            arrClasses.push(el);
                        })
                    })
                    arrClasses.forEach(el => {
                        if (el === 'header__form__container-cityes-inputs__label-active') {
                            arrCheckClass.push(el);
                        }
                    });
                    if (arrCheckClass.length === 0) {
                        arrElements.forEach(el => {
                            el.classList.remove('section__container-none');
                        });
                    }
                }
            });
            if (arrCheckClass.length === 0) {
                arrElements.forEach(el => {
                    el.classList.remove('section__container-none');
                });
                const boolArray = arrElementsSearchCheckbox.some(el => el != undefined);
                if (boolArray === true) {
                    arrElements.forEach(el => {
                        el.classList.remove('section__container-none');
                    });
                }
            }
        }
    } else if (getValue.length > 0) {
        console.log(arrElementsSearch);
        console.log(getElementToggleClass);
        arrElementsSearch.forEach(el => {
            el.classList.add('section__container-none');
        });
    }

//////////////////////////////////////////////

};

let boolHouse = [];

function funcRadioActive(event) {
    const noClass = document.querySelectorAll('.header__form__container-cityes-inputs-radio__label');
    noClass.forEach(el => {
        el.classList.remove('header__form__container-cityes-inputs-radio__label-active');
    });
    const getValue = document.getElementById('country').value;
    if (getValue.length === 0) {
        const getElement = event.parentNode;
        getElement.classList.add('header__form__container-cityes-inputs-radio__label-active');
        const getElementValue = event.value;
        arrElements.forEach(el => {
            const getElement = el;
            const getElementText = el.children[1].children[1].children[2].textContent;
            if (getElementValue === getElementText) {
                getElement.classList.remove('section__container-none');
            } else if (getElementValue != getElementText) {
                getElement.classList.add('section__container-none');
            }

        });
    } else if (getValue.length > 0) {

    }
};

function timeoutMoney() {
    const getValue = document.getElementById('country').value;
    if (getValue.length === 0) {
        const timeoutMoneyLower = document.getElementById('slider-snap-value-lower').textContent;
        const timeoutMoneyUpper = document.getElementById('slider-snap-value-upper').textContent;
        const timeoutMoneyLowerNumber = Number(timeoutMoneyLower);
        const timeoutMoneyUpperNumber = Number(timeoutMoneyUpper);
        arrElements.forEach(el => {
            const getElement = el;
            const getElementText = el.children[2].children[1].children[0].children[0].textContent;
            const getElementNumber = Number(getElementText);
            if (timeoutMoneyLowerNumber > getElementNumber || timeoutMoneyUpperNumber < getElementNumber) {
                el.classList.add('section__container-none');
            } else if (timeoutMoneyLowerNumber < getElementNumber || timeoutMoneyUpperNumber > getElementNumber) {
                el.classList.remove('section__container-none');
            }
        });
    } else if(getValue.length > 0) {

///////////////////////////////////

    }
}

setInterval(timeoutMoney, 2000);

function start(bool) {
    if (bool === true) {
        funcGetCurrency();
        funcGetStars();
        funcGetReviews();
        funcGetTatings();
        getElementAll();
    } else {
        alert('errors');
    }
};
start(true);