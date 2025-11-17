// 🧠 STEP 1: SELECT THE CHECKBOX ELEMENT
// Use document.getElementById() to select the checkbox (id="subscribeCheckbox").
const checkbox = document.getElementById('subscribeCheckbox');
const resetBtn = document.getElementById('resetBtn');
const statusText = document.getElementById('statusText');

// 💾 STEP 2: LOAD CHECKED STATE FROM localStorage
// Use localStorage.getItem("isSubscribed") to see if it was saved as "true" or "false".
// If "true", set checkbox.checked = true.

const checkboxState = localStorage.getItem('isSubscribed');
if (checkboxState === 'true') {
  checkbox.checked = true;
  statusText.textContent = 'Suscribed!';
}


// 🎯 STEP 3: SAVE CHECKED STATE WHEN USER TOGGLES THE BOX
// Add a "change" event listener to the checkbox.
// Inside the listener:
// - Get the current checkbox state (true or false)
// - Save it using localStorage.setItem("isSubscribed", value)


checkbox.addEventListener('change', () => {
  const state = checkbox.checked;
  if (state === true) {
    statusText.textContent = 'Suscribed';
  } else {statusText.textContent = 'Not Suscribed';}
  localStorage.setItem('isSubscribed', state);
});

resetBtn.addEventListener('click', () => {
  if (checkbox.checked === true) {
    checkbox.checked = false;
    statusText.textContent =  'Not Suscribed';
    localStorage.setItem('isSubscribed', checkbox.checked);
  }
});

