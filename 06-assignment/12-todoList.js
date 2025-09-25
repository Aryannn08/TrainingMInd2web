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
    tasks.forEach((task,index) => {
        const li = document.createElement("li");
        const taskDiv = document.createElement("div");
        taskDiv.textContent = `${task.name} at ${task.time}`;
        taskDiv.classList.add("taskExpand");
        li.appendChild(taskDiv);

        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.addEventListener('click',function(){
           li.remove();
           tasks.splice(index, 1);
           console.log(tasks);
        });
        li.appendChild(btn);
        listContainer.appendChild(li);
    });
}
