
// Goal: Practice Events & DOM by wiring up interactions in a small app.

// -----------------------------------------------------------------------
// STEP A — SELECT ELEMENTS
// - Select by id: btnIncrement, countValue
// - Select by id: btnTheme
// - Select by id: taskInput, prioritySelect, priorityLabel, btnAdd, taskList
// - Select by id: demoForm, nameInput, formMsg
// - Select by id: hoverCard
const btnIncrement = document.getElementById('btnIncrement');
const countValue = document.getElementById('countValue');
const btnTheme = document.getElementById('btnTheme');
const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const priorityLabel = document.getElementById('priorityLabel');
const btnAdd = document.getElementById('btnAdd');
const taskList = document.getElementById('taskList');
const demoForm = document.getElementById('demoForm');
const nameInput = document.getElementById('nameInput');
const formMsg = document.getElementById('formMsg');
const hoverCard = document.getElementById('hoverCard');
const preview = document.getElementById('preview');
const preview2 = document.getElementById('preview2');
// -----------------------------------------------------------------------
// STEP B — CLICK: COUNTER
// - Add a click listener to btnIncrement
// - Read current number from countValue (parseInt)
// - Increase by 1 and put it back (textContent)

btnIncrement.addEventListener('click', () => {
  const value = countValue.textContent;
  let number = parseInt(value);
  number++;
  countValue.textContent = number;
});

//DONE

// -----------------------------------------------------------------------
// STEP C — THEME TOGGLE
// - Add a click listener to btnTheme
// - Toggle the "dark" class on <body> using classList.toggle

btnTheme.addEventListener('click', () => {
  const body = document.body;           // directly get the <body> element
  body.classList.toggle('dark');
});


//DONE
// -----------------------------------------------------------------------
// STEP D — INPUT + CHANGE + ENTER KEY
// - Add an input listener to taskInput (optional: show live length/preview)
// - Add a change listener to prioritySelect to update priorityLabel to "Priority: X"
// - Add a keydown listener to taskInput that checks if key === "Enter"; if so, call addTask()

//Basically e means what im doing on the next event just with e simplify
// taskInput.addEventListener('input', (e) => {
//   //e is used to target the event, when the event occurs browser passes automatically an event object to event listener
//   preview.textContent = e.target.value;
//   preview2.textContent = e.target.value.length;
// });

taskInput.addEventListener('input', () => {
  const value = taskInput.value;
  preview.textContent = value;
  preview2.textContent = value.length;
});

prioritySelect.addEventListener('change', () => {
  priorityLabel.textContent = `Priority: ${prioritySelect.value}`;
});

//Same thing happen here e its literally passing taskInput to make it simple
taskInput.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      prioritySelect.value = 'High';
      addTask();
    } else if(e.key === 'Enter') {
      addTask();
      priorityLabel.textContent = '';
     } 
 });



btnAdd.addEventListener('click', () => {
  if (taskInput.value === '') {
    btnAdd.disabled = true;
  } else {
    btnAdd.disabled = false;
    addTask();
  }
});

// -----------------------------------------------------------------------
// STEP E — CREATE TASK ELEMENTS
// - Write a function addTask() that:
//   * Reads values from taskInput and prioritySelect
//   * Creates a new <li>, sets text to the task
//   * Creates a <span class="badge"> for the priority and appends it
//   * Creates a <button> "Delete" with a data-action="delete"
//   * Appends <li> to taskList
//   * Clears taskInput and focuses it again

function addTask() {
  const value = taskInput.value;
  const select = prioritySelect.value;
  const li = document.createElement("li");
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');
  span.classList.add("badge");
  span.textContent = select;
  deleteBtn.setAttribute("data-action","delete");
  deleteBtn.textContent = 'Delete';
  li.textContent = `Task: ${value} - Priority: ${span.textContent}`;
  if (!value) {
    alert('Add a task')
    
  } else {
    li.appendChild(deleteBtn);
    taskList.append(li);
    localStorage.setItem('Task', taskList);
    taskInput.value = '';
    preview.textContent = '';
    preview2.textContent = '';

  }
};

const taskLocal = localStorage.getItem('task');
if (taskLocal) {
  console.log(`there is ${taskLocal }`);
  

  
}


// -----------------------------------------------------------------------
// STEP F — EVENT DELEGATION FOR DELETE
// - Add one click listener to taskList (the <ul>)
// - Inside, check if event.target has data-action="delete"
// - If yes, remove the parent <li>

taskList.addEventListener('click', (e) => {
  if (e.target.dataset.action === "delete"){
    const li = e.target.closest('li');
    //closest makes sure to get the li that contains the clicked element
    if (li) li.remove();
  }

});
// -----------------------------------------------------------------------
// STEP G — FORM SUBMIT (PREVENT DEFAULT)
// - Add submit listener to demoForm
// - Use event.preventDefault() to stop page reload
// - Build a friendly text using nameInput.value and show it in formMsg
// - Optionally clear the input

demoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const message = `Welcome back ${name} time to start learning more!!!`;
  formMsg.textContent = message;

});
// -----------------------------------------------------------------------
// STEP H — MOUSEOVER / MOUSEOUT
// - Add mouseover listener to hoverCard to add class "highlight"
// - Add mouseout listener to remove class "highlight"

hoverCard.addEventListener('mouseover', (e) => {
  e.target.classList.add('highlight');

});

hoverCard.addEventListener('mouseout', (e) => {
  e.target.classList.remove('highlight');
});




// -----------------------------------------------------------------------
// STEP I — BONUS IDEAS
// - Disable Add button when input is empty (use .disabled = true/false)
// - Pressing Ctrl+Enter adds a task with "High" priority automatically
// - Persist tasks to localStorage and load them on page load
//
//
//
//
// FIX AVOID INPUTS EMPTY GOING THROUGH
