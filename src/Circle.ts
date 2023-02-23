import { _Circle } from "./interfaces/Circle.interface";
import { Point } from "./Point";
import { Shape } from "./Shape";

export class Circle extends Shape implements _Circle {
    protected _center:    Point
    protected _radius:    number

    /**
     * Represents a circle with radius and center point
     * @param center center of the circle
     * @param radius radius of the circle
     */
    constructor(center: Point, radius: number) {
        super()
        this._center = center;
        this._radius = radius;
    }

    get center(): Point { return this._center; }
    get radius(): number { return this._radius; }

    /**
     * Computes the circle's perimeter
     * @returns perimeter
     */
    computePerimeter(): number {
        this._perimeter = 2 * Math.PI * this._radius;
        return this._perimeter;
    }

    /**
     * Computes the circle's area
     * @returns area
     */
    computeArea(): number {
        this._area = Math.PI * Math.pow(this._radius, 2);
        return this._area;
    }
}
