

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var overRide = false;

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
      bucket.splice(tuples, 1);
    }
  });

  return undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 0(1) or O(n)
 */