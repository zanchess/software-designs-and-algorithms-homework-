export class Point {
    x: number;
    y: number;

    constructor();
    constructor(a: number, b: number);
    constructor(a?: number, b?: number) {
        this.x = a ?? 0;
        this.y = b ?? 0;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distance(): number;
    distance(other: Point): number;
    distance(x: number, y:number): number;
    distance(arg1?: number | Point, arg2?: number): number {
        let x1: number;
        let y1: number;

        if (typeof arg1 === 'number' && typeof arg2 === "number") {
            x1 = arg1;
            y1 = arg2;
        } else if (arg1 instanceof Point) {
            x1 = arg1.x;
            y1 = arg1.y;
        } else {
            x1 = 0;
            y1 = 0;
        }

        const deltaA = this.x - x1;
        const deltaB = this.y - y1;

        return Math.sqrt(Math.pow(deltaA, 2) + Math.pow(deltaB, 2));
    }



}