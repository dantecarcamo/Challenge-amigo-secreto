// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let lista = [];


function agregarAmigo() {
    var nombreAmigo = document.getElementById('amigo').value;
     //Si se apreta el click sin agregar el nombre
    if (nombreAmigo=='') {
        asignarTextoElemento('p',`Por favor, inserte un nombre.`);
        //alert('Por favor, inserte un nombre')
        limpiarCaja();
    } else {
        if(verificarNombre(nombreAmigo)){
            //Si el nombre ya está en la lista:
            asignarTextoElemento('p',`El nombre ${nombreAmigo} ya está en la lista.`);
            limpiarCaja();
    
        } else {
            
            //El nombre ya está verificado y no está en la lista:
            
            listNode=document.getElementById('listaAmigos'),
            liNode=document.createElement("LI"),
            txtNode=document.createTextNode(nombreAmigo);
    
            liNode.appendChild(txtNode);
            listNode.appendChild(liNode);
    
    
            lista.push(nombreAmigo)  //actualiza lista.
            numeroDeAmigos=lista.length; //actualiza el numero de lementos de lista.
            limpiarCaja();
            asignarTextoElemento('p',``);
            console.log(lista)
            console.log(numeroDeAmigos)
        }
    }
    return;
}

function verificarNombre(nombreAmigo) {
    //Para cada nombre de la lista se compara con el nuevo ingresado.
    for (var i = 0; i < lista.length; i++) {
        if (nombreAmigo == lista[i]) { 
            return true; // Si encuentra el nombre, devuelve true
        }
    }
    return false; // Si termina el bucle, devuelve false
}



function sortearAmigo() {
    let numeroGenerado =  Math.floor(Math.random()*numeroDeAmigos)+1;
    console.log(numeroGenerado);
    let amigoSecreto=lista[numeroGenerado-1];
    asignarTextoElemento('p2',`Tu amigo(a) secreto(a) es: ${amigoSecreto}`); //Se muestra el resultado en pantalla.
 
    console.log(amigoSecreto);
    borrarLista();  //Una vez sorteado entonces se borra la lista de la pantalla.
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function borrarLista() {
    let listNode = document.getElementById('listaAmigos'); 
    let items = listNode.getElementsByTagName('li'); 
    
    for (let i = items.length - 1; i >= 0; i--) {
        listNode.removeChild(items[i]); 
    }
}