export class Modal{
    constructor(){
       this.registrationMenu = document.querySelector('.registration_block')
    }
    openRegMenu(){
       this.registrationMenu.classList.add('active')
    }
    closeRegMenu(){
       this.registrationMenu.classList.remove('active')
    }
}