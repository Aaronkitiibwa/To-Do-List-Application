const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You need to enter some information here");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//adding styles to the background whenever task is added
let button = document.getElementById("task-button");
let body = document.querySelector("body");

button.addEventListener("click", function (event) {
  let parent = event.target.parentElement;

  let colors = ["yellow", "orange", "green"];

  let randomIndex = Math.floor(Math.random() * colors.length);
  parent.target.style.backgroundColor = colors[randomIndex];
});

//localstorage section
 
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
