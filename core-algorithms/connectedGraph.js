if (connectedGraph(points)) {
  const graphA = {
    'a': ['b', 'c'],
    'b': ['a', 'd'],
    'c': ['a', 'd'],
    'd': ['b', 'c'],
  }
} else {
  const graphB = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'd': ['c'],
  }
}

//isConnectedGraph(graphA)
// => true


//isConnectedGraph(graphB)
// => false
