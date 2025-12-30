const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(task => addTaskToDOM(task.text, task.completed));

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTaskToDOM(taskText, false);
        tasks.push({ text: taskText, completed: false });
        saveTasks();
        taskInput.value = '';
    }
});

function addTaskToDOM(text, completed) {
    const li = document.createElement('li');
    li.className = 'task-item';
    if (completed) li.classList.add('completed');
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);

    // Toggle completed on click
    li.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
            updateTask(text, li.classList.contains('completed'));
            saveTasks();
        }
    });

    // Delete task
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
        tasks = tasks.filter(t => t.text !== text);
        saveTasks();
    });

    taskList.appendChild(li);
}

function updateTask(text, completed) {
    const task = tasks.find(t => t.text === text);
    if (task) task.completed = completed;
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
