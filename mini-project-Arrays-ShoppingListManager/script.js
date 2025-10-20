/*
Mini Project — Shopping List Manager 

Goal
  Manage a list of strings with add, remove last, and clear actions; render the list and count.

Exact element ids required
  itemInput, addBtn, removeBtn, clearBtn, list, countLabel

STEP 1 — Data and selection
  Create an empty list named items.
  Select the elements by id and store them with the exact names above.

STEP 2 — Render helper
  Create a function named renderAll that clears the list, appends one list item per string in items, and updates countLabel to show Count: a space and the number of items.

STEP 3 — Add
  Create a function named handleAdd that reads trimmed text from itemInput.
  When the trimmed text is not empty, add it to the end of items and render.

STEP 4 — Remove Last
  Create a function named handleRemove that removes the last item from items when it exists and render.

STEP 5 — Clear
  Create a function named handleClear that empties items and render.

STEP 6 — Wiring
  Wire addBtn to handleAdd, removeBtn to handleRemove, and clearBtn to handleClear.
  Call renderAll once so the page reflects the current state.
*/


//Step  1
const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const clearBtn = document.getElementById('clearBtn'); 
const list = document.getElementById('list');
const countLabel = document.getElementById('countLabel');

//Step  2
const items = [];

function renderAll() {
  list.innerHTML = "";
  for (const item of items) {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  }
  countLabel.textContent = items.length;
}

//Step 3
function handleAdd() {
  let value = itemInput.value.trim();
  if (!value) return;
  items.push(value);
  itemInput.value = '';
  renderAll();
  
}


//Step 4
function handleRemove() {
  if (items.length === 0) return; 
  items.pop();
  renderAll();

}

//Step 5
function handleClear() {
  items.length = 0;
  renderAll();
  
}

//Step 6 Wiring
addBtn.addEventListener('click', () => {
  handleAdd();

});

removeBtn.addEventListener('click', () => {
  handleRemove();
});

clearBtn.addEventListener('click', () => {
  handleClear();
});

renderAll();


// for (const li of list.getElementsByTagName("li")) {
//   console.log(li.textContent);
// }
//
// console.log(list.querySelectorAll('li').length)

