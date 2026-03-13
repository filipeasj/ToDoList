const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const numbers = document.getElementById("numbers");
const addButton = document.getElementById("add-task");

addButton.addEventListener("click", adicionarTarefa);

let confeteAtivo = false;

function adicionarTarefa() {
  const texto = inputBox.value.trim();

  if (!texto) {
    alert("Você deve digitar uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;

  const span = document.createElement("span");
  span.textContent = "×";

  li.appendChild(span);
  listContainer.appendChild(li);

  inputBox.value = "";

  atualizarEstados();
  salvarDados();
}

inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
    adicionarTarefa();
  }
});

listContainer.addEventListener("click", (e) => {
  const elemento = e.target;

  if (elemento.tagName === "LI") {
    elemento.classList.toggle("checked");
  }

  if (elemento.tagName === "SPAN") {
    elemento.parentElement.remove();
  }

  atualizarEstados();
  salvarDados();
});

function salvarDados() {
  localStorage.setItem("tarefas", listContainer.innerHTML);
}

function mostrarTarefas() {
  const dados = localStorage.getItem("tarefas");

  if (dados) {
    listContainer.innerHTML = dados;
  }
}

function atualizarEstados() {
  const completas = listContainer.querySelectorAll("li.checked").length;
  const total = listContainer.children.length;

  numbers.textContent = `${completas}/${total}`;

  if (total > 0 && completas === total && !confeteAtivo) {
    confeteAtivo = true;
    confete();
  }

  if (completas !== total) {
    confeteAtivo = false;
  }
}

function confete() {
  const duration = 2000;
  const end = Date.now() + duration;

  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0
  };

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = end - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 }
    });

    confetti({
      ...defaults,
      particleCount,
      origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 }
    });

  }, 250);
}

mostrarTarefas();
atualizarEstados();