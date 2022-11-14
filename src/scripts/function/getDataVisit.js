import { sendCard } from "../API/sendCard";
import { modal } from "./token";
export let blankForm = document.querySelector('.blank__form')
blankForm.onsubmit =  (e) => {
    e.preventDefault();
    let fd = new FormData(e.target)
    const values = {};
    for (let pair of fd.entries()) {
        if(pair[1] == ''){
            continue
        }
      values[pair[0]] = pair[1];
    }
    console.log(values)
   sendCard(modal.getToken(), values) 
}