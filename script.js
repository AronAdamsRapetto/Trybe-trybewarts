let email = document.getElementsByName('email');
let senha = document.getElementsByName('senha');
let btn = document.getElementsByClassName('btn');

btn.addEventListener("click", entrar);

function entrar(){
    if (email.value === "tryber@teste.com" and senha === "123456"){
        window.alert(Olá, Tryber!);
    } else {
        window.alert(Email ou senha inválidos.);
    }
};