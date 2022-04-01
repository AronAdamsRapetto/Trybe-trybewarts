const inputNome = document.getElementById('nome');
const inputSenha = document.getElementById('senha');
const btnEntra = document.getElementById('btn');
const blocoTexto = document.getElementById('textarea');

function entrar() {
  if (inputNome.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnEntra.addEventListener('click', entrar);

function contaCaracteres() {
  const tamanhoTexto = document.getElementById('textarea').value;
  const textoContador = document.getElementById('counter');
  let tamanhoRestante = 500;
  tamanhoRestante -= tamanhoTexto.length;
  textoContador.innerText = `${tamanhoRestante} caracteres restantes`;
}

blocoTexto.addEventListener('keyup', contaCaracteres);



function enableSubmitButton() {
  agreement.addEventListener('input', () => {
    const btnSubmitForm = document.getElementById('submit-btn');
    const conteudo = document.getElementById('agreement').checked;
    if (conteudo) {
      btnSubmitForm.disabled = false;
    } else {
      btnSubmitForm.disabled = true;
    }
  });
}

enableSubmitButton();

