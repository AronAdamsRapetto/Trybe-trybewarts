const inputNome = document.getElementById('nome');
const inputSenha = document.getElementById('senha');
const btnEntra = document.getElementById('btn');

function entrar() {
  if (inputNome.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnEntra.addEventListener('click', entrar);
