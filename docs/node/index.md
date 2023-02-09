[< Back](./../../README.md)

# Node

This class represents a node in a tree structure.

## Usage

Here's an example of how to use the Node class:

    const Node = require('???');

    const root = new Node('A');
    const leftChild = new Node('B');
    const rightChild = new Node('C');

    root.left = leftChild; // true
    root.right = rightChild; // true

## Properties

### data:

The data stored in this node. Can be of any type.

### left:

The left child node of this node. Can be either a Node instance or null.

### right:

The right child node of this node. Can be either a Node instance or null.

## Constructor

The `Node` class has a constructor that allows you to create a new instance of a Node. It takes the following parameters:

`data`: The data to be stored in this node.

`left` (optional): The left child node of this node. Default value is null.

`right` (optional): The right child node of this node. Default value is null.
