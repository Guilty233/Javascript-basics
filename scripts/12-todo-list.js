const todoList = [];
document.querySelector('.js-add-todo-button').addEventListener('click', addTodo); // add an event listener to the add button that calls the addTodo function when clicked
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const dueDateInputElement = document.querySelector('.js-due-date-input');
  const name = inputElement.value;
  const dueDate = dueDateInputElement.value;
  console.log(name);
  todoList.push({name, dueDate}); // use push to add the name and due date to the todoList array
  console.log(todoList);
  inputElement.value = ''; // clear the input field after adding the name to the list
  renderTodoList(); // call the function to update the displayed todo list
}
function renderTodoList(){
  let todoListHTML = '';  
  /*
  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1); 
        renderTodoList();
        " 
       class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html; // append the html for each name to the todoListHTML string
  }
    */
  // use forEach to loop through the todoList array and generate the HTML for each name
  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  todoListElement = document.querySelector('.js-todo-list');
  todoListElement.innerHTML = todoListHTML; // set the innerHTML of the todo list element to the generated HTML string
  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1); // remove the corresponding name from the todoList array
      renderTodoList(); // update the displayed todo list
    });
  });
}