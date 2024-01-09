import { useMousePosition } from "@solid-primitives/mouse";
import { ParentComponent, createSignal, createEffect } from "solid-js";

import styles from "./styles.module.css";
import { useWindowScrollPosition } from "@solid-primitives/scroll";

export const Card: ParentComponent = (props) => {
  const [rotateX, setRotateX] = createSignal(0);
  const [rotateY, setRotateY] = createSignal(0);

  let [cardRef, setCardRef] = createSignal<HTMLElement>();

  const mouse = useMousePosition();

  createEffect(() => {
    if(mouse.isInside) {
      const rect = cardRef()!.getBoundingClientRect();

      const x = rect.left;
      const y = rect.top;

      const centerX = x + window.innerWidth / 2;
      const centerY = y + window.innerHeight / 2;

      const offsetX = (mouse.x - centerX) / centerX;
      const offsetY = (mouse.y - centerY) / centerY;

      setRotateX(offsetY * -25);
      setRotateY(offsetX * 25);
    } else {
      setRotateX(0);
      setRotateY(0);
    }
  });

  return (
    <div
      ref={setCardRef}
      class={styles["card"]}
      style={{
        "--rotateX": `${rotateX()}deg`,
        "--rotateY": `${rotateY()}deg`,
      }}
      >
      {props.children}
    </div>
  );
}
