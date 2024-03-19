document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.inputcontainer');
    const tableBody = document.querySelector('tbody');
    const calcButton = document.querySelector('.calc');
    const clearButton = document.querySelector('.clear');

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const courseName = form.querySelector('input[type="text"]').value;
        const unitLoad = parseFloat(form.querySelector('input[type="number"]').value);
        const grade = form.querySelector('select').value;

        // Validate unit load
        if (unitLoad < 0.5 || unitLoad > 10 || isNaN(unitLoad)) {
            alert("Unit load must be between 0.5 and 10.");
            return;
        }

        // Append the new row to the table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${courseName}</td>
            <td>${unitLoad}</td>
            <td>${grade}</td>
        `;
        tableBody.appendChild(newRow);

        // Clear the form inputs after submission
        form.reset();
    });

    // Event listener for CGPA calculation
    calcButton.addEventListener('click', function () {
        const rows = tableBody.querySelectorAll('tr');
        let totalGradePoints = 0;
        let totalUnitLoads = 0;

        rows.forEach(function (row) {
            const unitLoad = parseFloat(row.children[1].textContent);
            const grade = row.children[2].textContent;

            // Calculate grade points
            let gradePoint;
            switch (grade) {
                case 'A':
                    gradePoint = 5;
                    break;
                case 'B':
                    gradePoint = 4;
                    break;
                case 'C':
                    gradePoint = 3;
                    break;
                case 'D':
                    gradePoint = 2;
                    break;
                case 'E':
                    gradePoint = 1;
                    break;
                case 'F':
                    gradePoint = 0;
                    break;
                default:
                    gradePoint = 0;
            }

            // Accumulate total grade points and unit loads
            totalGradePoints += gradePoint * unitLoad;
            totalUnitLoads += unitLoad;
        });

        // Calculate CGPA
        const cgpa = totalGradePoints / totalUnitLoads;

        // Display CGPA
        alert(`Your CGPA is: ${cgpa.toFixed(2)}`);
    });

    // Event listener for clearing the table with confirmation
    clearButton.addEventListener('click', function () {
        const confirmation = confirm("Are you sure you want to clear the table?");
        if (confirmation) {
            tableBody.innerHTML = '';
        }
    });
});
