document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio automático do formulário

        // Obtendo os valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const numero = document.getElementById("numero").value.trim();
        const dataNascimento = document.getElementById("data_nascimento").value;
        const cpf = document.getElementById("cpf").value.trim();
        const sexo = document.getElementById("sexo").value;
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const cep = document.getElementById("cep").value.trim();
        const rua = document.getElementById("rua").value.trim();
        const numeroEndereco = document.getElementById("numero-endereco").value.trim();
        const cidade = document.getElementById("cidade").value.trim();
        const estado = document.getElementById("estado").value;
        const termos = document.getElementById("termos").checked;

        // Expressões regulares para validação
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Exemplo: 123.456.789-01
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/; // Exemplo: (99) 91234-5678
        const regexCEP = /^\d{5}-\d{3}$/; // Exemplo: 12345-678

        // Validações básicas
        if (nome === "" || numero === "" || dataNascimento === "" || cpf === "" ||
            sexo === "" || email === "" || telefone === "" || cep === "" || rua === "" ||
            numeroEndereco === "" || cidade === "" || estado === "") {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }

        if (!regexCPF.test(cpf)) {
            alert("CPF inválido! Use o formato: 123.456.789-01");
            return;
        }

        if (!regexEmail.test(email)) {
            alert("E-mail inválido! Verifique o formato.");
            return;
        }

        if (!regexTelefone.test(telefone)) {
            alert("Telefone inválido! Use o formato: (99) 91234-5678");
            return;
        }

        if (!regexCEP.test(cep)) {
            alert("CEP inválido! Use o formato: 12345-678");
            return;
        }

        if (!termos) {
            alert("Você deve aceitar os termos e condições!");
            return;
        }

        // Exibir mensagem de sucesso
        alert("Formulário enviado com sucesso!");
         // Limpa o formulário após o envio
    });
});