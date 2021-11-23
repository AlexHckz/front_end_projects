const barreRecherche = document.querySelector('.container')
const input = document.querySelector('.search')
const bouton = document.querySelector('.btn')


bouton.addEventListener('click', () => { 
        barreRecherche.classList.toggle('active');
        input.focus();
        })