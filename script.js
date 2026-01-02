input = document.getElementById("input")
btnAdd = document.getElementById("btnAdd")

tasks = []
console.log(tasks)

atualizarLista = function(){
    taskList = document.getElementById("list")
    taskList.innerHTML = "";
    tasks.forEach(task => {
        tarefa = document.createElement("li");
        checkbox = document.createElement("input")
        delBtn = document.createElement("button")
        editBtn = document.createElement("button")
        checkbox.type = "checkbox"
        editBtn.classList.add("editBtn")
        delBtn.classList.add("delBtn")
        checkbox.classList.add("checkbox")
        subContainer = document.createElement("subContainer")
        subContainer.classList.add("subContainer")
        container = document.createElement("container")
        container.classList.add("container")
        tarefaText = document.createElement("span")

        tarefaText.textContent = task

    container.appendChild(tarefaText)
    container.appendChild(subContainer)
    subContainer.appendChild(checkbox)
    subContainer.appendChild(editBtn)
    subContainer.appendChild(delBtn)

    tarefa.appendChild(container)
    list.appendChild(tarefa);
    });
}

addTarefa = function(){
    newTask = input.value
    tasks.push(newTask)
    console.log(tasks)
    input.value = " "
}

atualizarLista()

btnAdd.addEventListener("click", function(){
    addTarefa()
    atualizarLista()
});
