
window.onload = () => { //Esta instruccion espera a que se cargue la pagina completa y despues ejecuta
//Con esto puedo poner el script en la cabecera, pero se deja en la parte inferior
    console.log("Intro a DOM desde main.js");
    const parrafo = document.getElementById('text')
    console.log(parrafo, 'muestra todo lo que esta bajo el id pasado como parametro');
    console.log(parrafo.innerHTML, 'innerhTML muestra lo que esta dentro de la etiqueta TEXT')
    console.log(parrafo.innerText, 'innerHTML muestra tambien el texto');

    parrafo.innerText = 'Cambio el texto de la etiqueta'
    console.log(parrafo.innerText);

    parrafo.innerText = '<li>Elemento 1</li><li>Elemento 2</li>' //Esto cambia el texto dentro de la etiqueta.
    parrafo.innerHTML= '<li>Elemento 1</li><li>Elemento 2</li>' //Esto cambia el HTML de la etiqueta
}
