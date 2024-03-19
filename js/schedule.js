document.addEventListener('DOMContentLoaded', function () {
    const calendarBody = document.getElementById('calendarBody');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    renderCalendar(currentMonth, currentYear);

    prevMonthBtn.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    addTaskBtn.addEventListener('click', function () {
        const taskValue = taskInput.value.trim();
        const taskDateTimeValue = new Date(taskDateTime.value);
        if (taskValue !== '') {
            taskInput.value = '';
            taskDateTime.value = '';

            // Show task on calendar
            const taskDate = taskDateTimeValue.getDate();
            const calendarCells = document.querySelectorAll('.calendar td');
            calendarCells.forEach(cell => {
                if (cell.textContent === taskDate.toString()) {
                    const taskDiv = document.createElement('div');
                    taskDiv.classList.add('task');
                    taskDiv.textContent = taskValue;
                    cell.appendChild(taskDiv);
                }
            });
        }
    });

    function renderCalendar(month, year) {
        calendarBody.innerHTML = '';
        currentMonthYear.textContent = `${getMonthName(month)} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startingDay = firstDayOfMonth.getDay();

        let date = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < startingDay) {
                    cell.textContent = '';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cell.textContent = date;
                    date++;
                }
                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    function getMonthName(monthIndex) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames[monthIndex];
    }
});
