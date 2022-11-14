import { registrationMenu } from "../function/registrationMenu" 
import { getToken } from "../API/getToken"
import {UserToken} from '../classes/createToken'
import { openRegistration} from './registrationMenu'
import { createBlanckFormBtn } from "./openBlanckForm"

const modal = new UserToken();





export let registrationForm = document.querySelector('#registration_form')
registrationForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const userData = {
        email: e.target.email.value,
        password: e.target.password.value 
    }
    console.log(userData)
    const{email: email, password: password} = userData
    let token = await getToken(email, password)
    console.log(token)
    modal.setToken(token)
    console.log(modal.getToken())
    openRegistration.classList.add('hidden')
    registrationMenu.classList.remove('active')
    createBlanckFormBtn.classList.remove('hidden')
})

