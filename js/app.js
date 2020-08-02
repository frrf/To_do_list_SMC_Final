const userItem = document.getElementById("item");
const submitButton = document.getElementById("submit-item");
const outputSection = document.getElementById("output");
const deleteButton = document.getElementById("delete-item");
let i = 0;

const addToList = () => { //adds item to list
  let added = document.createElement("li");
  added.className = "list-item";
  added.id = "id-item-"+i;
  added.textContent = userItem.value;
  outputSection.appendChild(added);
}

const removeFromList = () => {
  let remove = document.querySelector("li");
  outputSection.removeChild(remove);
  i--;
}

submitButton.addEventListener("click", addToList);
deleteButton.addEventListener("click", removeFromList)
