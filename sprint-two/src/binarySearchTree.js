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
  do {
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
  } while (array.length);
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(log(n))
 */