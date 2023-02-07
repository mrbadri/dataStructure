# Stack

A JavaScript implementation of a Stack data structure. A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. In other words, the last element added to the stack will be the first one to be removed.

## Usage
To create a new stack, you can initialize it with an array of elements or an empty array if not specified.

    const Stack = require('???');

    const stack = new Stack([1, 2, 3]);

## Example

    const Stack = require("???");
    const stack = new Stack([1, 2, 3]);

    console.log(stack.isEmpty()); // false
    console.log(stack.size()); // 3
    console.log(stack.peek()); // 3
    stack.push(4);
    console.log(stack.peek()); // 4
    console.log(stack.pop()); // 4
    console.log(stack.peek()); // 3

    stack.clear();
    console.log(stack.isEmpty()); // true

## Methods

### isEmpty()

Checks if the stack is empty. Returns `true` if the stack is empty, and `false` otherwise.

    stack.isEmpty();

### size()

Returns the number of elements in the stack.

    stack.size();

### peek()

Returns the top element in the stack.

    stack.peek();

### push(element)

Adds `element` to the top of the stack.

    stack.push(4);

### pop()

Removes and returns the top element in the stack. If the stack is empty, returns `Underflow`.

    stack.pop();

### toArray()

Returns the remaining elements as an array, returns: `Array`.

    stack.toArray();

### clear()

Clears all elements from the stack.

    stack.clear();

### fromArray(elements)

Creates a stack from an existing array, returns `Stack`

    const elements = [5, 6, 7];
    const newStack = Stack.fromArray(elements);
