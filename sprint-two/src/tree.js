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
  var result = false;
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
    })
  };
  findTarget(this.children);
  return result;
};

var tree = new Tree(1);
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
console.log(tree.contains(1));
console.log(tree);
/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */
