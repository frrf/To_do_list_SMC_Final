const submitButton = document.getElementById("submit-item");
const outputSection = document.getElementById("output");
const textInput = document.getElementById("item");
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

//adds delete functionality to delete icon
const addDeleteOnClick = () => {
  Array.from(deleteIcon).forEach(icon => {
    icon.onclick = function () {
        let deleteItem = this.parentElement;
        deleteItem.style.display = "none";
    }
  })
};

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
  addDeleteOnClick(); //deletes / hides list item
}

//allows users to submit item via enter key
const addItemKey = (event) => {
  textInput.value.length > 0 && event.keyCode === 13
  ? addItem()
  : console.log("error");
}

submitButton.addEventListener("click", addItem);
textInput.addEventListener("keypress", addItemKey)