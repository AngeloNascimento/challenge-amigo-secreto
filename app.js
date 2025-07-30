/*modifica a função add para ver se contem numeros iguais, ou se ta em branco*/

//extra adcionar botão novo jogo limpa campos e listas 
let nomesAmigos = [];//lista com os nomes dos amigos


function adicionaLista(){
    let novosNome = document.getElementById('amigo').value.trim().trimEnd();//trim() e trimEnd() removem os espaços em branco no inicio e no fim respectivamente         
    if (novosNome !== ""){//verifica se o campo input esta vazio
       nomesAmigos.push(novosNome);//se o campo estiver preenchido adiciona o nome a lista
       listaAmigos();
       limpaInput();
       
       
        
    }else {//se estiver com o campo vazio manda um alert para preencher o campo.
        alert('Por favor, insira um nome valido!');
    }
   
}
function limpaLista(){
    let nomesListados = document.getElementById('listaAmigos');
    nomesListados.innerHTML = '';
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
    }
    
}

function sorteio(){//realiza o soretio dos nomes
    if (nomesAmigos.length < 2){
        alert('participantes insuficientes!')
    }else{
        const sorteioDoNome = Math.floor(Math.random() * nomesAmigos.length);//faz o sorteio do nome
        const nomesorte = nomesAmigos[sorteioDoNome];
        limpaLista();
        document.getElementById('resultado').innerText = 'o Amigo sorteado é: ' + nomesorte;
        document.getElementById('reiniciar').removeAttribute('disabled');
      
    }
}

//função para botão de novo sorteio.
function novoSorteio(){//alterações no html botao novo, e no js função novoSorteio
    nomesAmigos = [];
    document.getElementById('resultado').innerText = '';
    document.getElementById('reiniciar').disabled = true;
     
}