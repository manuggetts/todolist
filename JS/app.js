document.getElementById('add-task').addEventListener('click', function() {
    const taskTitle = document.getElementById('task-title').value;
    if (taskTitle) {
        addTask(taskTitle);
        document.getElementById('task-title').value = '';
    }
});

function addTask(taskTitle) {
    const tasksList = document.querySelector('.tasks-list');
    
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    taskContent.textContent = taskTitle;

    const doneCheckbox = document.createElement('div');
    doneCheckbox.classList.add('done-checkbox');
    doneCheckbox.addEventListener('click', function() {
        doneCheckbox.classList.toggle('checked');
        taskDiv.classList.toggle('done');
    });

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    editButton.addEventListener('click', function() {
        openEditModal(taskContent);
    });

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-btn');
    removeButton.innerHTML = '<i class="fas fa-trash"></i>';
    removeButton.addEventListener('click', function() {
        tasksList.removeChild(taskDiv);
    });

    taskDiv.appendChild(doneCheckbox);
    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(editButton);
    taskDiv.appendChild(removeButton);
    
    tasksList.appendChild(taskDiv);
}

function openEditModal(taskContent) {
    const modal = document.querySelector('.modal');
    const modalInput = modal.querySelector('input');
    const saveButton = modal.querySelector('button');

    modal.style.display = 'flex';
    modalInput.value = taskContent.textContent;

    saveButton.onclick = function() {
        taskContent.textContent = modalInput.value;
        modal.style.display = 'none';
    }
}

document.querySelector('.modal').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

function updateTimeAndDate() {
    const timeElement = document.getElementById('time');
    const dayElement = document.getElementById('day');
    const now = new Date();
    
    const timeString = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const dayString = now.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    timeElement.textContent = timeString;
    dayElement.textContent = dayString;
}

setInterval(updateTimeAndDate, 1000);
