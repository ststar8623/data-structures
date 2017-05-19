

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  var overRide = false;
  if (!bucket) {
    bucket = [];
    this._storage[index] = bucket;
  }

  bucket.forEach(el => {
    if (el[0] === k) {
      el[1] = v;
      overRide = true;
    }
  });

  if (!overRide) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage[index];

  if (!bucket) {
    return undefined;
  }

  for (let i = 0; i < bucket.length; i++) {
    let el = bucket[i];
    if (el[0] === k) {
      return el[1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage[index];

  if (!bucket) {
    return undefined;
  }

  bucket.forEach(el => {
    if (el[0] === k) {
      bucket.splice(el, 1);
      return el[1];
    }
  });
  // for (let i = 0; i < bucket.length; i++) {
  //   let el = bucket[i];
  //   if (el[0] === k) {
  //     bucket.splice(i, 1);
  //   }
  //   return el[1];
  // }

  return undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 0(1) or O(n)
 */