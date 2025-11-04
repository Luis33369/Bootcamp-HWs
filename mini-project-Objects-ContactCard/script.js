// // =============================================================
// // Mini Project — Contact Card
// // =============================================================
//
// /*
// STEP 1 — Create these DOM references (exact names):
//   - const form = document.getElementById("contactForm")
//   - const contactsList = document.getElementById("contacts")
//   - const status = document.getElementById("status")
//   - const clearBtn = document.getElementById("clearBtn")
// */
const form = document.getElementById('contactForm');
const contactsList = document.getElementById('contacts');
const status = document.getElementById('status');
const clearBtn = document.getElementById('clearBtn');

//
//
// /*
// STEP 2 — Write a helper function named createContactCard(dataObject)
//   - Function name: createContactCard
//   - Parameter: an object with keys { first, last, email, phone, fav }
//   - Returns: a <div> element with class "contact" (the card)
//
//   Inside createContactCard:
//     STEP 2A — Compute initials (variable name: initials)
//     STEP 2B — Create the outer <div> (variable name: card)
//     STEP 2C — Fill card content with these classes:
//         - avatar
//         - contact-body
//         - name
//         - meta
//         - badge (only if fav is true)
//     STEP 2D — return card
// */
 function createContactCard(obj) {
  const initials = obj.first[0] + obj.last[0];
  const card = document.createElement('div');
  card.classList.add('contact');

  card.innerHTML = `
    <div class="avatar">${initials}</div>
    <div class="contact-body">
      <div class="name">${obj.first} ${obj.last}</div>
      <div class="meta">${obj.email} · ${obj.phone}</div>
      ${obj.fav ? '<div class="badge">★</div>' : ''}
    </div>
  `;

  return card;
}





// /*
// STEP 3 — Write a helper function named showToast()
//   - Function name: showToast
//   - Action: unhides #status, then hides it after 2000ms
// */
//

function showToast() {
  status.removeAttribute('hidden');
  setTimeout(() => status.setAttribute('hidden', ''), 2000);
}





// /*
// STEP 4 — Write a helper function named removeEmptyState()
//   - Function name: removeEmptyState
//   - Action: if an element with class ".empty" exists inside #contacts, remove it
// */
function removeEmptyState() {
  const element = contactsList.querySelector('.empty');
  if (element) element.remove();
}



// /*
// STEP 5 — Write a helper function named restoreEmptyState()
//   - Function name: restoreEmptyState
//   - Action: replace the innerHTML of #contacts with the default empty-state block
// */

function restoreEmptyState() {
  contactsList.innerHTML = `<div class="empty">No contacts yet — add your first one!</div>`;
}

// /*
// STEP 6 — Add a "submit" listener on form that runs an inline function
//   - Read inputs into exact variable names:
//       first, last, email, phone, fav
//   - Build a card with createContactCard({ first, last, email, phone, fav })
//   - Call removeEmptyState(), then append the new card to contactsList
//   - Call showToast(), then reset the form
// */

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents page refresh

  const first = document.getElementById('firstName').value;
  const last = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fav = document.getElementById('fav').checked;

  const card = createContactCard({ first, last, email, phone, fav });
  removeEmptyState();
  contactsList.append(card);
  showToast();
  form.reset();
});

// /*
// STEP 7 — Add a "click" listener on clearBtn
//   - When clicked, call restoreEmptyState()
// */
clearBtn.addEventListener('click', () => {
  restoreEmptyState();
  form.reset();
});




