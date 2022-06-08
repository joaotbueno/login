// Criando um evento para validação de usuário  



let botao = document.querySelector('.button');

botao.addEventListener('click', function() {

    const usuario = document.querySelector('.email');
    const senha = document.querySelector('.password');

    let mostraUsuario = usuario.value;
    let mostraSenha = senha.value;

   if(mostraUsuario === 'joao' && mostraSenha === 'Joao17Carlos') {
       alert(`Usuario permitido. Seja Bem-Vindo, ${mostraUsuario}! `);
   } else {
       alert('Usuario negado');
   }
});













