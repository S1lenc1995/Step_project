export function allCards(token){
  return  fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  },
})
.then(response =>{
    return response.json()})  
}
