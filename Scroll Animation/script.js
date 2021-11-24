const boxes = document.querySelectorAll('.box');
// const box = document.querySelector('.box');

window.addEventListener('scroll', checkBoxes); 
checkBoxes();

function checkBoxes () {
    boxes.forEach(box => {
        const triggerBottom = window.innerHeight / 5 * 4;
        const boxtop = box.getBoundingClientRect().top;
        if(boxtop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}
