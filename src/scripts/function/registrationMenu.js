export let openRegistration = document.querySelector('.open');
let closeRegistration = document.querySelector('.registration__close');
export let registrationMenu = document.querySelector('#registration-form');



openRegistration.addEventListener('click', function(e){
      e.preventDefault(); 
     registrationMenu.classList.add('active')

})

closeRegistration.addEventListener('click',()=>{
    registrationMenu.classList.remove('active')
})



