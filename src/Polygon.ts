import { _Polygon } from "./interfaces/Polygon.interface";
import { Point } from "./Point";
import { Shape } from "./Shape";

export class Polygon extends Shape implements _Polygon {
    protected _points:    Point[];
    protected _area:      number;
    protected _perimeter: number;

    /**
     * Represents a polygon composed of any number of points
     * @param points array of points composing the polygon
     */
    constructor(points: Point[]) {
        super()
        this._points = points;
    }

    get points():    Point[] { return this._points; }

    /**
     * Sums the polygon's segments length to compute its perimeter
     * @returns perimeter of the polygon
     */
    computePerimeter(): number {
        let sum: number = 0;
        // Sums the polygon's segments lengths
        for (let i = 0; i < this._points.length; i++) {
            const j = i + 1 == this._points.length ? 0 : i + 1;
            const a: Point = this._points[i];
            const b: Point = this._points[j];
            const len: number = Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2);
            sum += Math.sqrt(len);
        }
        this._perimeter = sum;

        return this._perimeter;
    }

    /**
     * Computes the polygon area using Gauss' shoelace formula
     * @returns area of the polygon
     */
    computeArea(): number {
        let sum: number = 0;
        for (let i = 0; i < this._points.length; i++) {
            // Multiplies the x coordinate of each vertex by the y coordinate of the next vertex.
            // Multiplies the y coordinate of each vertex by the x coordinate of the next vertex.
            // Subtracts second result from first result.
            const j = i + 1 == this._points.length ? 0 : i + 1;
            const a: Point = this._points[i];
            const b: Point = this._points[j];
            sum += a.x * b.y - a.y * b.x;
        }
        this._area = Math.abs(sum) / 2;

        return this._area;
    }
}
