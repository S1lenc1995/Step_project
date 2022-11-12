export let openRegistration = document.querySelector('.open');
let closeRegistration = document.querySelector('.registration__close');
let registrationMenu = document.querySelector('#registration-form');
let enter = document.querySelector('.enter')
let blanckForm = document.querySelector('#blanck-form')
console.log(openRegistration)

openRegistration.addEventListener('click', function(e){
      e.preventDefault(); 
      if(openRegistration.innerHTML == 'В х і д'){
     registrationMenu.classList.add('active')
      }
      if(openRegistration.innerHTML == 'Створити візит'){
        blanckForm.classList.add('active')
         }
})

closeRegistration.addEventListener('click',()=>{
    registrationMenu.classList.remove('active')
})


enter.addEventListener('click', ()=>{
    registrationMenu.classList.remove('active')
    openRegistration.innerHTML = 'Створити візит'
})
