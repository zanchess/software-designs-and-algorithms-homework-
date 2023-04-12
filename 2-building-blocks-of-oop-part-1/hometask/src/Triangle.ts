import { Shape } from "./Shape";
import { Point } from "./Point";

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point) {
        super([point1, point2, point3]);
    }

    toString(): string {
        const [point1, point2, point3] = this.points;
        return `Triangle[v1=${point1},v2=${point2},v3=${point3}]`;
    }

    getType(): string {
        const [a, b, c] = this.points.map((point, i, arr) => {
            return point.distance(arr[(i + 1)])
    });
        if (a.toFixed() === b.toFixed() && b.toFixed() === c.toFixed()) {
            return "equilateral triangle";
        } else if (a === b || a === c || b === c) {
            return "isosceles triangle";
        } else {
            return "scalene triangle";
        }
    }
}

