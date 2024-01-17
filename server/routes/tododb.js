// tododb.js

let tododata = [];

function addTodo(task, desc) {
   tododata.push({ task, desc });
}

module.exports = {
   tododata,
   addTodo
};
