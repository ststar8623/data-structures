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

  // while current isn't null
  while (current) {
    // check if current is greater than insert value
    if (current.value > node.value) {
      // if left tree is null, insert node
      if (!current.left) {
        current.left = node;
        break;
      }
      // if left tree isn't null, set current equal to left tree
      current = current.left;
      // check if current is less than insert node
    } else if (current.value < node.value) {
      // if right tree is null, insert node
      if (!current.right) {
        current.right = node;
        break;
      }
      // if right tree isn't null, set current equal to right tree
      current = current.right;
    } else {
      // if value is equal to any value in the tree, break out from loop
      break;
    }
  }
};

tree.contains = function(value) {
  var current = this;
  // keep looping until current become null
  while (current) {
    // auto return true if current is equal to value
    if (current.value === value) {
      // break out from loop
      return true;
    }
    // if current is greater than value 
    if (current.value > value) {
      // set current equal to left tree and back to loop
      current = current.left;
    } else {
      // if current is less than value,
      // set current equal to right tree and back to loop
      current = current.right;
    }
  }
  // if nothing is found, return false
  return false;
};

tree.depthFirstLog = function(callback) {
  var array = [];
  // push whole tree into array
  array.push(this);
  do {
    // take out the first node in the array
    var node = array.shift();
    // check the node if value is found
    if (node.value) {
      // callback the value
      callback(node.value);
    }
    // if left tree is found, push it back to array for looping
    if (node.left) {
      array.push(node.left);
    }
    // if right tree is found, push it back to array for looping
    if (node.right) {
      array.push(node.right);
    }
    // keep looping until array is empty
  } while (array.length);
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(log(n))
 */