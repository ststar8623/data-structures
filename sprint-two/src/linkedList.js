var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    debugger;
    var node = new Node(value);
    if (list.head === null) {
      list.head = list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target) {
    let result = false;
    var findTarget = function(node) {
      if (node.value === target) {
        result = true;
        return;
      } else if (node.next !== null) {
        return findTarget(node.next);
      }
    };
    findTarget(list.head);
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */
