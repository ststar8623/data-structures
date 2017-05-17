var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.lowestCount = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if ( this.count - this.lowestCount === 0) {
    return undefined;
  }
  let result = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  return result;
};

Queue.prototype.size = function() {
  return this.count - this.lowestCount;
};


