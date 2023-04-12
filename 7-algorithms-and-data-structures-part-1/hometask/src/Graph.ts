import { WeightedGraph } from "./interfaces";

export class Graph<T> implements WeightedGraph<T> {
    private adjacencyList = new Map<T, [T, number][]>();

    addVertex(key: T): void {
        if (!this.adjacencyList.has(key)){
            this.adjacencyList.set(key, []);
        }
    }

    addEdge(vertex1: T, vertex2: T, weight: number): void {
        if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex1)) {
            throw new Error("Invalid doesn't exist");
        }

        this.adjacencyList.get(vertex1)?.push([vertex2, weight]);
        this.adjacencyList.get(vertex2)?.push([vertex1, weight]);
    }

    getAdjacencyList(): any {
        return this.adjacencyList;
    }
}