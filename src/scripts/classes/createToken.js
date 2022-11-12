import { registrationMenu } from "../function/registrationMenu" 
import { getToken } from "../API/getToken"

export let registrationForm = document.querySelector('#registration_form')
registrationForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const userData = {
        email: e.target.email.value,
        password: e.target.password.value 
    }
    console.log(userData)
    const{email: email, password: password} = userData
    getToken(email, password)
})

