import { sendCard } from "../API/sendCard";
import { modal } from "./token";
import { blankMenu } from "./openBlanckForm";
import { allCards } from "../API/getAllCards";
import { Cardiologist } from "../classes/cardiologist";

const card = new Cardiologist


export let blankForm = document.querySelector('.blank__form')
blankForm.onsubmit = async (e) => {
    e.preventDefault();
    let fd = new FormData(e.target)
    const values = {};
    for (let pair of fd.entries()) {
        if(pair[1] == ''){
            continue
        }
      values[pair[0]] = pair[1];
    }
    blankMenu.classList.remove('active')
   sendCard(modal.getToken(), values) 
   let arrAllCards = await allCards(modal.getToken())
   console.log(arrAllCards)
   arrAllCards.forEach((el)=>{
    card(el).render()
    const{doctor: value} = el
    
   })
}