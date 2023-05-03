import { Vertex } from "./Vertex";
import { Edge } from "./Edge";
import { Graph } from "./Graph";

const vertices: Vertex<string>[] = [
    new Vertex<string>('1'),
    new Vertex<string>('2'),
    new Vertex<string>('3'),
    new Vertex<string>('4'),
    new Vertex<string>('5')
];

const [vertex1,vertex2, vertex3, vertex4] = vertices;

const edges: Edge<string>[] = [
    new Edge<string>(vertex1.key, vertex4.key, 3),
    new Edge<string>(vertex1.key, vertex2.key, 5),
    new Edge<string>(vertex1.key, vertex3.key, 4),
    new Edge<string>(vertex2.key, vertex4.key, 6),
    new Edge<string>(vertex2.key, vertex3.key, 5),
];

const graph = new Graph<string>();

vertices.forEach(verticle => graph.addVertex(verticle.key));
edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));

console.log(graph.getAdjacencyList());

