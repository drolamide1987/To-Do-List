document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" onchange="toggleCompleted(this)">
                <span>${taskText}</span>
                <input type="text" class="edit-input" value="${taskText}" style="display:none;">
                <button onclick="editTask(this)">Edit</button>
                <button onclick="removeTask(this)">Remove</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    window.addTask = addTask;

    function removeTask(button) {
        const li = button.parentNode;
        taskList.removeChild(li);
    }

    window.removeTask = removeTask;

    function toggleCompleted(checkbox) {
        const li = checkbox.parentNode;
        li.classList.toggle('completed', checkbox.checked);
    }

    window.toggleCompleted = toggleCompleted;

    function editTask(button) {
        const li = button.parentNode;
        const span = li.querySelector('span');
        const editInput = li.querySelector('.edit-input');

        li.classList.toggle('editing');
        if (li.classList.contains('editing')) {
            editInput.style.display = 'inline-block';
            editInput.focus();
            span.style.display = 'none';
            button.innerText = 'Save';
        } else {
            editInput.style.display = 'none';
            span.style.display = 'inline';
            span.innerText = editInput.value;
            button.innerText = 'Edit';
        }
    }

    window.editTask = editTask;
});
