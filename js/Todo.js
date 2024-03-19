document.addEventListener('DOMContentLoaded', function () {
    var tasks = [];

    function addTask(event) {
        event.preventDefault(); // Prevent form submission

        var inputTask = document.querySelector('.addtaskinput');
        var taskValue = inputTask.value.trim();

        if (taskValue !== '') {
            tasks.push({ text: taskValue, completed: false });
            updateTaskList();
            inputTask.value = '';
        }
    }

    function updateTaskList() {
        var tasksContainer = document.querySelector('.tasks');
        tasksContainer.innerHTML = '';

        tasks.forEach(function (task, index) {
            var taskDiv = document.createElement('div');
            taskDiv.classList.add('content');

            var taskInput = document.createElement('input');
            taskInput.type = 'text';
            taskInput.classList.add('list');
            taskInput.value = task.text;
            taskInput.readOnly = true;

            if (task.completed) {
                taskInput.classList.add('completed');
            }

            var actionDiv = document.createElement('div');
            actionDiv.classList.add('action');

            var tickButton = document.createElement('button');
            tickButton.classList.add('edit');
            tickButton.textContent = 'Done';
            tickButton.addEventListener('click', function () {
                toggleTask(index);
            });

            var editButton = document.createElement('button');
            editButton.classList.add('edit');
            editButton.textContent = 'EDIT';
            editButton.addEventListener('click', function () {
                editTask(index);
            });

            var deleteButton = document.createElement('button');
            deleteButton.classList.add('edit');
            deleteButton.textContent = 'DELETE';
            deleteButton.addEventListener('click', function () {
                deleteTask(index);
            });

            actionDiv.appendChild(tickButton);
            actionDiv.appendChild(editButton);
            actionDiv.appendChild(deleteButton);

            taskDiv.appendChild(taskInput);
            taskDiv.appendChild(actionDiv);

            tasksContainer.appendChild(taskDiv);
        });
    }

    function editTask(index) {
        var newTask = prompt('Edit Task:', tasks[index].text);
        if (newTask !== null) {
            tasks[index].text = newTask.trim();
            updateTaskList();
        }
    }

    function deleteTask(index) {
        var confirmDelete = confirm('Are you sure you want to delete this task?');
        if (confirmDelete) {
            tasks.splice(index, 1);
            updateTaskList();
        }
    }

    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        updateTaskList();
    }

    var addTaskForm = document.querySelector('.addcontainer');
    addTaskForm.addEventListener('submit', addTask);

    updateTaskList();
});
