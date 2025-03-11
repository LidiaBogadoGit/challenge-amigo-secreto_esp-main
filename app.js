//array
let amigos = [];

/*funcion para agregar amigo*/
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;    
    if(validarAmigo()){
        amigos.push(amigo);
        limpiarText();
        return; 
    }
console.log(amigos);
console.log(amigo);
}

/*valida que el campo no este vacio*/
function validarAmigo(){ 
    if (amigo.value.trim() == "") {
        alert("Por favor, inserte un nombre");
        return false;
    }    
    return true;    
}

/*limpia el campo de texto*/
function limpiarText(){
    document.getElementById('amigo').value = "";
}

/*funcion para agregar amigos a una lista html*/
function listaHTML() {
    let lista = document.getElementById('listaAmigos');
    // Limpiar la lista
    lista.innerHTML = ""; 
    // Recorrer el array de amigos
    amigos.forEach(function(amigo) {
        lista.innerHTML += `<l>${nombre}</li>`;
    });
}
