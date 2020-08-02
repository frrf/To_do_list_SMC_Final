const userItem = document.getElementById("item");
const submitButton = document.getElementById("submit-item");
const outputSection = document.getElementById("output");

const addToList = () => {
  let added = document.createElement("li");
  added.className = "list-item";
  added.textContent = userItem.value;
  outputSection.appendChild(added);
}


submitButton.addEventListener("click", addToList);