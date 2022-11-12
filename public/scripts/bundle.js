(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _registrationMenu = require("./modals/function/registrationMenu");
var _blankFormAddInputs = require("./modals/function/blankFormAddInputs");

},{"./modals/function/blankFormAddInputs":2,"./modals/function/registrationMenu":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openRegistration = void 0;
let openRegistration = document.querySelector('.open');
exports.openRegistration = openRegistration;
let closeRegistration = document.querySelector('.registration__close');
let registrationMenu = document.querySelector('#registration-form');
let enter = document.querySelector('.enter');
let blanckForm = document.querySelector('#blanck-form');
console.log(openRegistration);
openRegistration.addEventListener('click', function (e) {
  e.preventDefault();
  if (openRegistration.innerHTML == 'В х і д') {
    registrationMenu.classList.add('active');
  }
  if (openRegistration.innerHTML == 'Створити візит') {
    blanckForm.classList.add('active');
  }
});
closeRegistration.addEventListener('click', () => {
  registrationMenu.classList.remove('active');
});
enter.addEventListener('click', () => {
  registrationMenu.classList.remove('active');
  openRegistration.innerHTML = 'Створити візит';
});

},{}]},{},[1]);
