const submitButton = document.getElementById("submit-item");
const outputSection = document.getElementById("output");
let deleteIcon = document.getElementsByClassName("deleteIcon"); //captures delete icons in item list

const toggleChecked = (selectItem) => {
  selectItem.target.tagName === 'LI' //= if clicked object is a list item, give checked class
    ? selectItem.target.classList.toggle('checked')
    : console.log("List item not selected");
}

//gives list item check on off functionality
let list = document.querySelector('ul');
list.addEventListener('click', toggleChecked);

// //adds delete icon to newItem (user input)
const addDeleteIcon = (newItem) => {
  let deleteButtonArea = document.createElement("span");
  let deleteItemIcon = document.createTextNode("🗑"); //trash emoji
  deleteButtonArea.className = "deleteIcon";
  deleteButtonArea.appendChild(deleteItemIcon);
  newItem.appendChild(deleteButtonArea);
}



//add user input to list
const addItem = () => {
  let newItem = document.createElement("li");
  let inputItem = document.getElementById("item"); //captures user input
  let text = document.createTextNode(inputItem.value); //gets text of user input
  newItem.appendChild(text);                           //adds user inputed text to new list item
  inputItem.value.length === 0 ? alert("Input is empty") 
                               : outputSection.appendChild(newItem), 
                                 document.getElementById("item").value = ""; 
  //= if inputItem is empty, send alert, else add new list item to the output section and clear text in input field
  
  addDeleteIcon(newItem); //call function to create delete icon at the end of the inside of created item
}

submitButton.addEventListener("click", addItem)