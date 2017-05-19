var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  let result = false;
  this._storage.forEach( el => {
    if (el === item) {
      result = true;
    }
  });
  return result;
};

setPrototype.remove = function(item) {
  this._storage.pop(item);
};

/*
 * Complexity: What is the time complexity of the above functions?
O(n);
 */
