/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("HTMLElement.prototype.appendChildren = function () {\n\n  for ( let i = 0 ; i < arguments.length ; i++ )\n\n    this.appendChild( arguments[ i ] );\n\n};\n\nconst DOM = (() => {\n  return {\n    sideBar: document.querySelector(\"#sidebar\"),\n    mainArea: document.querySelector(\"#maintodoarea\"),\n    header: document.querySelector(\"#todoheader\"),\n    listSpace: document.querySelector(\"#todoitems\"),\n    addButton: document.querySelector(\"#addtodo\"),\n    formData: Array.from(document.querySelector(\"#newtodo\")),\n\n    createEditForm: function() {\n\n      const editForm = document.createElement('form');\n      editForm.setAttribute(\"onsubmit\", \"return false\");\n\n      const projectLabel = document.createElement('label');\n      projectLabel.for = \"project\";\n      projectLabel.textContent = \"Project: \";\n      const projectInput = document.createElement('input');\n\n      setAttributes(projectInput, \n        {\"type\": \"text\",\n         \"placeholder\": \"project name\",\n         \"name\": \"project\"                                \n        });\n\n      const nameLabel = document.createElement('label');\n      nameLabel.for=\"name\";\n      nameLabel.textContent = \"Name: \";\n      const nameInput = document.createElement('input');\n      setAttributes(nameInput, \n        { \"type\": \"text\",\n          \"placeholder\": \"enter todo name\",\n          \"name\": \"name\",\n          \"required\": \"true\"\n        });\n\n        const dateLabel = document.createElement('label');\n        dateLabel.for=\"duedate\";\n        dateLabel.textContent = \"Due Date: \";\n        const dateInput = document.createElement('input');\n\n        setAttributes(dateInput,\n          { \"type\": \"date\",\n            \"name\": \"duedate\"\n          });\n        \n        const priorityLabel = document.createElement('label');\n        priorityLabel.for = \"priority\";\n        priorityLabel.textContent = \"Priority Level: \";\n        const lowLabel = document.createElement('label');\n        lowLabel.for = \"low\";\n        lowLabel.textContent = \"Low\";\n        const low = document.createElement('input');\n        setAttributes(low, \n          { \"type\": \"radio\",\n            \"id\": \"low\",\n            \"name\": \"priority\",\n            \"value\": \"low\",\n          });\n\n        const mediumLabel = document.createElement('label');\n        mediumLabel.for = \"medium\";\n        mediumLabel.textContent = \"Medium\";\n        const medium = document.createElement('input');\n        setAttributes(medium, \n          { \"type\": \"radio\",\n            \"id\": \"medium\",\n            \"name\": \"priority\",\n            \"value\": \"medium\",\n          });\n\n        const highLabel = document.createElement('label');\n        highLabel.for = \"high\";\n        highLabel.textContent = \"High\";\n        const high = document.createElement('input');\n        setAttributes(high, \n          { \"type\": \"radio\",\n            \"id\": \"high\",\n            \"name\": \"priority\",\n            \"value\": \"high\",\n          });\n\n        const submitEdit = document.createElement('button');\n        submitEdit.id = \"edittodo\";\n        submitEdit.textContent = \"Submit\";\n\n        editForm.appendChildren(projectLabel, projectInput, nameLabel, nameInput, dateLabel, dateInput, priorityLabel, low, lowLabel, medium, mediumLabel, high, highLabel, submitEdit);\n\n        return {editForm, projectInput, nameInput, dateInput, low, medium, high, submitEdit};\n    },\n\n    makeTodoRow: function () {\n      const row = document.createElement(\"div\");\n      row.className = \"todorow\";\n\n      const nameSpace = document.createElement(\"div\");\n      nameSpace.className = \"namespace\";\n      \n      const dateSpace = document.createElement(\"div\");\n      dateSpace.className = \"datespace\";\n      \n      const prioritySpace = document.createElement(\"div\");\n      prioritySpace.className = \"priorityspace\";\n      \n      const deleteSpace = document.createElement(\"div\");\n      const deleteIcon = document.createElement('i');\n      deleteIcon.className = \"fas fa-trash\";\n      deleteSpace.className = \"deletespace\";\n      deleteSpace.appendChild(deleteIcon);\n      \n      deleteSpace.addEventListener('click', () => {\n        row.remove();\n      });\n\n      const editSpace = document.createElement(\"div\");\n      const editIcon = document.createElement('i');\n      editIcon.className = \"far fa-edit\";\n      editSpace.className = \"editspace\";\n      editSpace.appendChild(editIcon);\n\n      row.appendChildren(nameSpace, dateSpace, prioritySpace, deleteSpace, editSpace);\n\n      return { row, nameSpace, dateSpace, prioritySpace, editSpace };\n    },\n\n    insertTodo: function (todo, row) {\n      row.nameSpace.textContent = todo.name;\n      row.dateSpace.textContent = todo.dueDate;\n      row.prioritySpace.textContent = todo.priority;\n      this.listSpace.appendChild(row.row);\n\n      row.editSpace.addEventListener('click', () => {\n\n        const Form = this.createEditForm();\n\n        Form.projectInput.value = todo.category;\n        Form.nameInput.value = todo.name;\n        Form.dateInput.value = todo.dueDate;\n\n        if(todo.priority == \"low\"){\n          Form.low.checked = true;\n        } else if (todo.priority == \"medium\") {\n          Form.medium.checked = true;\n        } else if (todo.priority ==\"high\"){\n          Form.high.checked = true\n        };\n        row.row.remove();\n        this.listSpace.appendChild(Form.editForm);\n\n        const editData = Array.from(Form.editForm);\n\n        Form.submitEdit.addEventListener('click', () => {\n          submitForm(editData);\n          Form.editForm.remove();\n        });\n\n      });\n    },\n  };\n})();\n\nconst todo = (name, dueDate, priority, category) => {\n  return { name, dueDate, priority, category };\n};\n\nconst submitForm = (form) => {\n\n  const project = form[0].value;\n  const name = form[1].value;\n  const dueDate = form[2].value;\n  let priority = \"\";\n  for (let i = 3; i <= 5; i++) {\n    if (form[i].checked == true) priority = form[i].value;\n  }\n  const newRow = DOM.makeTodoRow();\n  const newTodo = todo(name, dueDate, priority, project);\n  DOM.insertTodo(newTodo, newRow);\n\n}\n\nDOM.addButton.addEventListener(\"click\", () => {\n  submitForm(DOM.formData);\n});\n\nfunction setAttributes(el, attrs) {\n  for(var key in attrs) {\n    el.setAttribute(key, attrs[key]);\n  }\n}\n\n//# sourceURL=webpack://todo/./src/index.js?");
/******/ })()
;