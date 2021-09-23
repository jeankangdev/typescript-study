// function's parameter has types
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

// function's return value has a type
function add(): number {
  return 10;
}

// function has a type
function sum2(a: number, b: number): number {
  return a + b;
}

sum2(10, 20, 30, 40, 50); // we can't pass more parameters to the function in TS

// function's optional parameter
function log(a: string, b?: string) {
}

log ('hello');
log('hello ts', 'abc');