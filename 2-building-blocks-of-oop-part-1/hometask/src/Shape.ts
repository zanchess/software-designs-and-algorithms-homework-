import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) throw new Error('less than 3 points');
    this.points = points;
    this.color = color ?? 'green';
    this.filled = filled ?? true;
  }

  abstract getType(): string;

  toString(): string {
    const filledString = this.filled ? 'filled' : 'not filled';
    const pointsString = this.points.map(point => point.toString()).join(', ');
    return `A Shape with color of ${this.color} and ${filledString}. Points: ${pointsString}.`;
  }

  getPerimeter(): number {
    return this.points.reduce((perimeter, point, index) => {
      const nextPoint = this.points[(index + 1) % this.points.length];
      return perimeter + point.distance(nextPoint);
    }, 0);
  }
}
