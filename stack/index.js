/**
 * @class Stack
 * @param {array}
 */
class Stack {
  constructor(initial) {
    this.items = initial || [];
  }

  /**
   * @function isEmpty Checks if the stack is empty
   * @return {boolean}
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * @function size  Returns the size of stack
   * @returns {number}
   */
  size() {
    return this.items.length;
  }

  /**
   * @function peek Returns the top element in the stack
   * @returns {*}
   */
  peek() {
    return this.items[this.size() - 1];
  }

  /**
   * @function push Adds an element to the top of the stack
   * @param {*} element
   */
  push(element) {
    return this.items.push(element);
  }

  /**
   * @function pop Removes and returns the top element in the stack
   * @returns {*}
   */
  pop() {
    if (this.isEmpty()) return "Underflow";

    return this.items.pop();
  }

  /**
   * @function toArray  Returns the remaining elements as an array
   * @returns {array}
   */
  toArray() {
    return this.items.slice();
  }

  /**
   * @function clear Clears all elements from the stack.
   */
  clear() {
    this.items = [];
  }

  /**
   * @function fromArray Creates a stack from an existing array
   * @param {array} [elements]
   * @return {Stack}
   */
  static fromArray(elements) {
    return new Stack(elements);
  }
}

module.exports = Stack;
