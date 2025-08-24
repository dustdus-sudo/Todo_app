function saveTodos() {
  const tasks = [];
  document.querySelectorAll("#todo-list li span").forEach((span) => {
    tasks.push({
      text: span.textContent,
      done: span.classList.contains("check"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(tasks));
}
