// 🧠 STEP 1: SELECT ELEMENTS FROM THE PAGE
// Use document.getElementById() to select:
// - the text input where the user types their name (id="nameInput")
// - the button the user clicks to save their name (id="saveBtn")
// - the element where we will display the saved name (id="userDisplay")

// 💾 STEP 2: LOAD SAVED NAME ON PAGE LOAD
// When the page loads, we check if there's a saved name in localStorage using getItem()
// If there is a name, we update the display element's textContent to show that name

// 🎯 STEP 3: ADD A CLICK EVENT TO THE BUTTON
// When the user clicks the button:
// - we get the value they typed in the input
// - we save that value to localStorage with the key "username"
// - we update the display on the page with the name

const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const userDisplay = document.getElementById("userDisplay");
const msg = document.getElementById("msg");

const savedName = localStorage.getItem("username");
if (savedName) {
  userDisplay.textContent = savedName;
}

saveBtn.addEventListener("click", () => {
  const value = nameInput.value;
  localStorage.setItem("username", value);
  userDisplay.textContent = value;
});

msg.textContent = `Hi again, ${savedName}`;
