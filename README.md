# 📝 To Do List – Lista de Tarefas Interativa

Uma aplicação web simples e elegante para gerenciamento de tarefas, desenvolvida com foco em **experiência do usuário, persistência de dados e feedback visual**.

O projeto permite adicionar, concluir e remover tarefas, além de manter os dados salvos no navegador. Quando todas as tarefas são concluídas, uma **animação de confete celebra a conquista do usuário**.

---

## 🚀 Demonstração

🔗 **Acesse o projeto:**
https://listadetarefasfilipeasj.netlify.app

---

## ✨ Funcionalidades

✔ Adicionar novas tarefas
✔ Marcar tarefas como concluídas
✔ Remover tarefas da lista
✔ Contador automático de tarefas concluídas
✔ Persistência de dados com **LocalStorage**
✔ Feedback visual com **animação de confete ao completar todas as tarefas**
✔ Interface simples e responsiva

---

## 🧠 Conceitos aplicados

Este projeto foi desenvolvido aplicando conceitos importantes de desenvolvimento front-end:

* Manipulação do **DOM**
* **Event Delegation** para otimizar eventos
* Persistência de dados com **LocalStorage**
* Atualização dinâmica da interface
* Organização de funções JavaScript
* Integração de biblioteca externa para animação

---

## 🛠 Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **LocalStorage API**
* **Font Awesome** (ícones)
* **Google Fonts – Poppins**
* **tsParticles Confetti** (efeito visual)

---

## 📂 Estrutura do projeto

```
todo-list
│
├── index.html      # Estrutura da aplicação
├── style.css       # Estilização da interface
├── script.js       # Lógica da aplicação
└── assets/         # Imagens e recursos visuais
```

---

## ⚙️ Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/filipeasj/todo-list.git
```

2. Entre na pasta do projeto:

```bash
cd todo-list
```

3. Abra o arquivo `index.html` no navegador.

Não é necessário instalar dependências.

---

## 🎯 Funcionalidades técnicas

### Persistência de tarefas

As tarefas são armazenadas no navegador usando **LocalStorage**:

```javascript
localStorage.setItem("data", listContainer.innerHTML);
```

Isso permite que as tarefas continuem disponíveis mesmo após recarregar a página.

---

### Event Delegation

O clique em tarefas e botões de remoção é tratado por um único listener:

```javascript
listContainer.addEventListener("click", function (e) {
```

Essa abordagem melhora performance e organização do código.

---

### Feedback visual ao completar tarefas

Quando todas as tarefas são concluídas, uma animação de confete é acionada utilizando **tsParticles**.

Isso cria uma experiência mais divertida e motivadora para o usuário.

---

## 💡 Possíveis melhorias futuras

* Drag and drop para reorganizar tarefas
* Categorias ou etiquetas
* Tema claro/escuro
* Integração com banco de dados
* Login de usuário
* Versão mobile com PWA

---

## 👨‍💻 Autor

**Filipe Alves**

🎓 Estudante de Sistemas de Informação
💻 Desenvolvedor Full Stack em formação

🔗 LinkedIn
https://www.linkedin.com/in/filipeasj/

🔗 GitHub
https://github.com/filipeasj

---

## 📜 Licença

Este projeto está sob a licença **MIT**.
Sinta-se livre para estudar, modificar e utilizar como base para outros projetos.
