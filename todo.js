const taskList = document.getElementById('task-list');

function addTask() {
  const newTask = document.getElementById('new-task').value;
  if (newTask) {
    const listItem = document.createElement('li');
    listItem.textContent = newTask;

    const completeButton = document.createElement('span');
    completeButton.classList.add('complete-task');
    completeButton.textContent = '✔';
    completeButton.addEventListener('click', function() {
      listItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete-task');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    document.getElementById('new-task').value = '';
  }
}
