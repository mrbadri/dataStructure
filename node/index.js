/**
 * A class that represents a node in a tree structure
 * @class
 */
class Node {
  /**
   * The data stored in this node
   * @type {any}
   */
  data;

  /**
   * The left child node of this node
   * @type {Node | null}
   */
  left = null;

  /**
   * The right child node of this node
   * @type {Node | null}
   */
  right = null;

  /**
   * Creates a new instance of a Node
   * @constructor
   * @param {any} data - The data to be stored in this node
   * @param {Node | null} [left=null] - The left child node of this node
   * @param {Node | null} [right=null] - The right child node of this node
   */
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;
