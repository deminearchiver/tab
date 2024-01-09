import { Offset } from "../common";
import { ThreePointCubic } from "./cubic";

export const emphasized = new ThreePointCubic(
  new Offset(0.05, 0), new Offset(0.133333, 0.06),
  new Offset(0.166666, 0.4),
  new Offset(0.208333, 0.82), new Offset(0.25, 1),
);
