"use strict";

var data = {
  "hotels": [{
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }]
};
data.hotels.forEach(function (el) {
  var getElement = "\n        <div>\n            <img src=\"".concat(el.img, "\" alt=\"img\">\n        </div>\n        <div class=\"section__container-main-info\">\n            <div>\n                <p class=\"section__container-main-info-country\">").concat(el.address, "<span class=\"section__container-main-info-country__span\">").concat(el.country, "</span></p>\n                <h2>").concat(el.name, "</h2>\n            </div>\n            <div class=\"section__container-info\">\n                <div class=\"stars__container\">\n                \n                </div>\n                <span><span class=\"stars\">").concat(el.stars, "</span> <span></span></span>\n                <span class=\"section__container-info__link\">").concat(el.type, "</span>\n            </div>\n            <div>\n                <p>\n                    ").concat(el.description, "\n                </p>\n            </div>\n        </div>\n        <div class=\"section__container_flex\">\n            <div class=\"section__container_flex__container\">\n                <div>\n                    <img src=\"./imgs/red-star.png\" alt=\"red star\">\n                    <span class=\"section__container_flex__container__span\"><span class=\"ratings\">").concat(el.rating, "</span> - <span></span> - <span class=\"reviews_amount\">").concat(el.reviews_amount, "</span> \u043E\u0442\u0437\u044B\u0432\u043E\u0432</span>\n                </div>\n                <div class=\"section__container_flex__container-comment\">\n                    <p>\n                        ").concat(el.last_review, "\n                    </p>\n                </div>\n            </div>\n            <div class=\"section__container_flex__container-btn\">\n                <span class=\"section__container_flex__span\">\u043E\u0442 <span>").concat(el.min_price, "</span><span class=\"currency\">").concat(el.currency, "</span></span>\n                <a class=\"section__container_flex__span__link\" href=\"#\">\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C</a>\n            </div>\n        </div>\n    ");
  var parentElement = document.getElementById('posts');
  var newElement = document.createElement('div');
  newElement.classList.add('section__container');
  newElement.innerHTML = getElement;
  parentElement.append(newElement);
});

function funcGetCurrency() {
  var getCurrency = document.querySelectorAll('.currency');
  getCurrency.forEach(function (el) {
    var textElement = el.textContent;

    if (textElement === 'RUR') {
      el.textContent = '';
      var corrency = '<img class="currency__img" src="./imgs/ruble.png" alt="ruble">';
      el.innerHTML = corrency;
    }
  });
}

;

function funcGetStars() {
  var getStars = document.querySelectorAll('.stars');
  getStars.forEach(function (el) {
    var textElement = el.textContent;
    var textElementNumber = Number(textElement);

    if (textElementNumber === 0) {
      var elText = el.parentNode.children[1];
      elText.innerText = 'звёзд';
    } else if (textElementNumber === 1) {
      var _elText = el.parentNode.children[1];
      _elText.innerText = 'звезда';
    } else if (textElementNumber === 2) {
      var _elText2 = el.parentNode.children[1];
      _elText2.innerText = 'звезды';
    } else if (textElementNumber === 3) {
      var _elText3 = el.parentNode.children[1];
      _elText3.innerText = 'звезды';
    } else if (textElementNumber === 4) {
      var _elText4 = el.parentNode.children[1];
      _elText4.innerText = 'звезды';
    } else if (textElementNumber === 5) {
      var _elText5 = el.parentNode.children[1];
      _elText5.innerText = 'звёзд';
    } else {
      var _elText6 = el.parentNode.children[1];
      _elText6.innerText = 'errors';
    }

    for (var i = 0; i < textElementNumber; i++) {
      var getParent = el.parentNode.parentNode.children[0];
      var newElement = document.createElement('span');
      var imgStars = '<img src="./imgs/star.png" alt="star">';
      newElement.innerHTML = imgStars;
      getParent.append(newElement);
    }
  });
}

;

function funcGetTatings() {
  var getRatings = document.querySelectorAll('.ratings');
  getRatings.forEach(function (el) {
    var getRatingsText = el.textContent;
    var getRatingsTextNumber = Number(getRatingsText);
    var getParent = el.parentNode.children[1];

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
}

;

function funcGetReviews() {
  var getReviews = document.querySelectorAll('.reviews_amount');
  getReviews.forEach(function (el) {
    var textElement = el.textContent;
    var textElementNumber = Number(textElement);

    if (textElementNumber === 0) {
      var getParent = el.parentNode.parentNode.parentNode;
      getParent.textContent = "";
      var containerNoComments = "\n                <img class=\"img-star-gray\" src=\"./imgs/star-gray.png\" alt=\"star no comment\">\n                <p class=\"text-star-gray\">\u041D\u0435\u0442 \u043E\u0446\u0435\u043D\u043E\u043A.</p>\n            ";
      getParent.innerHTML = containerNoComments;
    }
  });
}

;

document.onclick = function (event) {
  var getElement = event.target.id;

  if (getElement === 'country') {
    document.getElementById('countryes').classList.add('header__form__container-cityes-inputs_position__container-active');
  } else if (getElement != 'country') {
    document.getElementById('countryes').classList.remove('header__form__container-cityes-inputs_position__container-active');
  } else {
    alert('errors');
  }
};

document.getElementById('reset').onclick = function () {
  var getElementCheckbox = document.querySelectorAll('.header__form__container-cityes-inputs__label');
  getElementCheckbox.forEach(function (el) {
    el.classList.remove('header__form__container-cityes-inputs__label-active');
  });
  var getElementRadio = document.querySelectorAll('.header__form__container-cityes-inputs-radio__label');
  getElementRadio.forEach(function (el) {
    el.classList.remove('header__form__container-cityes-inputs-radio__label-active');
  });
};

$(document).ready(function ($) {
  var slider = document.getElementById('range-slider');
  var snapValues = [document.getElementById('slider-snap-value-lower'), document.getElementById('slider-snap-value-upper')];
  noUiSlider.create(slider, {
    start: [0, 9999],
    connect: true,
    tooltips: true,
    range: {
      'min': 0,
      'max': 9999
    }
  });
  slider.noUiSlider.on('update', function (values, handle) {
    snapValues[handle].innerHTML = values[handle];
  });
});

function slideToggle(event) {
  var getSlideToggleArrow = event.children[1];
  getSlideToggleArrow.classList.toggle('slideToggleArrow');
  var getSlideToggle = event.parentNode.children[1];
  getSlideToggle.classList.toggle('slideToggle');
}

var arrElements = [];

function getElementAll() {
  var getElements = document.querySelectorAll('.section__container');
  getElements.forEach(function (el) {
    arrElements.push(el);
  });
}

var arrElementsSearch = [];

document.getElementById('country').onkeyup = function () {
  var inputValue = this.value;

  if (inputValue.length === 0) {
    document.querySelector('.search').classList.remove('search_flex');
    arrElements.forEach(function (el) {
      el.classList.remove('section__container-none');
    });
  } else if (inputValue.length > 0) {
    arrElements.forEach(function (el) {
      el.classList.add('section__container-none');
    });
    document.querySelector('.search').classList.add('search_flex');
    arrElementsSearch = [];
    arrElements.forEach(function (el) {
      var getCountryText = el.children[1].children[0].children[0].children[0].textContent;

      if (inputValue === getCountryText) {
        var getCountry = el;
        arrElementsSearch.push(el);
        getCountry.classList.remove('section__container-none');
        document.querySelector('.search').classList.remove('search_flex');
      }
    });
  } else {
    alert('errors');
  }
};

function getCountryItem(event) {
  var getCountryItemText = event.textContent;
  document.getElementById('country').value = getCountryItemText;
  document.querySelector('.search').classList.remove('search_flex');
  arrElements.forEach(function (el) {
    el.classList.add('section__container-none');
  });
  arrElementsSearch = [];
  arrElements.forEach(function (el) {
    var getCountryItemAllText = el.children[1].children[0].children[0].children[0].textContent;

    if (getCountryItemText === getCountryItemAllText) {
      var getCountryItemAddClass = el;
      arrElementsSearch.push(el);
      getCountryItemAddClass.classList.remove('section__container-none');
    }
  });
}

var arrElementsSearchCheckbox = [];
var arrCheckClass = [];

function funcCheckboxActive(event) {
  var getElement = event.parentNode;
  var getElementToggleClass = getElement.classList.toggle('header__form__container-cityes-inputs__label-active');
  var getValue = document.getElementById('country').value;

  if (getValue.length === 0) {
    if (getElementToggleClass === true) {
      arrElements.forEach(function (el) {
        el.classList.add('section__container-none');
      });
      arrElements.forEach(function (el) {
        var getElementText = el.children[1].children[1].children[1].children[0].textContent;
        var eventNumber = Number(event.value);
        var getElementTextNumber = Number(getElementText);
        var getElement = el;

        if (eventNumber === getElementTextNumber) {
          arrElementsSearchCheckbox.push(getElement);
          arrElementsSearchCheckbox.forEach(function (el) {
            el.classList.remove('section__container-none');
          });
        } else if (eventNumber != getElementTextNumber) {
          arrElementsSearchCheckbox.forEach(function (el) {
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
      var getElementValue = event.value;
      var getElementValueNumber = Number(getElementValue);
      arrElementsSearchCheckbox.forEach(function (el, index) {
        var getElement = el;
        var getElmentText = el.children[1].children[1].children[1].children[0].textContent;
        var getElmentTextNumber = Number(getElmentText);

        if (getElementValueNumber === getElmentTextNumber) {
          getElement.classList.add('section__container-none');
          delete arrElementsSearchCheckbox[index];
          arrCheckClass = [];
          var arrClasses = [];

          var _getElementAll = document.querySelectorAll('.header__form__container-cityes-inputs__label');

          _getElementAll.forEach(function (el) {
            var getClass = el.classList;
            getClass.forEach(function (el) {
              arrClasses.push(el);
            });
          });

          arrClasses.forEach(function (el) {
            if (el === 'header__form__container-cityes-inputs__label-active') {
              arrCheckClass.push(el);
            }
          });

          if (arrCheckClass.length === 0) {
            arrElements.forEach(function (el) {
              el.classList.remove('section__container-none');
            });
          }
        }
      });

      if (arrCheckClass.length === 0) {
        arrElements.forEach(function (el) {
          el.classList.remove('section__container-none');
        });
        var boolArray = arrElementsSearchCheckbox.some(function (el) {
          return el != undefined;
        });

        if (boolArray === true) {
          arrElements.forEach(function (el) {
            el.classList.remove('section__container-none');
          });
        }
      }
    }
  } else if (getValue.length > 0) {
    console.log(arrElementsSearch);
    console.log(getElementToggleClass);
    arrElementsSearch.forEach(function (el) {
      el.classList.add('section__container-none');
    });
  } //////////////////////////////////////////////

}

;
var boolHouse = [];

function funcRadioActive(event) {
  var noClass = document.querySelectorAll('.header__form__container-cityes-inputs-radio__label');
  noClass.forEach(function (el) {
    el.classList.remove('header__form__container-cityes-inputs-radio__label-active');
  });
  var getValue = document.getElementById('country').value;

  if (getValue.length === 0) {
    var getElement = event.parentNode;
    getElement.classList.add('header__form__container-cityes-inputs-radio__label-active');
    var getElementValue = event.value;
    arrElements.forEach(function (el) {
      var getElement = el;
      var getElementText = el.children[1].children[1].children[2].textContent;

      if (getElementValue === getElementText) {
        getElement.classList.remove('section__container-none');
      } else if (getElementValue != getElementText) {
        getElement.classList.add('section__container-none');
      }
    });
  } else if (getValue.length > 0) {}
}

;

function timeoutMoney() {
  var getValue = document.getElementById('country').value;

  if (getValue.length === 0) {
    var timeoutMoneyLower = document.getElementById('slider-snap-value-lower').textContent;
    var timeoutMoneyUpper = document.getElementById('slider-snap-value-upper').textContent;
    var timeoutMoneyLowerNumber = Number(timeoutMoneyLower);
    var timeoutMoneyUpperNumber = Number(timeoutMoneyUpper);
    arrElements.forEach(function (el) {
      var getElement = el;
      var getElementText = el.children[2].children[1].children[0].children[0].textContent;
      var getElementNumber = Number(getElementText);

      if (timeoutMoneyLowerNumber > getElementNumber || timeoutMoneyUpperNumber < getElementNumber) {
        el.classList.add('section__container-none');
      } else if (timeoutMoneyLowerNumber < getElementNumber || timeoutMoneyUpperNumber > getElementNumber) {
        el.classList.remove('section__container-none');
      }
    });
  } else if (getValue.length > 0) {///////////////////////////////////
  }
} //setInterval(timeoutMoney, 2000);


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
}

;
start(true);