import { _Point } from "./Point.interface";
import { _Shape } from "./Shape.interface";

/** Represents a circle with radius and center point */
export interface _Circle extends _Shape {
    center: _Point
    radius: number
}
