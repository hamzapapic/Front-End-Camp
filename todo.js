todoInput = document.querySelector(".todo-input");
todoButton = document.querySelector(".todo-button");
todoList = document.querySelector(".todo-list");
console.log(todoButton);

todoButton.addEventListener("click", addTodo);

function addTodo(e) {
  e.preventDefault();
  todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  todoInput.value = "";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  doneButton = document.createElement("button");
  doneButton.innerHTML = '<i class="fas fa-check"></i>';
  doneButton.classList.add("done-btn");
  todoDiv.appendChild(doneButton);
  deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-times"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  todoList.appendChild(todoDiv);
}

function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "delete-btn") {
    todo = item.parentElement;
    todo.remove();
  }
  if (item.classList[0] === "done-btn") {
    todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
