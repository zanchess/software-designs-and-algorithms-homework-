export class Point {
    private a: number;
    private b: number;

    constructor();
    constructor(a: number, b: number);
    constructor(a?: number, b?: number) {
        this.a = a ?? 0;
        this.b = b ?? 0;
    }

    toString(): string {
        return `(${this.a}, ${this.b})`;
    }

    distance(): number;
    distance(other: Point): number;
    distance(a: number, b:number): number;
    distance(a?: number | Point, b?: number): number {
        let a1: number;
        let b1: number;

        if (typeof a === 'number' && typeof b === "number") {
            a1 = a;
            b1 = b;
        } else if (a instanceof Point) {
            a1 = a.a;
            b1 = a.b;
        } else {
            a1 = 0;
            b1 = 0;
        }

        const deltaA = this.a - a1;
        const deltaB = this.b - b1;

        return Math.sqrt(Math.pow(deltaA, 2) + Math.pow(deltaB, 2));
    }



}