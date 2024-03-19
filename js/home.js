document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch tasks from Todo.html
    function fetchTasks() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'Todo.html', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(xhr.responseText, 'text/html');
                    const todoTasks = doc.querySelectorAll('.tasks .content');
                    const tasksContainer = document.querySelector('.tasks');

                    // Clear existing tasks
                    tasksContainer.innerHTML = '';

                    // Append tasks from Todo.html to home.html
                    todoTasks.forEach(task => {
                        tasksContainer.appendChild(task.cloneNode(true));
                    });
                } else {
                    console.error('Failed to fetch tasks. Status:', xhr.status);
                }
            }
        };
        xhr.send();
    }

    // Fetch tasks when the page loads
    fetchTasks();

    // Event listener for adding a new task
    document.getElementById('addTaskForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const inputTask = document.querySelector('.addtaskinput');
        const taskValue = inputTask.value.trim();
        const tasksContainer = document.querySelector('.tasks');

        if (taskValue !== '') {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('content');
            taskDiv.innerHTML = `
                <input type="text" class="list" value="${taskValue}" readonly>
                <div class="action">
                    <button class="edit">Done</button>
                    <button class="edit">EDIT</button>
                    <button class="edit">DELETE</button>
                </div>
            `;
            tasksContainer.appendChild(taskDiv);
            inputTask.value = '';
        }
    });
});
