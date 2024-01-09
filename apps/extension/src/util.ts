export class Offset {
  public constructor(
    public readonly dx: number,
    public readonly dy: number
  ) {}
}

abstract class Curve {
  public transform(t: number): number {
    if (t === 0 || t === 1) return t;
    return this.transformInternal(t);
  };

  protected abstract transformInternal(t: number): number;
}

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
      if (estimate < t) {
        start = midpoint;
      } else {
        end = midpoint;
      }
    }
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

  public transformInternal(t: number) {
    const firstCurve = t < this.midpoint.dx;
    const scaleX = firstCurve ? this.midpoint.dx : (1.0 - this.midpoint.dx);
    const scaleY = firstCurve ? this.midpoint.dy : (1.0 - this.midpoint.dy);
    const scaledT = (t - (firstCurve ? 0.0 : this.midpoint.dx)) / scaleX;
    if (firstCurve) {
      return new Cubic(
        this.a1.dx / scaleX,
        this.a1.dy / scaleY,
        this.b1.dx / scaleX,
        this.b1.dy / scaleY,
      ).transform(scaledT) * scaleY;
    } else {
      return new Cubic(
        (this.a2.dx - this.midpoint.dx) / scaleX,
        (this.a2.dy - this.midpoint.dy) / scaleY,
        (this.b2.dx - this.midpoint.dx) / scaleX,
        (this.b2.dy - this.midpoint.dy) / scaleY,
      ).transform(scaledT) * scaleY + this.midpoint.dy;
    }
  }
}
export const emphasized = new ThreePointCubic(
  new Offset(0.05, 0), new Offset(0.133333, 0.06),
  new Offset(0.166666, 0.4),
  new Offset(0.208333, 0.82), new Offset(0.25, 1),
);

export const createLinear = (
  curve: Curve,
  samples: number,
) => {
  const result: number[] = [];
  for(let i = 0; i < samples; i++) {
    const x = i * (1 / samples);
    result.push(curve.transform(x));
  }
  return `linear(${result.join(",")})`;
};
