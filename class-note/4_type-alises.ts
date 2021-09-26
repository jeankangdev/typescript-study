// interface Employee {
//   name: string;
//   age: number;
// }

type Employee = {
  name: string;
  age: number;
}

let jk: Employee = {
  name: 'Jean',
  age: 29
}
// interface => show it's interface
// type => show it's type + properties inside it

type MyString = string;
let string: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
}