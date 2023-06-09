// Select the necessary elements
const form = document.querySelector('.input-field');
const input = document.querySelector('input');
const taskList = document.querySelector('.task-list');

// Function to add a new task
function addTask(event) {
    // to prevent the page from reloading on form submission
    event.preventDefault();
    // get the value of the input field
    const inputValue = input.value;
    console.log(inputValue);
    // create the necessary elements for the new task
    const listItem = document.createElement('li');
    const taskDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskName = document.createElement('span');
    taskName.innerText = inputValue;
    const deleteButton = document.createElement('button');
    // add the necessary classes and icons to the buttons
    taskDiv.classList.add('task-info');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = `<i class="fas fa-trash" ></i>`

    // append the necessary elements to the li and ul
    taskList.appendChild(listItem);
    listItem.appendChild(taskDiv);
    listItem.appendChild(deleteButton);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskName);
    // clear the input field after adding the new task
    input.value = '';
}

// Function to modify a task
function taskModify(event) {
    const clickedEle = event.target;
    console.log(clickedEle);
    // check if the delete button was clicked
    if (clickedEle.classList[1] === 'fa-trash') {
        const task = clickedEle.parentElement.parentElement;
        task.remove();
    }

    // check if the text was clicked
    if (clickedEle.tagName.toLowerCase() === 'span'){
        const task = clickedEle.innerHTML;
        clickedEle.innerHTML = `<input class="edit-input" type="text" value="${task}"/>`;

        const editInput = clickedEle.querySelector('input');
        editInput.addEventListener('blur', ()=>{
            const newValue = editInput.value;
            clickedEle.innerHTML = newValue;
        });
    }
}

// Event listeners to add a new task and edit, delete a task
form.addEventListener('submit', addTask);
// Event listeners to add a new task and edit, delete a task
taskList.addEventListener('click', taskModify)