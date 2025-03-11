//array
let amigos = [];

/*funcion para agregar amigo*/
function agregarAmigo(){
    if(validarAmigo()){
        let amigo = document.getElementById('amigo').value;
        amigos.push(amigo);
        limpiarText();
        listaHTML();
        console.log(amigos);
        console.log(amigo);
        return; 
    }

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
function limpiarText() {
    document.getElementById('amigo').value = "";
}

/*funcion para agregar amigos a una lista html*/
function listaHTML() {     
    let lista = document.getElementById('listaAmigos');
    // Limpiar la lista
    lista.innerHTML = "";
    // Recorrer el array de amigos
    amigos.forEach((amigo) => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

/*funcion para sortear amigo*/
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoAleatorio = amigos[indiceAleatorio];
    
    // Mostrar el resultado en HTML
    let resultado = document.getElementById('resultado');
    resultado.textContent = "Amigo aleatorio seleccionado: " + amigoAleatorio;    
    return;
}