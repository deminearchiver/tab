export abstract class Curve {
  protected abstract transformInternal(t: number): number;

  public transform(t: number): number {
    if (t === 0 || t === 1) return t;
    return this.transformInternal(t);
  };

  protected toCssEasingLinear(samples: number, format: boolean = false): string {
    const result: number[] = [];
    for(let i = 0; i < samples; i++) {
      const x = i * (1 / samples);
      result.push(
        this.transform(
          i * (1 / samples)
        )
      );
    }
    if(format) 
      return `linear(${result.join(",\n  ")})`;
    else
      return `linear(${result.join(",")})`;
  }

  public toCssEasing(samples: number, format: boolean = false): string {
    return this.toCssEasingLinear(samples, format);
  }
}
