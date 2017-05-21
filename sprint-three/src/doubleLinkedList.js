var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

var doubleLinkedList = function() {
  var list = Object.create(doubleLinkedList.prototype);
  list.head = null;
  list.tail = null;
  return list;
};

doubleLinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if (!this.tail) {
    this.tail = this.head = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
};

doubleLinkedList.prototype.addToHead = function(value) {
  var node = new Node(value);
  if (!this.head) {
    return this.addToTail(node.value);
  } else {
    this.head.previous = node;
    node.next = this.head;
    this.head = node;
  }
};

doubleLinkedList.prototype.removeTail = function() {
  var current = this.tail;
  this.tail = this.tail.previous;
  return current.value;
};

doubleLinkedList.prototype.removeHead = function() {
  var current = this.head;
  this.head = this.head.next;
  return current.value;
};

doubleLinkedList.prototype.contains = function(target) {
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

var list = new doubleLinkedList();
list.addToTail(4);
list.addToHead(5);
list.removeTail();

console.log(list);
/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */
