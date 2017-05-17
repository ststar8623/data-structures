var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.lowestCount = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count - this.lowestCount === 0) {
    return undefined;
  }

  let result = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  return result;
};

queueMethods.size = function() {
  return this.count - this.lowestCount;
};


