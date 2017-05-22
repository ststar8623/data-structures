var Tree = function(value) {
  var tree = Object.create(Tree.prototype);
  tree.value = value;
  tree.children = [];
  tree.parent = null;
  return tree;
};

Tree.prototype.addChild = function(value) {
  var node = Tree(value);
  node.parent = this;
  this.children[this.children.length] = node;
};

Tree.prototype.contains = function(target) {
  var array = this.children.slice();

  if (this.value === target) {
    return true;
  }
  while (array.length) {
    var node = array.shift();
    if (node.value === target) {
      return true;
    } else if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        array.push(node.children[i]);
      }
    }
  }
  return false;
};

Tree.prototype.removeFromParent = function(target) {
  var current = this.children;

  var removeChild = function(child) {
    child.forEach(children => {
      let parent = children.parent;
      if (parent.value === target) {
        child.splice(0);
      } else if (children.children.length > 0) {
        removeChild(children.children);
      }
    });
  };
  removeChild(current);
};

var tree = new Tree(5);
tree.addChild(6);
tree.addChild(7);
tree.addChild(8);
tree.addChild(9);
tree.children[0].addChild(10);
tree.children[1].addChild(11);
tree.children[2].addChild(12);
tree.children[3].addChild(13);
console.log(tree);