

// Instantiate a new graph
var Graph = function() {
  this.node = [];
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.node.push(node);
  this.edge[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.some(this.node, nodes => {
    return nodes === node;
  })
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.node.pop(node);
  this.edge.pop(node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let from = _.some(this.edge[toNode], nodes => {
    return nodes === fromNode;
  });

  let to = _.some(this.edge[fromNode], nodes => {
    return nodes === toNode;
  });

  return from === true && to === true;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge[fromNode].push(toNode);
  this.edge[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexFrom = this.edge[fromNode] ? this.edge[fromNode].indexOf(toNode) : - 1;
  var indexTo = this.edge[toNode] ? this.edge[toNode].indexOf(fromNode) : -1;
  
  this.edge[toNode].splice(indexFrom,1);
  this.edge[fromNode].splice(indexTo,1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.node.forEach(nodes => {
    cb(nodes);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(log(n));
 */


