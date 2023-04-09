const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

console.log(Node);

let node = new Node();

class BinarySearchTree {
  constructor() {
    this.node = node;
    this.listNode = [];
  }

  insertNode(node, newNode) {
    if (newNode.data >= node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  }

  root() {
    if (this.node.data === undefined) {
      return null;
    }
    return node;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.node.data === null || this.node.data === undefined) {
      this.node.data = data;
    } else {
      this.insertNode(this.node, newNode);
    }
  }

  has(data) {
    console.log(this.find(data));
    if (this.find(data) !== null && this.find(data) !== undefined) {
      return true;
    }

    return false;
  }

  nextFind(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.nextFind(node.left, data);
    } else if (data > node.data) {
      return this.nextFind(node.right, data);
    } else {
      return node;
    }
  }

  find(data) {
    if (this.node.data === null || this.node.data === undefined) {
      return null;
    }

    return this.nextFind(this.node, data);
  }

  remove(data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  viewMinNode(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return this.viewMinNode(node.left);
    }
  }

  min() {
    throw new NotImplementedError("Not implemented");
    if (this.node === null || this.node === undefined) {
      return null;
    }

    return this.viewMinNode(this.node);
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);

// console.log("tree.has(54)", tree.has(54));
// console.log("tree.has(8)", tree.has(8));
// console.log("tree.has(7)", tree.has(7));
// console.log("tree.has(4)", tree.has(4));

module.exports = {
  BinarySearchTree,
};
