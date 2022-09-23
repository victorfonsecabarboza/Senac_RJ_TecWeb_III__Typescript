"use strict";
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
// função para verificar se os campos estão vazios
function verificarCamposVazios(...inputs) {
    inputs.forEach((campo) => {
        if (!campo.value) {
            console.log(`Campo ${campo.className} está vazio!`);
        }
    });
}
// definição do evento form
form.addEventListener('submit', function (event) {
    event.preventDefault();
    verificarCamposVazios(username, email, password, password2);
});
