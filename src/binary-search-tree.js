const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

class Tree {
  constructor() {
    this.node = null;
  }

  addNode(node, newNode) {
    if (newNode.data >= node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    }
  }

  findNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  removeNode(node, data) {
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      }

      const newNode = this.viewMinNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  viewMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.viewMinNode(node.left);
    }
  }

  viewMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.viewMaxNode(node.right);
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = new Tree();
  }

  root() {
    if (this.tree.node === null || this.tree.node.data === null || this.tree.node.data === undefined) {
      return null;
    }
    return this.tree.node;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.tree.node === null || this.tree.node.data === null || this.tree.node.data === undefined) {
      this.tree.node = newNode;
    } else {
      this.tree.addNode(this.tree.node, newNode);
    }
  }

  has(data) {
    if (this.find(data) !== null) {
      return true;
    }

    return false;
  }

  find(data) {
    if (this.tree.node.data === null || this.tree.node.data === undefined) {
      return null;
    }

    return this.tree.findNode(this.tree.node, data);
  }

  remove(data) {
    this.tree.node = this.tree.removeNode(this.tree.node, data);
  }

  min() {
    if (this.tree.node === null || this.tree.node === undefined) {
      return null;
    }

    return this.tree.viewMinNode(this.tree.node).data;
  }

  max() {
    if (this.tree.node === null || this.tree.node === undefined) {
      return null;
    }
    return this.tree.viewMaxNode(this.tree.node).data;
  }
}

module.exports = {
  BinarySearchTree,
};
