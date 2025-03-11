//crea array
let amigos = [];
//funcion para agregar amigo
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;    
    if(validarAmigo()){
        amigos.push(amigo);    
        console.log(amigos);
        console.log(amigo);
        limpiarText();
        return; 
    }
}
//valida que el campo no este vacio
function validarAmigo(){ 
    if (amigo.value.trim() == "") {
        alert("Por favor, inserte un nombre");
        return false;
    }    
    return true;    
}
//limpia el campo de texto
function limpiarText(){
    document.getElementById('amigo').value = "";
}