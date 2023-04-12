import { WeightedGraph } from "./interfaces";
import { Edge } from "./Edge";
import { Vertex } from "./Vertex";

export class Graph <T> implements WeightedGraph<T> {
    private adjacencyList = new Map();

    addVertex(key: string) {
        this.adjacencyList.set(key, []);
    }

    addEdge(vertex1: T, vertex2: T, weight: number): void {
    }
}