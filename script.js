let standBy = document.getElementById("lista-tarefa");
let nameTask = document.getElementById('addTarefa');


function addTask() {
   
    if (nameTask.value == "") {
        alert("Escreva algo antes de adicionar");
    } else {
       standBy.innerHTML += `<li class="tarefa-box">${nameTask.value} <button id="btn-finalizar" onclick="finalizar()">Finalizar</button> <button id="btn-editar" onclick="editar()">Editar</button></li>`;
       nameTask.value = "";
    }
}

function finalizar() {
   let finalizada = standBy.innerHTML = `<li class="tarefa-box">${nome.value} <button id="btn-excluir" onclick="excluir()">Excluir</button> <button id="btn-retornar" onclick="retornar()">Retornar</button></li>`;
   standBy.innerHTML = "";
    let listaF = document.getElementById("lista-final");
    listaF.innerHTML = finalizada;
}
