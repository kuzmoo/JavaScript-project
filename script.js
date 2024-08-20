// Elementi
const buttonAdd = document.getElementById("taskAdd");
const inputTask = document.getElementById("inputTask");
const listTask = document.getElementById("listTask");

// Funkcije
function TaskAdd() {
  const task1 = inputTask.value.trim();

  if (task1) {
    createElementTask(task1);
    inputTask.value = "";
  } else {
    alert("Unesi!!");
  }
}

buttonAdd.addEventListener("click", TaskAdd);

function createElementTask(task1) {
  const itemList = document.createElement("li");
}
