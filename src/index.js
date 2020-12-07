HTMLElement.prototype.appendChildren = function () {

  for ( let i = 0 ; i < arguments.length ; i++ )

    this.appendChild( arguments[ i ] );

};

const DOM = (() => {
  return {
    sideBar: document.querySelector("#sidebar"),
    mainArea: document.querySelector("#maintodoarea"),
    header: document.querySelector("#todoheader"),
    listSpace: document.querySelector("#todoitems"),
    addButton: document.querySelector("#addtodo"),
    formData: Array.from(document.querySelector("#newtodo")),

    createEditForm: function() {

      const editForm = document.createElement('form');
      editForm.setAttribute("onsubmit", "return false");

      const projectLabel = document.createElement('label');
      projectLabel.for = "project";
      projectLabel.textContent = "Project: ";
      const projectInput = document.createElement('input');

      setAttributes(projectInput, 
        {"type": "text",
         "placeholder": "project name",
         "name": "project"                                
        });

      const nameLabel = document.createElement('label');
      nameLabel.for="name";
      nameLabel.textContent = "Name: ";
      const nameInput = document.createElement('input');
      setAttributes(nameInput, 
        { "type": "text",
          "placeholder": "enter todo name",
          "name": "name",
          "required": "true"
        });

        const dateLabel = document.createElement('label');
        dateLabel.for="duedate";
        dateLabel.textContent = "Due Date: ";
        const dateInput = document.createElement('input');

        setAttributes(dateInput,
          { "type": "date",
            "name": "duedate"
          });
        
        const priorityLabel = document.createElement('label');
        priorityLabel.for = "priority";
        priorityLabel.textContent = "Priority Level: ";
        const lowLabel = document.createElement('label');
        lowLabel.for = "low";
        lowLabel.textContent = "Low";
        const low = document.createElement('input');
        setAttributes(low, 
          { "type": "radio",
            "id": "low",
            "name": "priority",
            "value": "low",
          });

        const mediumLabel = document.createElement('label');
        mediumLabel.for = "medium";
        mediumLabel.textContent = "Medium";
        const medium = document.createElement('input');
        setAttributes(medium, 
          { "type": "radio",
            "id": "medium",
            "name": "priority",
            "value": "medium",
          });

        const highLabel = document.createElement('label');
        highLabel.for = "high";
        highLabel.textContent = "High";
        const high = document.createElement('input');
        setAttributes(high, 
          { "type": "radio",
            "id": "high",
            "name": "priority",
            "value": "high",
          });

        const submitEdit = document.createElement('button');
        submitEdit.id = "edittodo";
        submitEdit.textContent = "Submit";

        editForm.appendChildren(projectLabel, projectInput, nameLabel, nameInput, dateLabel, dateInput, priorityLabel, low, lowLabel, medium, mediumLabel, high, highLabel, submitEdit);

        return {editForm, projectInput, nameInput, dateInput, low, medium, high, submitEdit};
    },

    makeTodoRow: function () {
      const row = document.createElement("div");
      row.className = "todorow";

      const nameSpace = document.createElement("div");
      nameSpace.className = "namespace";
      
      const dateSpace = document.createElement("div");
      dateSpace.className = "datespace";
      
      const prioritySpace = document.createElement("div");
      prioritySpace.className = "priorityspace";
      
      const deleteSpace = document.createElement("div");
      const deleteIcon = document.createElement('i');
      deleteIcon.className = "fas fa-trash";
      deleteSpace.className = "deletespace";
      deleteSpace.appendChild(deleteIcon);
      
      deleteSpace.addEventListener('click', () => {
        row.remove();
      });

      const editSpace = document.createElement("div");
      const editIcon = document.createElement('i');
      editIcon.className = "far fa-edit";
      editSpace.className = "editspace";
      editSpace.appendChild(editIcon);

      row.appendChildren(nameSpace, dateSpace, prioritySpace, deleteSpace, editSpace);

      return { row, nameSpace, dateSpace, prioritySpace, editSpace };
    },

    insertTodo: function (todo, row) {
      row.nameSpace.textContent = todo.name;
      row.dateSpace.textContent = todo.dueDate;
      row.prioritySpace.textContent = todo.priority;
      this.listSpace.appendChild(row.row);

      row.editSpace.addEventListener('click', () => {

        const Form = this.createEditForm();

        Form.projectInput.value = todo.category;
        Form.nameInput.value = todo.name;
        Form.dateInput.value = todo.dueDate;

        if(todo.priority == "low"){
          Form.low.checked = true;
        } else if (todo.priority == "medium") {
          Form.medium.checked = true;
        } else if (todo.priority =="high"){
          Form.high.checked = true
        };
        row.row.remove();
        this.listSpace.appendChild(Form.editForm);

        const editData = Array.from(Form.editForm);

        Form.submitEdit.addEventListener('click', () => {
          submitForm(editData);
          Form.editForm.remove();
        });

      });
    },
  };
})();

const todo = (name, dueDate, priority, category) => {
  return { name, dueDate, priority, category };
};

const submitForm = (form) => {

  const project = form[0].value;
  const name = form[1].value;
  const dueDate = form[2].value;
  let priority = "";
  for (let i = 3; i <= 5; i++) {
    if (form[i].checked == true) priority = form[i].value;
  }
  const newRow = DOM.makeTodoRow();
  const newTodo = todo(name, dueDate, priority, project);
  DOM.insertTodo(newTodo, newRow);

}

DOM.addButton.addEventListener("click", () => {
  submitForm(DOM.formData);
});

function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}