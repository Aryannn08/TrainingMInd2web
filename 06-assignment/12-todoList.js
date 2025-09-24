let tasks = [];
const listContainer = document.getElementById("list-container");

function addTask() {
    
    const inputTask = document.getElementById("inputTask");
    const inputTime = document.getElementById("inputTime");

    if (inputTask.value === '' || inputTime.value === '') {
        alert("Input field cannot be empty!");
        return;
    }

    
    const obj = {
        id: Date.now().toString(),
        name: inputTask.value,
        time: inputTime.value
    };

    tasks.push(obj);

    renderTasks();

    inputTask.value = '';
    inputTime.value = '';
}

function renderTasks() {
    listContainer.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.name} at ${task.time}`;
        listContainer.appendChild(li);
        let btn = document.createElement("button");
        btn.textContent = "Remove";
        li.appendChild(btn);
    });
}
