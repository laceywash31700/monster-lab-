/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tableRows = document.querySelector('tbody');

  while (tableRows.firstChild) {
    tableRows.removeChild();
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  const tbody = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < state.cart.items.length; i++) {
    // TODO: Create a TR
    const trElem = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.classList.add('delete-Button');
    deleteButton.id = i;
    trElem.appendChild(deleteButton);

    // quantity cell
    let quantity = document.createElement('td');
    quantity.textContent = state.cart.items[i].quantity;
    trElem.appendChild(quantity);

    // item cell
    let item = document.createElement('td');
    item.textContent = state.cart.items[i].product;
    trElem.appendChild(item);

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbody.appendChild(trElem);
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if(event.target.innerHTML === 'Remove'){
    let itemName = event.target.parentNode.ClassName;
    state.cart.removeItem(productName);
      
  }
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
