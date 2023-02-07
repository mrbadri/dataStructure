/**
 * @param {object} {0:"value" , 1:"value"}
 */
var Stack = function () {
  this.count = 0;
  this.storage = {};

  /**
   * @function isEmpty Checks if the stack is empty
   * @return {boolean}
   */
  this.isEmpty = function () {
    return this.count === 0;
  };

  /**
   * @function size  Returns the size of stack
   * @returns {number}
   */
  this.size = function () {
    return this.count;
  };

  /**
   * @function peek Returns the top element in the stack
   * @returns {*}
   */
  this.peek = function () {
    return this.storage[this.count - 1];
  };

  /**
   * @function push Adds an element to the top of the stack
   * @param {*} value
   */
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  /**
   * @function pop Removes and returns the top element in the stack.
   * @returns {*}
   */
  this.pop = function () {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  /**
   * @function clear Clears all elements from the stack.
   */
  this.clear = function () {
    this.storage = {};
  };
};

module.exports = Stack;
