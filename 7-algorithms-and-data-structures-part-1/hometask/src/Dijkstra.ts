import { Graph } from "./Graph";
import { Path, Dijkstra } from "./interfaces";

export class DijkstraImplementation<T> implements Dijkstra<T> {
    graph: Graph<T>;

    constructor(graph: Graph<T>) {
        this.graph = graph;
    }

    findAllShortestPaths(vertex: T): Record<string, Path> {
        const paths: Record<string, Path> = {};

        for (const otherVertex of this.graph.getAdjacencyList().keys()) {
            if (otherVertex !== vertex) {
                paths[otherVertex] = this.graph.getAdjacencyList().get(vertex);
            }
        }

        return paths;
    }

    findShortestPath(vertex1: T, vertex2: T): Path {
        return undefined;
    }
}
