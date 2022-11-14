let blankMenu = document.querySelector('.blanck-menu')
export let createBlanckFormBtn = document.querySelector('.Create-blank')
createBlanckFormBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    blankMenu.classList.add('active')
})
export let closeBlankMenuBtn = document.querySelector('.close__blank--form') 
closeBlankMenuBtn.addEventListener('click', ()=>{
    blankMenu.classList.remove('active')
})