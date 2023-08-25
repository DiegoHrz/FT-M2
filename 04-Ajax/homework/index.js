
const URL_BASE = '//localhost:5000/amigos';
const listaUsuarios = document.querySelector('#listaAmigos')

const createListItems = (amigo) => {
    const li = document.createElement('li');
    li.innerHTML = `${URL_BASE}/`;
    listaUsuarios.appendChild(li)
}

const showAmigos = (amigos) =>{
    amigos.forEach(createListItems)
}

$.get(`${URL_BASE}/`,showAmigos);



$.ajax({
    url: "/script.cgi",     //localhost:5000
    type: "DELETE",         //DELETE
    success: () =>{}        //callback q se realiza al terminar
})