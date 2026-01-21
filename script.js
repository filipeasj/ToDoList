const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("você deve digitar uma tarefa!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  updateStats();
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      updateStats();
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      updateStats();
      saveData();
    }
  },
  false,
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

const updateStats = () => {
  const completedTasks = listContainer.querySelectorAll("li.checked").length;
  const totalTasks = listContainer.children.length;
  document.getElementById("numbers").innerText = `${completedTasks} / ${totalTasks}`;

  if(totalTasks > 0 && completedTasks === totalTasks){
    confete();
  }
}

const confete = () => {
  const duration = 2 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
}

showTask();