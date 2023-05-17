// Encuentra al elemento HTML (el botón) mediante su ID 
const miBoton = document.getElementById('miBoton');

 function handleClick() { 
    alert('¡Hola! Has hecho clic en el botón.');
 }
 // lo que hace el addEventListener es que cuando hagamos
//  click nos genere un cartel de alerta con el mensaje de:
// "¡Hola! Has hecho click en el botón." 
miBoton.addEventListener("click", handleClick);

;
