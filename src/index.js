const DOM = (() => {
  return {
    sideBar: document.querySelector("#sidebar"),
    mainArea: document.querySelector("#maintodoarea"),
    header: document.querySelector("#todoheader"),
    listSpace: document.querySelector("#todoitems"),
    addButton: document.querySelector("#addtodo"),
    formData: Array.from(document.querySelector("#newtodo")),

    makeTodoRow: function () {
      const row = document.createElement("div");
      row.className = "todorow";

      const nameSpace = document.createElement("div");
      nameSpace.className = "namespace";
      row.appendChild(nameSpace);

      const dateSpace = document.createElement("div");
      dateSpace.className = "datespace";
      row.appendChild(dateSpace);

      const prioritySpace = document.createElement("div");
      prioritySpace.className = "priorityspace";
      row.appendChild(prioritySpace);

      const deleteSpace = document.createElement("div");
      deleteSpace.className = "deletespace";
      row.appendChild(deleteSpace);

      const editSpace = document.createElement("div");
      editSpace.className = "editspace";
      row.appendChild(editSpace);

      return { row, nameSpace, dateSpace, prioritySpace };
    },

    insertTodo: function (todo, row) {
      row.nameSpace.textContent = todo.name;
      row.dateSpace.textContent = todo.dueDate;
      row.prioritySpace.textContent = todo.priority;
      this.listSpace.appendChild(row.row);
    },
  };
})();

const todo = (name, dueDate, priority, category) => {
  return { name, dueDate, priority, category };
};

DOM.addButton.addEventListener("click", () => {
  const project = DOM.formData[0].value;
  const name = DOM.formData[1].value;
  const dueDate = DOM.formData[2].value;
  let priority = "";
  for (let i = 3; i <= 5; i++) {
    if (DOM.formData[i].checked == true) priority = DOM.formData[i].value;
  }

  const newRow = DOM.makeTodoRow();
  const newTodo = todo(name, dueDate, priority, project);

  DOM.insertTodo(newTodo, newRow);
});
