const btnPromo = document.getElementById('btnPromo');
const popup = document.getElementById('cadastro');

btnPromo.addEventListener('click', () => {
  popup.classList.add('active');
});

function fecharCadastro() {
  popup.classList.remove('active');
  alert('Cadastro enviado com sucesso!');
}

// Função para mostrar a seção de contato
function mostrarContato() {
  const contatoSection = document.getElementById('contato-section');
  contatoSection.style.display = 'block';
}
