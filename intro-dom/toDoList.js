//esto es para persistir datos que ingresaron por pantalla

const toDoes =JSON.parse(localStorage.getItem('toDoes')) || []              /*localStorage guarda en memoria efimera. Aca traigo todos los items que estan en memoria, si no exite, devuelve un array vacio.localStorage
                                                                                devuelve un string. Por eso lo tengo que parsear a un JSON para que JavaScript pueda usarlo*/

const render = () => {
    const toDoList = document.getElementById('toDoList')                    //me traigo la lista que tiene el id toDoList
    const toDoesOtherList = toDoes.map(t => '<li>' + t + '</li>')           //Con map recorro el array de toDoes que ingreso el usuario (Linea 25) y ejecuto fatArrow (creo cada uno de los elementos --<li></li>--)
    toDoList.innerHTML = toDoesOtherList.join('')                           //Concateno la lista y con toDoList modifico el HTML
    
    //document.querySelectorAll('#toDoList')                                //Permite buscar por ID, clase, etiquetas. Devuelve Nodos    

    const elements = document.querySelectorAll('#toDoList li')              //quiero buscar todos lo elementos que estan dentro del listado (con querySelectorAll traio todos los li que estan bajo el id 'toDoList').
    elements.forEach((element, i) => {                                      //Recorro el arrray de elementos
        element.addEventListener('click', () =>{                            //Aca agrego un escuchador de evento, en este caso, click
            element.parentNode.removeChild(element)                         /*La clase padre, puede eliminar a la hija. Por eso element.parentNode(esto es ul) element.parentNode.removeChild(este es el hijo, 
                                                                                el elemento propiamente dicho)*/
            toDoes.splice(i, 1)                                             //Elimino el elemento de la lista donde guarde lo que ingresó el usuario (Linea 25)
            updateToDoes(toDoes)                                            //Actualizo el valor del localStorage (sobreescribo el valor de toDoes)
            render()                                                        //Vuelvo a llamar a render para que actualice los indices de la lista
        })            
    })
}

const updateToDoes = (toDoes) => {
    localStorage.setItem('toDoes', JSON.stringify(toDoes))
}

window.onload = () => {
    render()
    const form = document.getElementById('toDo-Form')                       //Guardo en form lo que esta bajo el id "toDo-Form"
    form.onsubmit = (ev) => {                                               //Cacheo el evento que esta dentro de form
        ev.preventDefault()                                                 //Evito que refresque la pagina que es lo que hace por defecto el evento "submit"
        const todo = document.getElementById('toDo')                        //Obtengo todo lo que esta bajo el id de "toDo". Esta es la lista (<ul></ul>)
        toDoes.push(todo.value)                                             //Guardo el valor de toDo. En todo.value esta el valor de lo que ingreso el usuario                              
        updateToDoes(toDoes)                                                //Convierte el parametro en un String y lo guardo en localStorage. Actualizo el valor de toDoes
        todo.value = ''                                                     //Lo vuelvo a vacio, pero que no refresque la pagina
        render()                                                            //Llamo a la funcion de render
    }
}

