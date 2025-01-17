document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') return;

    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    newTask.addEventListener('click', function () {
        newTask.classList.toggle('completed');
    });

    taskList.appendChild(newTask);
    taskInput.value = '';
});
