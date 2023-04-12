export class Edge<T> {
    from: T;
    to: T;
    weight: number;

    constructor(from: T, to: T, weight: number) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

