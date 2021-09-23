// JS string declaration
// let str = 'hello';

// TS string declaration
let str: string = 'hello';

// TS number declaration
let num: number = 10;

// TS Array declaration
let arr: Array<number> = [1, 2, 3];
let arr2: number[] = [1, 2, 3]; // arr = arr2
let arr3: Array<string> = ['Capt', 'Thor', 'Hulk', 10]; // 10 causes an error since it's not a string

// TS tuple (index type)
let address: [string, number] = ['gangnam', 100];

// TS object
let obj: object = [];

let person: object = {
  name: 'capt',
  age: 100
  // X error
};

let person: { name: string, age: number} = {
  // O error since there are no variables inside the object
  // that are name(string), and age(number)
};

// TS logical value
let show: boolean = true;

