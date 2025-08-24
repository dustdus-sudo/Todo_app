const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

loadTodos();

function addTodo() {
  const text = input.value.trim();
  if (text === "") return;
  // text
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.textContent = text;

  li.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;
    span.classList.toggle("check", checkbox.checked);
    saveTodos();
  });

  checkbox.addEventListener("click", (event) => {
    event.stopPropagation();
    span.classList.toggle("check", checkbox.checked);
    saveTodos();
  });

  li.appendChild(checkbox);
  li.appendChild(span);

  //delbtn
  const delBtn = document.createElement("button");
  delBtn.textContent = "削除";
  delBtn.classList.add("del-btn");
  delBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
    saveTodos();
  });
  li.appendChild(delBtn);

  //addlist
  list.appendChild(li);
  input.value = "";
  saveTodos();
}

addBtn.addEventListener("click", addTodo);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
