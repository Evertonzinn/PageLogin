const login = '';
const password = '';
const usuario = {
    login,
    password
};

let usuarios = [];

if (localStorage.usuarios) {
    usuarios = JSON.parse(localStorage.usuarios);
}

usuarios.push(usuario);

localStorage.usuarios = JSON.stringify(usuarios);

const login = '';
const password = '';

if (localStorage.usuarios) {
    let usuarios = JSON.parse(localStorage.usuarios);

    for (let usuario of usuarios) {
        if (usuario.login === login && usuario.password === password) {
            localStorage.logado = true;
            window.location.href = './recados.html';
            break;
        }
    }
} else {

}

const titulo = '';
const texto = '';
let id = 0;
const idClicado = 2;

let recados = [];

if (localStorage.recados) {
    recados = JSON.parse(localStorage.recados);
    id = recados.length;

    for (let recado of recados) {
        if (recado.id === idClicado) {
            const index = recados.indexOf(recado);

            recados[index] = {
                titulo: 'Novo título',
                texto: 'Novo Texto',
                id: recados[index].id
            };

            delete recados[index];

            localStorage.recados = JSON.stringify(recados);
            break;
        }
    }
}