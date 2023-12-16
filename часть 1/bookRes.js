let btn = document.querySelector('.menu-button');
let box = document.querySelector('.menu-box');
let lines = document.querySelectorAll('.menu-line');

btn.addEventListener('click', ()=>{
    box.style.height != '200px' ? (
        box.style.height = '200px',
        box.style.width = '100px',
        box.style.opacity = '1',
        lines[0].style.transform = 'rotate(45deg)',
        lines[0].style.top = '15px',
        lines[1].style.opacity = '0',
        lines[2].style.transform = 'rotate(-45deg)',
        lines[2].style.top = '15px'
    ) : (
        box.style.height = '100%',
        box.style.width = '100%',
        box.style.opacity = '0',
        lines[0].style.transform = 'rotate(0deg)',
        lines[0].style.top = '5px',
        lines[1].style.opacity = '1',
        lines[2].style.transform = 'rotate(0deg)',
        lines[2].style.top = '25px'
    )
})