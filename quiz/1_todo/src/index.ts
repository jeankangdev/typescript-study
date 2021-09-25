// let todoItems: object[];
let todoItems: { id: number, title: string, done: boolean }[];

// api
function fetchTodoItems(): { id: number; title: string; done: boolean }[] {
  const todos = [
    { id: 1, title: 'Hello', done: false },
    { id: 2, title: 'Type', done: false },
    { id: 3, title: 'Script', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: { id: number; title: string; done: boolean }): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: { id: number; title: string; done: boolean }): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): { id: number; title: string; done: boolean }[] {
  return todoItems.filter((item: { id: number; title: string; done: boolean }) => item.done);
}

function addTwoTodoItems(todo1: any, todo2: any) {
  addTodo(todo1);
  addTodo(todo2);
}

// NOTE: util function
function log(): void {
  console.log(todoItems);
}

let todo1 = { id: 4, title: '타입', done: false };
let todo2 = { id: 5, title: '타입', done: false };

todoItems = fetchTodoItems();
addTwoTodoItems(todo1, todo2);
log();
