// HTML Variables
let outputEl = document.getElementById("list");

// Ranking List Array
let todoarray = [""];

//Check if checkboxs have been clicked
setInterval(checkbox, 1000);

// Button Event Listener
document.getElementById("todobtn").addEventListener("click", todobtnClicked);

function todobtnClicked() {
  // Add Item
  addItem();
  // Redraw todoarray after changes have been made
  drawtodoarray();
}

// FUNCTIONS
function drawtodoarray() {
  outputEl.innerHTML = "";
  for (let i = 1; i < todoarray.length; i++) {
    outputEl.innerHTML += `<h3><input type="checkbox" id="${i}box" /> ${todoarray[i]}</h3>
    
 `;
  }
}

function addItem() {
  let item = prompt("Enter item:");
  todoarray.push(`${item}`);
}

//Remove item if checkbox is clicked and re-draw
function checkbox() {
  for (let i = 1; i < todoarray.length; i++) {
    let box = document.getElementById(`${i}box`);
    if (box.checked) {
      todoarray.splice(i, 1);
    }
  }
  drawtodoarray();
}
