export function sendCard(token, card){
fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body:  JSON.stringify(card)
})
  .then(response => console.log(response.status))
  .then(response => console.log(response))
}