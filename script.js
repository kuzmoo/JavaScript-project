const buttonAdd = document.getElementById("taskAdd");
const inputTask = document.getElementById("inputTask");
const listTask = document.getElementById("listTask");

const taskLoad = function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(createElementTask);
};

const TaskAdd = function () {
  const task1 = inputTask.value.trim();

  if (task1) {
    createElementTask(task1);
    inputTask.value = "";
  } else {
    alert("Unesi!!");
  }
};

const createElementTask = function (task1) {
  const itemList = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = task1;

  itemList.appendChild(taskText);

  //Podesavanje button-a u javi
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "task-buttons";

  const buttonDelete = createButtonDelete(itemList);
  const buttonEdit = createButtonEdit(taskText);

  buttonContainer.appendChild(buttonDelete);
  buttonContainer.appendChild(buttonEdit);

  itemList.appendChild(buttonContainer);
  listTask.appendChild(itemList);

  taskSave();
};

const createButtonDelete = function (itemList) {
  const buttonDelete = document.createElement("button");

  buttonDelete.textContent = "Delete";
  buttonDelete.className = "deleteTask";

  buttonDelete.addEventListener("click", function () {
    listTask.removeChild(itemList);
    taskSave();
  });

  return buttonDelete;
};

const createButtonEdit = function (taskText) {
  const buttonEdit = document.createElement("button");

  buttonEdit.textContent = "Edit";

  buttonEdit.className = "editTask";

  buttonEdit.addEventListener("click", function () {
    const newTask = prompt("Ažuriraj svoju bilješku:", taskText.textContent);

    if (newTask) {
      taskText.textContent = newTask.trim();
      taskSave();
    }
  });

  return buttonEdit;
};

const taskSave = function () {
  let tasks = [];
  listTask.querySelectorAll("li").forEach(function (item) {
    const taskText = item.querySelector("span").textContent.trim();
    tasks.push(taskText);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

buttonAdd.addEventListener("click", TaskAdd);

taskLoad();
