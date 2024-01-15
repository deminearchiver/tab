import { Offset } from "../common";
import { Curve } from "./curve";

class Cubic extends Curve {
  private static readonly cubicErrorBound = 0.001;

  private static evaluateCubic(a: number, b: number, m: number) {
    return 3 * a * (1 - m) * (1 - m) * m +
           3 * b * (1 - m) *           m * m +
                                       m * m * m;
  }

  public constructor(
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
    public readonly d: number,
  ) {
    super();
  }

  protected transformInternal(t: number) {
    let start = 0;
    let end = 1;
    while (true) {
      const midpoint = (start + end) / 2;
      const estimate = Cubic.evaluateCubic(this.a, this.c, midpoint);
      if (Math.abs(t - estimate) < Cubic.cubicErrorBound) {
        return Cubic.evaluateCubic(this.b, this.d, midpoint);
      }
      if (estimate < t) start = midpoint;
      else end = midpoint;
    }
  }

  public toCssEasing(samples: number, format?: boolean): string {
    return `cubic-bezier(${this.a}, ${this.b}, ${this.c}, ${this.d})`;
  }
}
export class ThreePointCubic extends Curve {
  public constructor(
    public readonly a1: Offset,
    public readonly b1: Offset,
    public readonly midpoint: Offset,
    public readonly a2: Offset,
    public readonly b2: Offset,
  ) {
    super();
  }

  protected transformInternal(t: number) {
    const firstCurve = t < this.midpoint.x;
    const scaleX = firstCurve ? this.midpoint.x : (1 - this.midpoint.x);
    const scaleY = firstCurve ? this.midpoint.y : (1 - this.midpoint.y);
    const scaledT = (t - (firstCurve ? 0 : this.midpoint.x)) / scaleX;
    if (firstCurve)
      return new Cubic(
        this.a1.x / scaleX,
        this.a1.y / scaleY,
        this.b1.x / scaleX,
        this.b1.y / scaleY,
      ).transform(scaledT) * scaleY;
    else
      return new Cubic(
        (this.a2.x - this.midpoint.x) / scaleX,
        (this.a2.y - this.midpoint.y) / scaleY,
        (this.b2.x - this.midpoint.x) / scaleX,
        (this.b2.y - this.midpoint.y) / scaleY,
      ).transform(scaledT) * scaleY + this.midpoint.y;
  }
}
