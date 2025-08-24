function loadTodos() {
  const data = localStorage.getItem("todos");
  if (!data) return;

  const tasks = JSON.parse(data);
  tasks.forEach((task) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.done) {
      span.classList.add("check");
    }

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

    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.classList.add("del-btn");
    delBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      li.remove();
      saveTodos();
    });
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}
