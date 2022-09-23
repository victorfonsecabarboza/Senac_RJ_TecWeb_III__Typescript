
const form = document.querySelector('.form') as HTMLFormElement
const username = document.querySelector('.username') as HTMLInputElement
const email = document.querySelector('.email') as HTMLInputElement
const password = document.querySelector('.password') as HTMLInputElement
const password2 = document.querySelector('.password2') as HTMLInputElement

// função para verificar se os campos estão vazios
function verificarCamposVazios(...inputs: HTMLInputElement[]): void {
    inputs.forEach((campo) => {
        if (!campo.value) {
            console.log(`Campo ${campo.className} está vazio!`)
        }
    })
}

// definição do evento form
form.addEventListener('submit', function (event: Event) {
    event.preventDefault();
    verificarCamposVazios(username, email, password, password2)
});


