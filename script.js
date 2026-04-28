const taskBtn = document.querySelector("#taskBtn");
const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");
const clearAllBtn = document.querySelector("#clearAllBtn");
const clearCompletedBtn = document.querySelector("#clearCompletedBtn");
const taskCounter = document.querySelector("#taskCounter");

function updateCounter() {
    const total = document.querySelectorAll("li").length;
    const completed = document.querySelectorAll(".completed").length;

    taskCounter.textContent = `${completed} de ${total} tarefas concluídas`;
}

function createSpan(taskInputValue) {
    const span = document.createElement('span');
    span.textContent = taskInputValue;

    span.addEventListener("click", function () {
        span.classList.toggle('completed');
        updateCounter();
    });

    return span;
}

function createDeleteButton(li) {
    const button = document.createElement('button');
    button.textContent = 'Excluir';

    button.addEventListener('click', function () {
        li.remove();
        updateCounter();
    });

    return button;
}

function createEditButton(span) {
    const button = document.createElement('button');
    button.textContent = 'Editar';

    button.addEventListener('click', function () {
        const newText = prompt("Editar tarefa:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText;
        }
    });

    return button;
}

function addTask() {
    const taskInputValue = taskInput.value.trim();

    if (taskInputValue === '') return;

    const li = document.createElement('li');

    const span = createSpan(taskInputValue);
    const deleteBtn = createDeleteButton(li);
    const editBtn = createEditButton(span);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = ""; // ✅ limpa input
    updateCounter();
}

// Enter para adicionar tarefa
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Botão adicionar
taskBtn.addEventListener("click", addTask);

// Limpar todas
clearAllBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
    updateCounter();
});

clearCompletedBtn.addEventListener("click", function () {
    const completedTasks = document.querySelectorAll(".completed");

    completedTasks.forEach(task => {
        task.parentElement.remove();
    });

    updateCounter();
});