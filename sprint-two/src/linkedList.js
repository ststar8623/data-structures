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
  if (!this.tail) {
    this.tail = this.head = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
};

LinkedList.prototype.addToHead = function(value) {
  var node = new Node(value);
  if (!this.head) {
    return this.addToTail(node);
  } else {
    this.head.previous = node;
    node.next = this.head;
    this.head = node;
  }
};

LinkedList.prototype.removeTail = function() {
  var current = this.tail;
  this.tail = this.tail.previous;
  return current.value;
};

LinkedList.prototype.removeHead = function() {
  var current = this.head;
  this.head = this.head.next;
  return current.value;
};

LinkedList.prototype.contains = function(target) {
  var node = this.head;
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

var linkedList = new LinkedList();
linkedList.addToTail(8);
linkedList.addToHead(1);
linkedList.addToTail(7);

console.log(linkedList);
/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */
