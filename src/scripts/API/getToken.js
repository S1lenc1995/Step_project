export function getToken(email,password){
fetch("https://ajax.test-danit.com/api/v2/cards/login", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email: `${email}`, password: `${password}` })
})
  .then(response => response.text())
  .then(token => console.log(token))
}