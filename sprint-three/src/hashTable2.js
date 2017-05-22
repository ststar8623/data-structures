var HashTable = function(size) {
  this._limit = size || 4;
  this._storage = [];
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  var overRide = false;

  this._size++;

  // if bucket isn't an array, set 
  if (!Array.isArray(bucket)) {
    bucket = [];
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
    bucket.push(tuple);
  }

  this._storage[index] = bucket;

  if (this._size / this._limit >= 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

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
  let bucket = this._storage[index];

  // if bucket isn't found, return undefined
  if (!bucket) {
    return undefined;
  }

  // loop through tuple to remove tuple if its found
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        this._size--;
        bucket.splice(i, 1);
      }
    }
  }

  if (this._size / this._limit <= 0.25) {
    this.resize(this._limit / 2);
  }

  return undefined;
};

HashTable.prototype.resize = function(newLimit) {
  // keep a reference to the storage for reset
  var oldStorage = this._storage;
  // update the size limit of the storage
  storageLimit = newLimit;

  // Clear the storage
  this._storage = [];

  // go thru each bucket in the storage
  for (let i = 0; i < oldStorage.length; i++) {
    let bucket = oldStorage[i];
    if (bucket) {
      // reassign for each bucket
      for (let j = 0; j < bucket.length; j++) {
        var index = getIndexBelowMaxForKey(bucket[j][0], storageLimit);
        var newBucket = this._storage[index];
        if (newBucket) {
          newBucket.push([bucket[j][0], bucket[j][1]]);
        } else {
          newBucket = [];
          newBucket.push([bucket[j][0], bucket[j][1]]);
        }
        this._storage[index] = newBucket;
      }
    }
  }
  this._limit = storageLimit;
};

HashTable.prototype.length = function() {
  return this._size;
};

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var table = new HashTable();
table.insert('steven', 'leung');
table.insert('leung', 'steven');
table.insert('wow', 'omg');
table.insert('hi', 'bye');
table.insert('yeah', 1);
table.insert('1', 1);
table.insert('2', 2);

table.remove('23423');
table.remove('yeah');
table.remove('steven');
table.remove('wow');
table.remove('yeah');

console.log(table);
/*
 * Complexity: What is the time complexity of the above functions?
 0(1) or O(n)
 */