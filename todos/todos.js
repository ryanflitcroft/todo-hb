import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

window.addEventListener('load', async() => {
    await displayTodos();
});

todoForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(todoForm);
    const todo = data.get('todo');

    await createTodo(todo);
    await displayTodos();
});

async function displayTodos() {
    const todos = await getTodos();
    todosEl.textContent = '';

    for (let todo of todos) {
        const todoEl = renderTodo(todo);
        todosEl.append(todoEl);

        if (!todo.complete) {
            todoEl.addEventListener('click', async() => {
                await completeTodo(todo.id);
                await displayTodos();
                console.log(todo.complete);
            });
        }
    }
}

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async() => {
    await deleteAllTodos();
    await displayTodos();
});
