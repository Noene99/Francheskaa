let h1Element = document.querySelector('h1');
let buttonElement = document.querySelector('img');

function iloveyou() {
    h1Element.textContent = 'Frances, je bent een vieze grondmol';
}



buttonElement.addEventListener('click', iloveyou);