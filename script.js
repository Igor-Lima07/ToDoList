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
        checkbox.type = "checkbox"
        checkbox.classList.add("checkbox")
        container = document.createElement("container")
        container.classList.add("container")
        tarefaText = document.createElement("span")

        tarefaText.textContent = task


    container.appendChild(tarefaText)
    container.appendChild(checkbox)

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
