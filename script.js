const taskListInput = document.querySelector(".todo__input");
const addTask = document.querySelector(".add-button");
const todoList = document.querySelector(".todo__tasklist");
const tasks = [];

const createTodo = (item) => `
 <div class='task' id = ${item.id}>
       <input type='checkbox' ${item.status ? "checked" : ""}/>
       <span class='task-name'>${_.escape(item.label)}</span>
       <button class='delete-button'>X</button>
     </div>
 `;

const render = () => {
  console.log(tasks);
  todoList.innerHTML = "";
  tasks.forEach((element) => {
    todoList.innerHTML += createTodo(element);
  });
};
const createItem = (event) => {
  if (
    (event.type === "click" || event.key === "Enter") &&
    taskListInput.value.trim() !== ""
  ) {
    const ToDo = {
      label: "",
      status: false,
      id: Date.now(),
    };
    const item = ToDo;
    item.label = taskListInput.value.trim().replace(/^ +| +$|( ) +/g, "$1");
    taskListInput.value = "";
    tasks.push(item);
    render();
  }
};
const editTask = (event) => {
  const editInput = document.createElement("input");
  editInput.type = "text";
  const elementID = tasks.findIndex(
    (elem) => elem.id === Number(event.target.parentElement.id)
  );
  editInput.value = tasks[elementID].label;
  event.target.parentElement.replaceChild(editInput, event.target);
  editInput.focus();
  const saveTask = () => {
    tasks[elementID].label = editInput.value
      .trim()
      .replace(/^ +| +$|( ) +/g, "$1");
    render();
  };

  const keyboardEvents = (childEvent) => {
    if (childEvent.key === "Enter" && editInput.value.trim()) {
      saveTask();
    }
    if (childEvent.key === "Escape") {
      editInput.removeEventListener("blur", saveTask);
      render();
    }
  };
  editInput.addEventListener("blur", saveTask);
  editInput.addEventListener("keydown", keyboardEvents);
};

const deleteTask = (event) => {
  const task = tasks.findIndex(
    (elem) => elem.id === Number(event.target.parentElement.id)
  );
  tasks.splice(task, 1);
  render();
};
const eventCheck = (event) => {
  if (event.target.type === "checkbox") {
    checkTask(event);
  }
  if (event.target.type === "submit") {
    deleteTask(event);
  }
  if (event.detail === 2 && event.target.className === "task-name") {
    editTask(event);
  }
};
addTask.addEventListener("click", createItem);
taskListInput.addEventListener("keyup", createItem);
todoList.addEventListener("click", eventCheck);
