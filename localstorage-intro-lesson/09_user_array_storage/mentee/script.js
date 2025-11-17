// 🧠 Step 1: Use document.getElementById to select all relevant elements
// - Select the inputs for name and email using their ids: "nameInput" and "emailInput"
// - Select the button with id="addUserBtn"
// - Select the <ul> element with id="userList" to display the users
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const addUserBtn = document.getElementById('addUserBtn');
const userList = document.getElementById('userList');

// 💾 Step 2: Load users from localStorage
// - Check if there is a key "users" in localStorage
// - If yes, parse the string back into an array using JSON.parse
// - If not, start with an empty array
// Display the list immediately on load
const usersLoad = localStorage.getItem('users');

const usersLoaded = usersLoad ? JSON.parse(usersLoad) : [];
console.log(usersLoaded);


// 🧑‍💻 Step 3: Add new user when button is clicked
// - Create a new object with name and email values from the inputs
// - Push the object to the users array
// - Save the updated array to localStorage using JSON.stringify()
// - Clear the input fields and update the list on screen

addUserBtn.addEventListener('click', () => {
  const user = {
    name: nameInput.value,
    email: emailInput.value
  };
  usersLoaded.push(user);
  localStorage.setItem('users', JSON.stringify(usersLoaded));
  nameInput.value = '';
  emailInput.value = '';
  displayUsers();
});




// 🖼️ Step 4: Display users on the screen
// - Clear the current list
// - Loop through the users array and create an <li> for each one
// - Add a remove ❌ button next to each user
// - When clicked, it removes the user from the array and updates localStorage
//
//

function displayUsers() {
  userList.textContent = '';
  
  usersLoaded.forEach((user, index) => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove ❌';
    deleteBtn.addEventListener('click', () => {
      usersLoaded.splice(index,1);
      localStorage.setItem('users', JSON.stringify(usersLoaded));
      displayUsers();
      console.log('Element removed');
    });

    li.textContent = `${user.name} ${user.email}`;
    userList.appendChild(li);
    userList.append(deleteBtn);
    
  });
}


displayUsers();




