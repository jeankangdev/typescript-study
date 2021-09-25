interface User {
  hobby: string;
}

// utilize interface on parameters
let jean: User = {
  hobby: 'swimming'
}

// utilize interface for functions
function getUser(user: User) {
  console.log(user);
}

const capt = {
  hobby: 'fighting'
}

getUser(capt);

// utilize interface for function's spec(structure)
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

// indexing
interface StringArray {
  [index: number]: string;
}

let arr: ['a', 'b', 'c'];
arr[0]; // 'a'

// dictionary pattern
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/
}

obj['cssFile'] = /\.css$/;

Object.keys(obj).forEach(function(vaue) {
  
});

// extending interface
interface Person {
  name: string;
  age: number;
}

// interface Developer {
//   name: string;
//   age: number;
//   language: string;
// }

interface Developer extends Person {
  language: string;
}

let dev: Developer = {
  name: 'Jean',
  age: 0,
  language: 'multi'
}