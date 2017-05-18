var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;
  var findTarget = function(children) {
    for (let i = 0; i < children.length; i++) {
      if (children[i].value === target) {
        result = true;
        return;
      } else if (children[i].children !== []) {
        let child = children[i];
        findTarget(child.children);
      }
    }
  };
  findTarget(this.children);
  return result;
};

var tree = new Tree(1);
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
console.log(tree.contains(8));
console.log(tree);
/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */
