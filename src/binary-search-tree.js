//const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);
    function addNode(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.rigth = addNode(node.rigth, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.rootTree, data)
    function searchNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return data < node.data ?
        searchNode(node.left, data) :
        searchNode(node.rigth, data);
    }
  }

  find(data) {
    return searchNode(this.rootTree, data);

    function searchNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return data < node.data ?
        searchNode(node.left, data) :
        searchNode(node.rigth, data);
    }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);
    function removeNode(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.rigth = removeNode(node.rigth, data);
        return node;
      } else {
        if (!node.left && !node.rigth) return null;
        if (!node.left) {
          node = node.rigth;
          return node;
        }
        if (!node.rigth) {
          node = node.left;
          return node;
        }
        let rigthMin = node.rigth;
        while (rigthMin.left) {
          rigthMin = rigthMin.left;
        }
        node.data = rigthMin.data;
        node.rigth = removeNode(node.rigth, rigthMin.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootTree) return;
    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootTree) return;
    let node = this.rootTree;
    while (node.rigth) {
      node = node.rigth;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};