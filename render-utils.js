export function renderTodo(todo) {
    // create a div and a p tag
    const todosEl = document.createElement('div');
    const todoEl = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete) {
        todosEl.classList.add('complete', 'todo');
    } else {
        todosEl.classList.add('incomplete', 'todo');
    }
    // add the 'todo' css class no matter what
    todoEl.textContent = todo.todo;
    // put the todo's text into the p tag
    todosEl.append(todoEl);
    // append stuff

    return todosEl;
    // return the div
}