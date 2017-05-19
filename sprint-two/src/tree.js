var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let result = false;
  if (this.value === target) {
    result = true;
  }

  var findTarget = function(children) {
    children.forEach(child => {
      if (child.value === target) {
        result = true;
      } else if (child.children !== []) {
        return findTarget(child.children);
      }
    });
  };

  findTarget(this.children);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */
