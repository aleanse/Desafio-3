document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário até a validação

    let camposObrigatorios = ["nome", "numero", "data_nascimento", "cpf", "sexo", "email", "telefone", "cep", "rua", "numero-endereco", "cidade", "estado"];
    
    for (let id of camposObrigatorios) {
        let campo = document.getElementById(id);
        if (!campo.value.trim()) {
            alert(`Por favor, preencha o campo: ${campo.previousElementSibling.innerText}`);
            campo.focus(); // Coloca o cursor no campo vazio
            return; // Interrompe a execução para corrigir o campo
        }
    }

    alert("Formulário enviado com sucesso!");
    this.submit(); // Envia o formulário se estiver válido
});