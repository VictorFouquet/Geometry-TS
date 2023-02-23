import { _Point } from "./interfaces/Point.interface";

export class Point implements _Point {
    protected _x: number
    protected _y: number

    /**
     * Represents a point in 2d euclidean space
     * @param x horizontal component
     * @param y vertical component
     */
    constructor(x: number = 0, y: number = 0) {
        this._x = x;
        this._y = y;
    }

    get x(): number { return this._x; }
    get y(): number { return this._x; }
}