var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Define count
  let count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // Add value to queue
    storage[count] = value;
    // Increment count
    count++;
  };

  someInstance.pop = function() {
    if (count === 0) {
      return undefined;
    }

    // Decrement count
    count--;
    // Save node to delete in variable
    let result = storage[count];
    // Delete node
    delete storage[count];
    // Return saved node
    return result;
  };

  someInstance.size = function() {
    // Return count
    return count;
  };

  return someInstance;
};