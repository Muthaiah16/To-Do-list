function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        var taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'; // Unicode character for X
        deleteButton.className = 'delete-btn';
        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';

        // Add functionality to remove tasks
        deleteButton.addEventListener('click', function() {
            li.parentNode.removeChild(li);
        });
    } else {
        alert('Please enter a task!');
    }
}

