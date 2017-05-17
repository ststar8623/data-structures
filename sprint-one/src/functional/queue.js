var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Define count and lowest count
  let count = 0;
  let lowestCount = 0;

  someInstance.enqueue = function(value) {
    // Add value to queue
    storage[count] = value;
    // Increment count
    count++;
  };

  someInstance.dequeue = function() {
    if(count - lowestCount === 0){
      return undefined;
    }
    // Save node to delete in variable
    let result = storage[lowestCount];
    // Delete node
    delete storage[lowestCount];
    // Increment lowest count
    lowestCount++;
    // Return saved node
    return result;
  };

  someInstance.size = function() {
    // Return count minus lowest count
    return count - lowestCount;
  };

  return someInstance;
};
