// 🧠 STEP 1: SELECT ELEMENTS FROM THE PAGE
// Select the input where users type their todo (id="todoInput")
// Select the button to add the todo (id="addBtn")
// Select the unordered list where todos will appear (id="todoList")

// 💾 STEP 2: LOAD TODOS FROM LOCALSTORAGE
// Try to get the key "todos" from localStorage
// If it exists, parse the JSON string into an array
// If it doesn’t exist, start with an empty array
// Display any saved todos

// 🎯 STEP 3: ADD A TODO
// When the user types something and clicks the button:
// - create a new todo string
// - add it to the todos array
// - save the updated array to localStorage
// - update the page and clear the input

// 🔄 STEP 4: RENDER TODOS
// - Clear the list
// - Loop through todos and create a <li> for each
// - Add a ❌ button to delete the todo

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");





let todos = JSON.parse(localStorage.getItem('todos')) || [];

renderTodos(); //hosting to make sure to update all the elements of the todo


addBtn.addEventListener('click', () => {
  let todo = todoInput.value.trim();
  todos.push(todo);
  localStorage.setItem('todos', todos);
  renderTodos();
});



function renderTodos() {
  const li = document.createElement('li');
  const button = document.createElement('button');
  todoList.innerHTML = '';
  todos.forEach(todo => {
    li.textContent = todo;
    todoList.append(li);
    todoList.append(button);

  });

}



// const song = {
//   title:  
//   artist: todoList.value
// };
//
// console.log(song.title);
//




































 













// let todos = JSON.parse(localStorage.getItem("todos")) || [];
// renderTodos();
//
// addBtn.addEventListener("click", () => {
//   const newTodo = todoInput.value.trim();
//   if (newTodo !== "") {
//     todos.push(newTodo);
//     localStorage.setItem("todos", JSON.stringify(todos));
//     renderTodos();
//     todoInput.value = "";
//   }
// });
//
// function renderTodos() {
//   todoList.innerHTML = "";
//
//   todos.forEach((todo, index) => {
//     const li = document.createElement("li");
//     li.textContent = todo;
//
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "❌";
//     deleteBtn.addEventListener("click", () => {
//       todos.splice(index, 1);
//       localStorage.setItem("todos", JSON.stringify(todos));
//       renderTodos();
//     });
//
//     li.appendChild(deleteBtn);
//     todoList.appendChild(li);
//   });
// }
