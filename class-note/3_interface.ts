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