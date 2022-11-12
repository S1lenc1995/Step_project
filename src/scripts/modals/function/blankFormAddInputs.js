export let doctorsSelect = document.querySelector('.form-select')
let mainInputsBlanckForm = document.querySelector('.main_inputs')

doctorsSelect.addEventListener('click', ()=>{
    if(!doctorsSelect.value == ''){
        mainInputsBlanckForm.classList.remove('hidden')
    let extraInputs = document.querySelectorAll('.extra_inputs');
    extraInputs.forEach((el)=>{
        if(el.getAttribute('data') == doctorsSelect.value){
            el.classList.remove('hidden')
        } else{
            el.classList.add('hidden')
        }
    })
}})