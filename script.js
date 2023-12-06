let standBy = document.getElementById("lista-tarefa");
let nameTask = document.getElementById('addTarefa');

function addTask() {
    let tarefaBox = document.createElement("li");
    tarefaBox.classList.add("tarefaBox");
    let txt = document.createElement("p");
    txt.innerHTML = nameTask.value;
    tarefaBox.appendChild(txt);
    let btnExcluir = document.createElement("button");
    btnExcluir.classList.add("btnEx-stand");
    btnExcluir.innerText = "Excluir"
    tarefaBox.appendChild(btnExcluir);
    document.getElementById("lista-tarefa").appendChild(tarefaBox);
}

    let btnExcluir = document.getElementsByClassName("btnEx-stand");
    btnExcluir.addEventListener("click", function() {
        standBy.innerHTML = "";
    });
