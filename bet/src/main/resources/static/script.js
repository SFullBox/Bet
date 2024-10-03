document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const cpf = document.getElementById('cpf').value;
    const aniver = document.getElementById('aniver').value; 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Criar um objeto com os dados do formulário
    const data = {
        cpf: cpf,
        aniver: aniver,
        email: email,
        senha: senha
    };

    try {
        // Configurações da requisição
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Converte os dados para JSON
        };

        const response = await fetch('http://localhost:8080/api/cadastrar', requestOptions);

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const result = await response.text(); // Lê a resposta como texto

        // Ação após o cadastro
        alert(result); // Mostra a mensagem retornada pela API
        console.log('Dados do usuário:', result);
        

    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Ocorreu um erro ao cadastrar. Tente novamente mais tarde.');
    }
});
