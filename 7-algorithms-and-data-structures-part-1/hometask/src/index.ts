import { Vertex } from "./Vertex";
import { Edge } from "./Edge";

const vertices: Vertex<string>[] = [
    new Vertex('1'),
    new Vertex('2'),
    new Vertex('3'),
    new Vertex('4'),
    new Vertex('5')
];

const [vertex1,vertex2, vertex3, vertex4, vertex5] = vertices;

const edges: Edge<string>[] = [
    new Edge(vertex1, vertex4, 3),
    new Edge(vertex1, vertex2, 5),
    new Edge(vertex1, vertex3, 4),
    new Edge(vertex2, vertex4, 6),
    new Edge(vertex2, vertex3, 5),
];

