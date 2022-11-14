const taskListInput = document.querySelector(".todo__input");
const addTask = document.querySelector(".add-button");
const todoList = document.querySelector(".todo__tasklist");
let tasks = [];

const createTodo = (item) => `
 <div class='task' id = ${item._id}>
       <input type='checkbox' ${item.status ? "checked" : ""}/>
       <span class='task-name'>${_.escape(item.label)}</span>
       <button class='delete-button'>X</button>
     </div>
 `;

const render = () => {
  todoList.innerHTML = "";
  tasks.sort((a, b) => b.date - a.date);
  tasks.sort((a, b) => (a.status > b.status ? 1 : -1));
  console.log(tasks);
  tasks.forEach((element) => {
    todoList.innerHTML += createTodo(element);
  });
};

window.onload = async () => {
  const resp = await fetch("http://localhost:8000/allTasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  let result = await resp.json();
  tasks = result.sort((a, b) => (a.status > b.status ? 1 : -1));
  if (result === undefined) tasks = [];
  console.log(tasks);
  render();
};
const createItem = async (event) => {
  if (
    (event.type === "click" || event.key === "Enter") &&
    taskListInput.value.trim() !== ""
  ) {
    const ToDo = {
      label: "",
      status: false,
      date: Date.now(),
    };
    const item = ToDo;
    item.label = taskListInput.value.trim().replace(/^ +| +$|( ) +/g, "$1");
    taskListInput.value = "";
    const data = JSON.stringify(item);
    const response = await fetch("http://localhost:8000/createTask", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    let result = await response.json();
    console.log(result);
    if (response.status === 200) tasks.push(result);
    render();
  }
};
const editTask = (event) => {
  const editInput = document.createElement("input");
  editInput.type = "text";
  const elementID = tasks.findIndex(
    (elem) => elem._id === event.target.parentElement.id
  );
  editInput.value = tasks[elementID].label;
  event.target.parentElement.replaceChild(editInput, event.target);
  editInput.focus();
  const saveTask = () => {
    tasks[elementID].label = editInput.value
      .trim()
      .replace(/^ +| +$|( ) +/g, "$1");
    const data = JSON.stringify({
      label: tasks[elementID].label,
      status: tasks[elementID].status,
    });
    fetch(`http://localhost:8000/updateTask/${tasks[elementID]._id}`, {
      method: "PATCH",
      body: data,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
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
  console.log(event.target.parentElement.id);
  const task = tasks.findIndex((elem) => {
    return elem._id === event.target.parentElement.id;
  });
  console.log(task);
  tasks.splice(task, 1);
  fetch(`http://localhost:8000/deleteTask/${event.target.parentElement.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  render();
};
const checkTask = (event) => {
  const task = tasks.find((elem) => elem._id === event.target.parentElement.id);
  task.status = !task.status;

  const data = JSON.stringify({ status: task.status });
  fetch(`http://localhost:8000/updateTask/${event.target.parentElement.id}`, {
    method: "PATCH",
    body: data,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
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
