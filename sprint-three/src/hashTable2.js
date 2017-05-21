var { LimitedArray, getIndexBelowMaxForKey } = require('../src/hashTableHelpers2.js');

var HashTable = function(size) {
  this._limit = size;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.resize = function(newLimit) {
  // keep a reference to the storage for reset
  var oldStorage = this._storage.storage();
  // update the size limit of the storage
  storageLimit = newLimit;
  
  var hashTable = new HashTable(storageLimit);

  // Clear the storage
  
  // go thru each bucket in the storage
  for (let i = 0; i < oldStorage.length; i++) {
    let bucket = oldStorage[i];
    if (bucket) {
      // reassign for each bucket
      for (let j = 0; j < bucket.length; j++) {
        hashTable.insert(bucket[j][0], bucket[j][1]);
      }
    }
  }

  return hashTable;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var overRide = false;

  this._size++;

  // if bucket isn't an array, set 
  if (!Array.isArray(bucket)) {
    this._storage.set(index, []);
  }

  // overwrite value with same key, set overRide to 'TRUE'
  if (Array.isArray(bucket)) {
    bucket.forEach(tuple => {
      if (tuple[0] === k) {
        tuple[1] = v;
        overRide = true;
      }
    });
  }

  // if overRide is 'FALSE', push a tuple in
  var tuple = [k, v];
  if (!overRide) {
    this._storage.get(index).push(tuple);
  }

  if (this._size / this._limit >= 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  // if bucket doens't exit, return undefined;
  if (!bucket) {
    return undefined;
  }

  // loop through each tuple to search the value
  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);

  // if bucket isn't found, return undefined
  if (!bucket) {
    return undefined;
  }

  // loop through tuple to remove tuple if its found
  bucket.forEach(tuples => {
    if (tuples[0] === k) {
      this._size--;
      bucket.splice(tuples, 1);
    }
  });

  if (this._size / this._limit <= 0.25) {
    this.resize(this._limit / 2);
  }

  return undefined;
};

HashTable.prototype.length = function() {
  return this._size + ' ' + this._limit;
};

var table = new HashTable(10);
table.insert('steven', 'leung');
table.insert('leung', 'leung');
table.insert('wow', 'omg');
table.insert('hi', 'bye');
table.insert('yeah', 1);
table.insert('1', 1);
table.insert('2', 2);
table.insert('3', 3);
table.insert('6', 8);
table.insert('7', 19);
table.insert('12', 234);
table.insert('123',234);
table.insert('234', 234);
table.insert('234324', 32423);
table.insert('34234234', 234234);
table.insert('23423315', 23453245);
table.insert('23423', 2342342);
console.log(table.length());

console.log(table._storage.storage());


/*
 * Complexity: What is the time complexity of the above functions?
 0(1) or O(n)
 */