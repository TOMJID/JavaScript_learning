import { Todo } from "./todo.js";

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoLists = document.getElementById("lists");
const massageElement = document.getElementById("massage");

//show massage
const showMassage = (text, status) => {
  massageElement.textContent = text;
  massageElement.classList.add(`${status}-massage`);
  setTimeout(() => {
    massageElement.textContent = "";
    massageElement.classList.remove(`${status}-massage`);
  }, 1000);
};

//create todo
const createTodo = (newTodo) => {
  const todoElement = document.createElement("li");
  todoElement.id = newTodo.todoId;
  todoElement.classList.add("list-style");
  todoElement.innerHTML = `<span>${newTodo.todoValue}</span>
  <span><button class="btn" id="deleteBtn"><i class="fa-solid fa-trash"></i></button></span>`;
  todoLists.appendChild(todoElement);
  const deleteBtn = todoElement.querySelector("#deleteBtn");
  deleteBtn.addEventListener("click", deleteTodo);
};
//deleteTodo
const deleteTodo = (event) => {
  const selectedTodo = event.target.parentElement.parentElement.parentElement;
  todoLists.removeChild(selectedTodo);
  showMassage("task have beed romoved", "delete");
  let todos = getTodosFromLocalStroage();
  todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
  localStorage.setItem("mytodos", JSON.stringify(todos));
};

//getTodosFromLocalStroage
const getTodosFromLocalStroage = () => {
  return localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];
};

//adding todo function
const addTodo = (event) => {
  event.preventDefault();
  const todoValue = todoInput.value;

  //unique id
  const todoId = Date.now().toString();
  const newTodo = new Todo(todoId, todoValue);
  createTodo(newTodo);
  showMassage("Task have been added", "success");

  //adding toto to locatStroage

  const todos = getTodosFromLocalStroage();
  todos.push(newTodo);
  localStorage.setItem("mytodos", JSON.stringify(todos));
  todoInput.value = "";
};

//load todos
const loadTodos = () => {
  const todos = getTodosFromLocalStroage();
  todos.map((todo) => createTodo(todo));
};

//adding listeners
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);
