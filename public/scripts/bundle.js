(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allCards = allCards;
function allCards(token) {
  return fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(response => {
    return response.json();
  });
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = getToken;
var _token = require("../function/token");
function getToken(email, password) {
  const idIncorrect = document.querySelector("#Incorrect");
  if (idIncorrect) {
    idIncorrect.remove();
  }
  try {
    return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`
      })
    }).then(response => {
      if (!response.ok) {
        _token.registrationForm.insertAdjacentHTML("beforeend", `<p id = 'Incorrect'>Incorrect username or password</p>`);
        throw new Error('Incorrect username or password');
      }
      return response.text();
    }).then(token => {
      return token;
    });
  } catch (e) {
    console.log(e);
  }
}

},{"../function/token":11}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCard = sendCard;
function sendCard(token, card) {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(card)
  }).then(response => console.log(response.status)).then(response => response);
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cardiologist = void 0;
class Cardiologist {
  constructor({
    description,
    diseases,
    doctor,
    id,
    mass,
    name,
    pressure,
    purpose,
    urgency
  }) {
    this.description = description;
    this.diseases = diseases;
    this.doctor = doctor;
    this.id = id;
    this.mass = mass;
    this.name = name;
    this.pressure = pressure;
    this.purpose = purpose;
    this.urgency = urgency;
  }
  render() {
    let container = document.querySelector('.container-cards');
    container.insertAdjacentHTML('beforeend', `<p>${this.name}</p>`);
  }
}
exports.Cardiologist = Cardiologist;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserToken = void 0;
class UserToken {
  constructor(token) {
    this.token = token;
  }
  setToken(value) {
    this.token = value;
  }
  getToken() {
    return this.token;
  }
}
exports.UserToken = UserToken;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
class Modal {
  constructor() {
    this.registrationMenu = document.querySelector('.registration_block');
  }
  openRegMenu() {
    this.registrationMenu.classList.add('active');
  }
  closeRegMenu() {
    this.registrationMenu.classList.remove('active');
  }
}
exports.Modal = Modal;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doctorsSelect = void 0;
let doctorsSelect = document.querySelector('.form-select');
exports.doctorsSelect = doctorsSelect;
let mainInputsBlanckForm = document.querySelector('.main_inputs');
doctorsSelect.addEventListener('click', () => {
  if (!doctorsSelect.value == '') {
    mainInputsBlanckForm.classList.remove('hidden');
    let extraInputs = document.querySelectorAll('.extra_inputs');
    extraInputs.forEach(el => {
      if (el.getAttribute('data') == doctorsSelect.value) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }
});

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blankForm = void 0;
var _sendCard = require("../API/sendCard");
var _token = require("./token");
var _openBlanckForm = require("./openBlanckForm");
var _getAllCards = require("../API/getAllCards");
var _cardiologist = require("../classes/cardiologist");
const card = new _cardiologist.Cardiologist();
let blankForm = document.querySelector('.blank__form');
exports.blankForm = blankForm;
blankForm.onsubmit = async e => {
  e.preventDefault();
  let fd = new FormData(e.target);
  const values = {};
  for (let pair of fd.entries()) {
    if (pair[1] == '') {
      continue;
    }
    values[pair[0]] = pair[1];
  }
  _openBlanckForm.blankMenu.classList.remove('active');
  (0, _sendCard.sendCard)(_token.modal.getToken(), values);
  let arrAllCards = await (0, _getAllCards.allCards)(_token.modal.getToken());
  console.log(arrAllCards);
  arrAllCards.forEach(el => {
    card(el).render();
    const {
      doctor: value
    } = el;
  });
};

},{"../API/getAllCards":1,"../API/sendCard":3,"../classes/cardiologist":4,"./openBlanckForm":9,"./token":11}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBlanckFormBtn = exports.closeBlankMenuBtn = exports.blankMenu = void 0;
let blankMenu = document.querySelector('.blanck-menu');
exports.blankMenu = blankMenu;
let createBlanckFormBtn = document.querySelector('.Create-blank');
exports.createBlanckFormBtn = createBlanckFormBtn;
createBlanckFormBtn.addEventListener('click', e => {
  e.preventDefault();
  blankMenu.classList.add('active');
});
let closeBlankMenuBtn = document.querySelector('.close__blank--form');
exports.closeBlankMenuBtn = closeBlankMenuBtn;
closeBlankMenuBtn.addEventListener('click', () => {
  blankMenu.classList.remove('active');
});

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openRegistration = void 0;
var _modal = require("../classes/modal");
let openRegistration = document.querySelector('.open');
exports.openRegistration = openRegistration;
let closeRegistration = document.querySelector('.registration__close');
const container = new _modal.Modal();
openRegistration.addEventListener('click', function (e) {
  e.preventDefault();
  container.openRegMenu();
});
closeRegistration.addEventListener('click', () => {
  container.closeRegMenu();
});

},{"../classes/modal":6}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrationForm = exports.modal = void 0;
var _registrationMenu = require("../function/registrationMenu");
var _getToken = require("../API/getToken");
var _createToken = require("../classes/createToken");
var _registrationMenu2 = require("./registrationMenu");
var _openBlanckForm = require("./openBlanckForm");
var _modal = require("../classes/modal");
const modal = new _createToken.UserToken();
exports.modal = modal;
const regMenu = new _modal.Modal();
let registrationForm = document.querySelector('.registration_form');
exports.registrationForm = registrationForm;
registrationForm.addEventListener('submit', async e => {
  e.preventDefault();
  const userData = {
    email: e.target.email.value,
    password: e.target.password.value
  };
  console.log(userData);
  const {
    email: email,
    password: password
  } = userData;
  let token = await (0, _getToken.getToken)(email, password);
  console.log(token);
  modal.setToken(token);
  console.log(modal.getToken());
  _registrationMenu2.openRegistration.classList.add('hidden');
  regMenu.closeRegMenu();
  _openBlanckForm.createBlanckFormBtn.classList.remove('hidden');
});

},{"../API/getToken":2,"../classes/createToken":5,"../classes/modal":6,"../function/registrationMenu":10,"./openBlanckForm":9,"./registrationMenu":10}],12:[function(require,module,exports){
"use strict";

var _registrationMenu = require("./function/registrationMenu");
var _blankFormAddInputs = require("./function/blankFormAddInputs");
var _token = require("./function/token");
var _openBlanckForm = require("./function/openBlanckForm");
var _getDataVisit = require("./function/getDataVisit.js");
console.log(_getDataVisit.blankForm);

},{"./function/blankFormAddInputs":7,"./function/getDataVisit.js":8,"./function/openBlanckForm":9,"./function/registrationMenu":10,"./function/token":11}]},{},[12]);
