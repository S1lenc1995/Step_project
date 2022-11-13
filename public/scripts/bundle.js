(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    }
    return response.text();
  }).then(token => {
    return token;
  });
}

},{"../function/token":5}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrationMenu = exports.openRegistration = void 0;
let openRegistration = document.querySelector('.open');
exports.openRegistration = openRegistration;
let closeRegistration = document.querySelector('.registration__close');
let registrationMenu = document.querySelector('#registration-form');
exports.registrationMenu = registrationMenu;
let blanckForm = document.querySelector('#blanck-form');
console.log(openRegistration);
openRegistration.addEventListener('click', function (e) {
  e.preventDefault();
  registrationMenu.classList.add('active');
  if (openRegistration.innerHTML == 'Створити візит') {
    blanckForm.classList.add('active');
  }
});
closeRegistration.addEventListener('click', () => {
  registrationMenu.classList.remove('active');
});

/* enter.addEventListener('click', ()=>{
    registrationMenu.classList.remove('active')
    openRegistration.innerHTML = 'Створити візит'
}) */

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrationForm = void 0;
var _registrationMenu = require("../function/registrationMenu");
var _getToken = require("../API/getToken");
var _createToken = require("../classes/createToken");
const modal = new _createToken.UserToken();
let registrationForm = document.querySelector('#registration_form');
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
});

},{"../API/getToken":1,"../classes/createToken":2,"../function/registrationMenu":4}],6:[function(require,module,exports){
"use strict";

var _registrationMenu = require("./function/registrationMenu");
var _blankFormAddInputs = require("./function/blankFormAddInputs");
var _token = require("./function/token");

},{"./function/blankFormAddInputs":3,"./function/registrationMenu":4,"./function/token":5}]},{},[6]);
