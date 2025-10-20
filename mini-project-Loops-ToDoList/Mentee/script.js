// ===================== MENTEE — INSTRUCTIONAL STEPS =====================
// Goal: Practice different types of loops by generating a to-do list.



// STEP 1 — Create an array with 5 tasks (strings).
// STEP 2 — Select button (#btnGenerate), ul (#taskList), and p (#taskCount).
// STEP 3 — Add click event listener to button.
// STEP 4 — Inside the event:
//   - Clear the list.
//   - Use a for loop to add tasks with prefix "(for)".
//   - Use a while loop to add tasks with prefix "(while)".
//   - Use for...of to add tasks with prefix "(for...of)".
//   - Use forEach to add tasks with prefix "(forEach)".
// STEP 5 — Show total task count in #taskCount.
//

const tasks = ['Do the dishes', 'Take garbage out', 'Clean my room', 'Do homework', 'Take a shower'];
const btnGenerate = document.getElementById('btnGenerate');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

//for loop
// btnGenerate.addEventListener('click', () => {
//   taskList.innerHTML ='';
//   for (let i = 0; i < tasks.length; i++) {
//     let num = i + 1;
//     const li = document.createElement('li');
//     li.textContent = `${num}. ${tasks[i]}`;
//     taskList.appendChild(li);
//   }
//
//   taskCount.textContent = `The total tasks to do: ${tasks.length}`;
//
// });

//while loop
// btnGenerate.addEventListener('click', () => {
//   taskList.innerHTML = '';
//   let i = 0;
//   while (i < tasks.length) {
//     let num = i + 1;
//     const li = document.createElement('li');
//     li.textContent = `${num}. ${tasks[i]}`;
//     taskList.appendChild(li);
//     i++;
//
//     
//   }
//   taskCount.textContent = `The total tasks to do: ${tasks.length}`;
//
// });

//
//for of loop
// btnGenerate.addEventListener('click', () => {
//   taskList.innerHTML = '';
//   let num = 1;
//   for (const i of tasks) {
//     const li = document.createElement('li');
//     li.textContent = `${num}.  ${i}`;
//     taskList.appendChild(li);
//     num++;
//     
//   }
//   taskCount.textContent = `The total tasks to do: ${tasks.length}`;
//
// });
//
//for each loop
 btnGenerate.addEventListener('click', () => {
  taskList.innerHTML = '';
   let num = 1;
   tasks.forEach(element => {
     const li = document.createElement('li');
     li.textContent = `${num}. ${element}`;
     taskList.appendChild(li);
     num++;
    
   });
  taskCount.textContent = `The total tasks to do: ${tasks.length}`;
     

});

