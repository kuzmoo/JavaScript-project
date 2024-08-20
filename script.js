// Elementi
const buttonAdd = document.getElementById("taskAdd");
const inputTask = document.getElementById("inputTask");
const listTask = document.getElementById("listTask");

taskLoad();

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

  itemList.textContent = task1;

  listTask.appendChild(itemList);

  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "Delete";
  buttonDelete.className = "deleteTask";

  itemList.appendChild(buttonDelete);
  listTask.appendChild(itemList);

  buttonDelete.addEventListener("click", function () {
    listTask.removeChild(itemList);
  });

  taskSave();
}

function taskSave() {
  let task = [];
  listTask.querySelectorAll("li").forEach(function (item) {
    task.push(item.textContent.replace("Delete", "").trim());
  });

  localStorage.setItem("task", JSON.stringify(task));
}

function taskLoad() {
  const task = JSON.parse(localStorage.getItem("task")) || [];

  task.forEach(createElementTask);
}
