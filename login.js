// Criando um login com JavaScript HTML CSS  

/*     
Fazer testes do tipo:

- Selecionar e referenciar o e-mail e senha.
- Criar funções utilizando a manipulação do DOM para entender melhor como que funciona as funções HTML.
- Utilizar condições if else para criar ações na hora da validação do email e senha.
- utilizar as funções do arquivo login_senhas.js.
- executar funções que ajudem a dinamizar os inputs de email e senha.
( validação, mudança de comportamento, adição de classe, mudança de texto do innerHTML, etc...).
- Tentar conectar a pagina do arquivo menu.js em uma função que dirige o usuario a página
caso o login esteja correto.
- Integrar a página login.html com a alterar_senhas.html.

*/

// utilizando a função addEventListener, não precisa criar funções anteriores

// NÃO EXCLUIR ESSE CÓDIGO POIS ESTÁ CORRETO !!!!


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













