import { Vertex } from "./Vertex";

export class Edge<T> {
    node1: Vertex<T>;
    node2: Vertex<T>;
    weight: number;

    constructor(node1: Vertex<T>, node2: Vertex<T>, weight: number) {
        this.node1 = node1;
        this.node2 = node2;
        this.weight = weight;
    }
}

