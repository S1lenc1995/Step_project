import {registrationForm} from '../function/token'

export function getToken(email,password){
 
  const idIncorrect = document.querySelector("#Incorrect");
  if (idIncorrect) {
    idIncorrect.remove();
  }
  try{
    return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email: `${email}`, password: `${password}` })
})
  .then(response =>{
    if(!response.ok){
      registrationForm.insertAdjacentHTML(
        "beforeend",
        `<p id = 'Incorrect'>Incorrect username or password</p>`
      );
      throw new Error ('Incorrect username or password')
    }

  return response.text()
   })
  .then(token => {
    return token})
  }
  catch(e){
    console.log(e)
    }
} 

