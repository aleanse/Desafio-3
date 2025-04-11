
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  limparErros(); // Limpa mensagens anteriores

  const form = e.target;
  let valido = true;
  const email = form.email.value.trim();
  const nome = form.nome.value.trim();
  const dataNascimento = form.data_nascimento.value;
  const userId = form.userId.value.trim();
  const senha = form.senha.value.trim();
  const cep = form.cep.value.trim();
  const cpf = form.cpf.value.trim();
  const numero = form.numero.value.trim();
  
  // Verifica se campos estão vazios
  

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    alert("E-mail inválido");
    valido = false;
  }

  if (!/^\d{8}$/.test(cep)) {
    alert("cep deve conter exatamente 8 dígitos numéricos");
    valido = false;
  }
  if (!/^\d{11}$/.test(cpf)) {
    alert("CPF deve conter exatamente 11 dígitos numéricos");
    valido = false;
  }
  if (isNaN(numero)) {
    alert("Digite um número válido");
    valido = false;
  }
 

  if (!valido) return;

  // Armazenar os dados no localStorage
  localStorage.setItem('userId', userId);
  localStorage.setItem('senha', senha);

  alert('Inscrição realizada com sucesso!');
  window.location.href = 'login.html';

});



function limparErros() {
  const erros = document.querySelectorAll('.mensagem-erro');
  erros.forEach(erro => erro.remove());
}