let addBtn = document.getElementById("addbtn");
let toDo = document.getElementById("lista-tarefa");
let addTarefa = document.getElementById("addTarefa");
let feitas = document.getElementById("lista-final");

addBtn.addEventListener('click', function () {
    if (addTarefa.value == "") {
        alert("Erro! Escreva alguma coisa antes de adicionar a tarefa!")
    } else {
        let addButton = document.createElement("button");
        let tarefaBox = document.createElement("div");
        let txt = document.createElement("p");
        let excluirButton = document.createElement("button");
        addButton.innerText = ("feito");

        txt.classList.add("txt-styling");
        excluirButton.classList.add("btn-Excluir");
        tarefaBox.classList.add("tarefa-box");
        addButton.classList.add("add-tarefa");
        txt.innerText = addTarefa.value;
        tarefaBox.appendChild(txt)
        tarefaBox.appendChild(addButton)

        toDo.appendChild(tarefaBox);
        addTarefa.value = "";
        addButton.addEventListener('click', function () {
            feitas.appendChild(tarefaBox)
            addButton.remove()


            excluirButton.innerText = ("excluir")
            tarefaBox.appendChild(excluirButton)


        })
        excluirButton.addEventListener('click', function () {
            tarefaBox.remove();

        })
    }
    })

