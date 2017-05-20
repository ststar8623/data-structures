var BinarySearchTree = function(value) {
  var someInstance = Object.create(tree);
  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;
  return someInstance;
};

var tree = {};

tree.insert = function(value) {
  var node = BinarySearchTree(value);
  var current = this;

  while (current) {
    if (current.value > node.value) {
      if (!current.left) {
        current.left = node;
        break;
      }
      current = current.left;
    } else if (current.value < node.value) {
      if (!current.right) {
        current.right = node;
        break;
      }
      current = current.right;
    } else {
      break;
    }
  }
};

tree.contains = function(value) {
  var current = this;
  while (current) {
    if (current.value === value) {
      return true;
    }
    if (current.value > value) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return false;
};

tree.depthFirstLog = function(callback) {
  var array = [];
  array.push(this);
  while (array.length) {
    var node = array.shift();
    if (node.value) {
      callback(node.value);
    }
    if (node.left) {
      array.push(node.left);
    }
    if (node.right) {
      array.push(node.right);
    }
  }
};

var array = [];
var func = (val) => { array.push(val); };
var binarySearchTree = BinarySearchTree(5);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(10);
binarySearchTree.insert(1);
binarySearchTree.contains(7);

console.log(binarySearchTree);
/*
 * Complexity: What is the time complexity of the above functions?
 */


// { value: 5, 
//   left: { 
//     value: 2, 
//     left: null, 
//     right: { 
//       value: 3, 
//       left: null, 
//       right: null 
//     }, 
//   right: { 
//     value: 7, 
//     left: { 
//       value: 6, 
//       left: null, 
//       right: null 
//     }, 
//     right: null 
//   } 
// }