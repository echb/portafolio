ScrollReveal().reveal('body', { delay: 50, easing: 'ease-out' });
ScrollReveal().reveal('.section-background', { delay: 550, easing: 'ease-out' });
ScrollReveal().reveal('.section-skills', { delay: 50, easing: 'ease-out' });
ScrollReveal().reveal('.section-projects', { delay: 50, easing: 'ease-out' });
ScrollReveal().reveal('.project1', { delay: 50, easing: 'ease-out' });



const button = document.querySelector('.button')
let darks = document.querySelectorAll('h1, h2, span, p, a, .languajes, .tools, li, .project1__caption')
let darkBody = document.querySelector('body')
const mobeButton  = document.querySelector('.button')
const move = document.querySelector('.ball')

button.addEventListener('click', () => {
    darks.forEach(dark => {
        console.log(dark.classList.toggle('active'));
        });
    console.log(darkBody.classList.toggle('active-bg'));
    console.log(mobeButton.classList.toggle('active-2'));
    console.log(move.classList.toggle('move'));
})