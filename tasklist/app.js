// Define UI Variable

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// call a function to load all events listener
loadEventListeners();

// load event listeners
function loadEventListeners(){
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    //Remove task
    taskList.addEventListener('click', removeTask)
    //Clear Task
    clearBtn.addEventListener('click', clearAllTask)
    //Filter task event
    filter.addEventListener('keyup', filterTasks)
};

// get task from local storage
function getTasks(){
    let tasks;
    //check if local storage has any task
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
    // Create li element
    const li  = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // Create text node and append to the li.
    li.appendChild(document.createTextNode(task));
    // create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    });
}

// add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }

    // Create li element
    const li  = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // Create text node and append to the li.
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // Store In Local Storage
    storeTaskInLocalStorage(taskInput.value);
    // Clear the input
    taskInput.value = '';
    // preventDefault
    e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task){
    let tasks;
    //check if local storage has any task
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains
        ('delete-item')) {
        if (confirm('Are you Sure?')) {
            e.target.parentElement.parentElement.remove();
            // Remove from Local Storage.
            removeTaskFromLocalStorage(
                e.target.parentElement.parentElement);
        }
    }
}



// Remove Task From LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    //check if local storage has any task
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index){
        if(taskItem.textContent == task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all tasks
// first way.
// function clearAllTask(e){
//     taskList.innerHTML = '';
// }

//Second way. using while loop (MUCH FASTER)
function clearAllTask(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    // clear all tasks from LS
    clearAllTasksFromLocalStorage();
}

// LS clear all Tasks;
function clearAllTasksFromLocalStorage(){
    localStorage.clear();
}

//Filter Task event
function filterTasks(e){
    const  text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }
            else{
                task.style.display = 'none';
            }
        });
}

// Persist Task to local Storage

