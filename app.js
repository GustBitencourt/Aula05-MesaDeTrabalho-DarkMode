let btn = document.querySelector('#btn');
let varli = document.querySelector('li');


btn.addEventListener('click',function(event){
    event.preventDefault()
    modoNoturno = document.body.style.background = ' rgba(0, 0, 0, 0.9)',
    texto = document.querySelectorAll('li'); //armazena as li's em um array
    for (const lista of texto) { // for of percorre os arrays de li's alterando cada uma
        lista.style.backgroundColor = 'rgba(8, 8, 8, 0.562)';
        lista.style.color = 'white';
    }
})

