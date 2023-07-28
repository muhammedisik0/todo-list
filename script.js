const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const value = input.value;

  if (value) {
    const todo = document.createElement("li");
    todo.innerText = value;
    
    todo.addEventListener("click", () => markAsDone(todo));

    todo.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      removeTodo(todo)
    });

    ul.appendChild(todo);
    input.value = "";
  }
}

function markAsDone(todo) {
  const textDecoration = todo.style.textDecoration;
  todo.style.textDecoration =
    textDecoration == "line-through" ? "none" : "line-through";
}

const removeTodo = (todo) => todo.remove();
