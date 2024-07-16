document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

document.getElementById('clearCompletedButton').addEventListener('click', clearCompletedTasks);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task) {
        const taskList = document.getElementById('taskList');
        
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function(e) {
            e.stopPropagation();
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

function clearCompletedTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = taskList.getElementsByTagName('li');
    for (let i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].classList.contains('completed')) {
            taskList.removeChild(tasks[i]);
        }
    }
}