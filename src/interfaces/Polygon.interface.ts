import { _Point } from "./Point.interface";
import { _Shape } from "./Shape.interface";

/** Reprensents a polygon composed of any number of points */
export interface _Polygon extends _Shape {
    points: _Point[]
}
