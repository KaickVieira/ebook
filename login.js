//Puxando os dados do HTML
function logar(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

//Conferindo os dados 

if (nome == 'admin' && senha == 'admin2024'){
    window.location.href = 'ebook.html';

} else {
    alert('Usuário ou senha incorretos');
}

}
document.querySelector('form').addEventListener('submit', logar)

