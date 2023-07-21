const form = document.querySelector("#todo-form");
const input = document.querySelector("#new-todo-input");
const list_el = document.querySelector("#todos");

form.addEventListener('submit', addToDo);

function addToDo(event) {

  const task = input.value;

  event.preventDefault(); 

  if(!task) {
    alert("Please add a task");
    return;
  }    

  const todo_el = document.createElement("div"); 
  todo_el.classList.add("todo");

  const todo_content_el = document.createElement("div");
  todo_content_el.classList.add("content");
  
  todo_el.appendChild(todo_content_el); 

  const task_input_el = document.createElement("input");
  task_input_el.classList.add("text");
  task_input_el.type = "text";
  task_input_el.value = task;
  task_input_el.setAttribute("readonly", "readonly");
  
  todo_content_el.appendChild(task_input_el);

  const task_actions_el = document.createElement("div");
  task_actions_el.classList.add("actions");

  const task_edit_el = document.createElement("button");
  task_edit_el.classList.add("edit-button");
  task_edit_el.innerHTML = '<i class=\"fa-sharp fa-solid fa-edit\"></i>';

  const task_delete_el = document.createElement("button");
  task_delete_el.classList.add("delete-button"); 
  task_delete_el.innerHTML = '<i class=\"fa-sharp fa-solid fa-trash\"></i>';

  task_actions_el.appendChild(task_edit_el);
  task_actions_el.appendChild(task_delete_el);

  todo_el.appendChild(task_actions_el);
  list_el.appendChild(todo_el);

  input.value = ""; 

  editButton(task_edit_el, task_input_el);
  deleteButton(task_delete_el, todo_el);
}

function editButton(task_edit_el, task_input_el) {
  task_edit_el.addEventListener('click', () => {
    if (task_edit_el.innerHTML == '<i class=\"fa-sharp fa-solid fa-edit\"></i>') {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
    } else {
        task_edit_el.innerHTML = '<i class=\"fa-sharp fa-solid fa-edit\"></i>';
        task_input_el.setAttribute("readonly", "readonly");
    }
  });
}

function deleteButton(task_delete_el, todo_el) { 
  task_delete_el.addEventListener('click', () => {
    list_el.removeChild(todo_el);
  });
}