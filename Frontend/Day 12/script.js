const input = document.getElementById("text-box");
const addButton = document.getElementById("submitbutton");
const tasks = document.getElementById("tasks");
const sampleTask = document.getElementsByClassName("task")[0];
let todos = [];

function taskdeleted() {
  this.parentElement.classList.add("hide");
}

function markNodeCompleted(node) {
  let parent = node.parentElement;
  parent.classList.add("completed");
  parent.removeChild(parent.lastChild);
  parent.removeChild(parent.lastChild);
}

function taskcompleted() {
  markNodeCompleted(this);
}

function createTaskNode(task) {
  var cln = sampleTask.cloneNode(true);
  cln.classList.remove("hide");
  cln.children[0].innerHTML = task.title;
  cln.children[1].addEventListener("click", taskdeleted);
  cln.children[2].addEventListener("click", taskcompleted);
  tasks.appendChild(cln);
}

function addnewTask() {
  let task = {
    title: input.value,
    done: false,
  };
  todos.push(task);
  createTaskNode(task);
  input.value = "";
}

addButton.addEventListener("click", addnewTask);
