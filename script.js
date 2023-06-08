const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Add event listener to the addTask button
addTask.addEventListener('click', function() {
  if (inputTask.value === '') {
    alert('Please enter a task');
  } else {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = inputTask.value;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    taskContainer.appendChild(task);

    inputTask.value = '';

    // Event listener for the checkButton
    checkButton.addEventListener('click', function() {
      li.style.textDecoration = 'line-through';
    });

    // Event listener for the deleteButton
    deleteButton.addEventListener('click', function() {
      task.remove();
    });
  }
});



