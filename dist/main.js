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
eval("const DOM = (() => {\n\n    return {\n\n        sideBar: document.querySelector(\"#sidebar\"),\n        mainArea: document.querySelector(\"#maintodoarea\"),\n        header: document.querySelector(\"#todoheader\"),\n        listSpace: document.querySelector(\"#todoitems\"),\n        addButton: document.querySelector(\"#addtodo\"),\n        formData: Array.from(document.querySelector(\"#newtodo\")),\n\n        makeTodoRow: function(){\n\n            const row = document.createElement('div');\n            row.className = \"todorow\";\n\n            const nameSpace = document.createElement('div');\n            nameSpace.className = \"namespace\";\n            row.appendChild(nameSpace);\n\n            const dateSpace = document.createElement('div');\n            dateSpace.className = \"datespace\";\n            row.appendChild(dateSpace);\n\n            const prioritySpace = document.createElement('div');\n            prioritySpace.className = \"priorityspace\";\n            row.appendChild(prioritySpace);\n\n            const deleteSpace = document.createElement('div');\n            deleteSpace.className = \"deletespace\";\n            row.appendChild(deleteSpace);\n\n            const editSpace = document.createElement('div');\n            editSpace.className = \"editspace\";\n            row.appendChild(editSpace);\n\n            return {row, nameSpace, dateSpace, prioritySpace};\n\n        },\n\n        insertTodo: function(todo, row) {\n\n            row.nameSpace.textContent = todo.name;\n            row.dateSpace.textContent = todo.dueDate;\n            row.prioritySpace.textContent = todo.priority;\n            this.listSpace.appendChild(row.row);\n\n        }\n\n    }\n\n})();\n\nconst todo = (name, dueDate, priority, category) => {\n    return {name, dueDate, priority, category}\n}\n\nDOM.addButton.addEventListener('click', () => {\n\n    const project = DOM.formData[0].value;\n    const name = DOM.formData[1].value;\n    const dueDate = DOM.formData[2].value;\n    let priority = \"\";\n    for (let i=3; i<=5; i++){\n        if(DOM.formData[i].checked == true)\n        priority = DOM.formData[i].value;\n    }\n\n    const newRow = DOM.makeTodoRow();\n    const newTodo = todo(name, dueDate, priority, project);\n\n    DOM.insertTodo(newTodo, newRow);\n\n});\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
/******/ })()
;