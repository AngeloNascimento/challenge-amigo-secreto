//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.
//1- Criar array de nomes*
//2- implementar função para adicionar nomes a lista de amigos*
//3- implmentar função para atualizar lista de amigos*
//4- implementar função para sortear os amigos.*
let nomesAmigos = [];//lista com os nomes dos amigos


function adicionaLista(){
    let novosNome = document.getElementById('amigo').value.trim().trimEnd();//trim() e trimEnd() removem os espaços em branco no inicio e no fim respectivamente         
    if (novosNome != ""){//verifica se o campo input esta vazio
       nomesAmigos.push(novosNome);//se o campo estiver preenchido adiciona o nome a lista
       //console.log(nomesAmigos);
       listaAmigos();
       limpaInput();
       
        
    }else {//se estiver com o campo vazio manda um alert para preencher o campo.
        alert('digite um nome valido!');
    }
   
}
function limpaInput(){//limpa o campo ao adicionar o nome na lista
    novosNome = document.querySelector('input');
    novosNome.value = '';
}
function listaAmigos(){//exibe o nome dos amigos adicionados a lista
    let nomesListados = document.getElementById('listaAmigos');
    nomesListados.innerHTML = '';
    for(let i = 0; i < nomesAmigos.length; i++ ){
        let itemNome = document.createElement('li');
        itemNome.textContent = nomesAmigos[i];
        nomesListados.appendChild(itemNome);
        //console.log(nomesListados);
    }
    
}

function sorteio(){
    if (nomesAmigos.length < 2){
        alert('participantes insuficientes!')
    }else{
        const sorteioDoNome = Math.floor(Math.random() * nomesAmigos.length);
        const nomesorte = nomesAmigos[sorteioDoNome];
        document.getElementById('resultado').innerText = "o Amigo sorteado é: " + nomesorte;
      
    }

    

}