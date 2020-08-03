const submitButton = document.getElementById("submit-item");
const outputSection = document.getElementById("output");
let deleteIcon = document.getElementsByClassName("deleteIcon"); 


//add user input to list
const addItem = () => {
  let newItem = document.createElement("li");
  let inputItem = document.getElementById("item");
  let text = document.createTextNode(inputItem.value); //gets text of user input
  newItem.appendChild(text);                           //adds user inputed text to new list item
  inputItem.value.length === 0 ? alert("Input is empty") 
                               : outputSection.appendChild(newItem), 
                                 document.getElementById("item").value = ""; 
  // if inputItem is empty, send alert, else add new list item to the output section and clear text in input field


}

submitButton.addEventListener("click", addItem)