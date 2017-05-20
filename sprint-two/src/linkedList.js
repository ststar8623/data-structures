var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

var LinkedList = function() {
  var list = Object.create(LinkedList.prototype);
  list.head = null;
  list.tail = null;
  return list;
};

LinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if (!list.tail) {
    list.tail = list.head = node;
  } else {
    list.tail.next = node;
    node.previous = list.tail;
    list.tail = node;
  }
};

LinkedList.prototype.addToHead = function(value) {
  var node = new Node(value);
  if (!list.head) {
    return list.addToTail(node);
  } else {
    list.head.previous = node;
    node.next = list.head;
    list.head = node;
  }
};

LinkedList.prototype.removeTail = function() {
  var current = list.tail;
  list.tail = list.tail.previous;
  return current.value;
};

LinkedList.prototype.removeHead = function() {
  var current = list.head;
  list.head = list.head.next;
  return current.value;
};

LinkedList.prototype.contains = function(target) {
  var node = list.head;
  if (node.value === target) {
    return true;
  }
  while (node.next) {
    if (node.next.value === target) {
      return true;
    } else {
      node = node.next;
    }
  }
  return false;
};

var list = new LinkedList();
list.addToTail(8);
list.addToHead(1);
list.addToTail(7);

console.log(list);
/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */
