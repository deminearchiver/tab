import { createElementBounds } from "@solid-primitives/bounds";
import { useMousePosition, createMousePosition } from "@solid-primitives/mouse";
import { FalsyValue, MaybeAccessor, access, asAccessor, isServer, noop, withAccess } from "@solid-primitives/utils";
import { Accessor, createEffect, createSignal } from "solid-js";

const normalize = (
  value: number,
  min: number,
  max: number
) => (value - min) / (max - min);
const getDistance = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => {
  const a = x2 - x1;
  const b = y2 - y1;
  return Math.sqrt(a * a + b*b);
};
const clamp = (
  value: number,
  min: number,
  max: number
) => Math.min(Math.max(value, min), max);

export const useProximity = (
  target: MaybeAccessor<HTMLElement>,
  min: number,
  max: number,
): Accessor<number> => {
  const resolved = access(target);

  const [proximity, setProximity] = createSignal<number>(0);
  const bounds = createElementBounds(target);

  const mouse = useMousePosition();

  createEffect(() => {
      console.log(bounds.top);
      const distance = getDistance(
        bounds.left! + bounds.width! / 2,
        bounds.top! + bounds.height! / 2,
        mouse.x,
        mouse.y,
      );
      setProximity(
        clamp(normalize(distance, min, max), 0, 1)
      );
  });
  
  return proximity;
}
