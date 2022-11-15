import { Modal } from "../classes/modal";
export let openRegistration = document.querySelector('.open');
let closeRegistration = document.querySelector('.registration__close');


const container = new Modal()

openRegistration.addEventListener('click', function(e){
      e.preventDefault(); 
     container.openRegMenu()

})

closeRegistration.addEventListener('click',()=>{
    container.closeRegMenu()
})



