const hamburger = document.querySelector('.hamburger')
const navHidden = document.querySelector('.nav-hidden')

hamburger.addEventListener('click',()=>{
    navHidden.classList.toggle('nav-shown')
})