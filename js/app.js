const userItem = document.getElementById("item");
const submitButton = document.getElementById("submit-item");
const outputSection = document.getElementById("output");
const deleteButton = document.getElementById("delete-item");

const addToList = () => { //adds item to list
  let added = document.createElement("li");
  added.className = "list-item";
  added.id = "item";
  added.textContent = userItem.value;
  outputSection.appendChild(added);
}

const removeFromList = () => {
  let remove = document.querySelector("li");
  outputSection.removeChild(remove);
}

submitButton.addEventListener("click", addToList);
deleteButton.addEventListener("click", removeFromList)
