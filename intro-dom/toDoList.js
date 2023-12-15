const toDoes = []

window.onload = () => {
    const form = document.getElementById('toDo-Form')   //guardo en form lo que esta bajo el id "toDo-Form"
    form.onsubmit = (ev) => {       //cacheo el evento que esta dentro de form
        ev.preventDefault()         //evito que refresque la pagina que es lo que hace por defecto el evento "submit"
        const todo = document.getElementById('toDo')    //obtengo todo lo que esta bajo el id de "toDo"
        toDoes.push(todo.value)     //guardo el valor de toDo 
        todo.value = ''  
        const toDoList = document.getElementById('toDoList')
        const toDoesOtherList = toDoes.map(t => '<li>' + t + '</li>')       //Con map recorro el array y ejecuta lo que fatArrow hace y lo asigna a la lista
        console.log(toDoesOtherList);
        toDoList.innerHTML = toDoesOtherList.join('')   //Concateno la lista y con toDoList modifico el HTML para que lo muestre
    }
}

