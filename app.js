//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.
//1- Criar array de nomes
//2- implementar função para adicionar nomes a lista de amigos
//3- implmentar função para atualizar lista de amigos
//4- implementar função para sortear os amigos.
let nomesAmigos = [];//lista com os nomes dos amigos


function adicionaLista(){
    let novosNome = document.getElementById('amigo').value;
    //ainda falta verificar se é numero, limpar area do input
      
    if (novosNome.trim() != ""){//verifica se o campo input esta vazio
       nomesAmigos.push(novosNome);
       console.log(nomesAmigos); 
    }else{
        alert('digite um nome valido!')
    }
   
}