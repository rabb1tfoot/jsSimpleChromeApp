const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");

let todos = [];

const TODOS__KEY = "todos";

function savetodo(todoThings)
{
    if(todoThings !== "")
    {
        todos.push(todoThings);
    }
    localStorage.setItem(TODOS__KEY, JSON.stringify(todos));
}

function removeTodo(event)
{
    const removeli = event.target.parentElement;
    removeli.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(removeli.id));
    savetodo("");
}

function printTodo(todoThings)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = todoThings.id;
    span.innerText = todoThings.text;

    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", removeTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event)
{
    event.preventDefault();
    const todoThings = todoInput.value;
    const todoThinsgsObj = {text:todoThings, id:Date.now()};
    todoInput.value = "";
    printTodo(todoThinsgsObj);
    savetodo(todoThinsgsObj);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodo = localStorage.getItem(TODOS__KEY);

if(savedTodo !== null)
{
    todos = JSON.parse(localStorage.getItem(TODOS__KEY));
    todos.forEach(item => (printTodo(item)) );
}