const Graph = require('node-dijkstra');

const getParentNames = (nodeName) => {
  const [line, choice] = nodeName.replace('L', '').split('C');
  const lineInt = parseInt(line, 10);
  const choiceInt = parseInt(choice, 10);
  if (lineInt === 1) {
    return ['START'];
  }
  const a = `L${lineInt - 1}C${choiceInt - 1}`;
  if (lineInt === choiceInt) {
    return [a];
  }
  const b = `L${lineInt - 1}C${choiceInt}`;
  if (choiceInt === 1) {
    return [b];
  }
  return [a, b];
};
const normalizeGraph = (graph) => {
  const nodes = {
    START: { weight: 0, children: {} },
    END: { weight: 0, children: {} },
  };
  const splitGraph = graph.split('\n');
  splitGraph.forEach((line, indexLine, arr) => {
    if (indexLine !== 0 && indexLine !== arr.length - 1) {
      line.split(' ').forEach((choice, indexChoice) => {
        const nodeName = `L${indexLine}C${indexChoice + 1}`;
        const choiceInt = parseInt(choice, 10);
        const children = indexLine === arr.length - 2 ? { END: 1 } : {};
        nodes[nodeName] = { weight: choiceInt, children };
        getParentNames(nodeName).forEach((parentName) => {
          nodes[parentName].children[nodeName] = 100 - choiceInt;
          return null;
        });
        return null;
      });
    }
  });
  return nodes;
};
const findPath = (nodes) => {
  const graph = new Graph();
  Object.entries(nodes).forEach(([key, value]) => {
    graph.addNode(key, value.children);
  });
  const path = graph.path('START', 'END');
  let weight = 0;
  path.forEach((nodeName) => {
    weight += nodes[nodeName].weight;
    return null;
  });
  return { path, weight };
};

module.exports = {
  findPath,
  normalizeGraph,
};
