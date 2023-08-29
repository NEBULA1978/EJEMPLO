function saludar(n, m) {
  return `Hola ${n}, el numero es ${m}`;
  
}
//para que no carge el resultado automaticamente metemos dentro de funcion
function iniciar(){
    let resultado=saludar(" Jab", 6);
    alert(resultado);
}

//creo evento me da fallo y haago funcion
function todo_preparado(){
    document.getElementById("boton1").onclick = iniciar;
    
    document.getElementById("boton2").onclick = ir_a_una_web;
    
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón por su id
    var boton3 = document.getElementById("boton3");

    // Agregar un evento de clic al botón
    boton3.addEventListener("click", function() {
        // Redirigir a la página "comillas-invertit.html"
        window.location.href = "comillas-invert.html";
    });
});


//boton para ir a una pagina web
function ir_a_una_web(){
    location.href="http://www.html6.es";
}

//hasta que no carge html no entra javascript
window.onload = todo_preparado;