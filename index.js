// Hello world

const Stack = require("./stack");

const stack = new Stack();

stack.push(123);
stack.push(124);
stack.push(125);

console.log(stack.peek());

const newStack = stack.clone();

console.log(newStack.peek());
