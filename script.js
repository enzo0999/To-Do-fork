const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")

function createSpan(taskInputValue){
    const span = document.createElement('span');
    span.textContent = taskInputValue;
    span.addEventListener("click", function(){
        span.classList.toggle('completed');
    
    })
    return span;
}

function createDeleteButton(li){
    const button = document.createElement('button');
    button.textContent = 'Excluir';
        button.addEventListener('click', function(){
        li.remove();
    })
    return button;
}

function addTask(){
    const li = document.createElement('li');
    const taskInputValue = taskInput.value;
    if (taskInputValue == ''){
        return
    }

    const span = createSpan(taskInputValue);
    const button = createDeleteButton(li);

    li.appendChild(span)
    li.appendChild(button)

    taskList.appendChild(li);
}

taskBtn.addEventListener("click", addTask)