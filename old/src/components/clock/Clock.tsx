import { makeTimer } from "@solid-primitives/timer";
import { Component, createSignal } from "solid-js";

import styles from "./Clock.module.css";

const getTime = () => {
  const now = new Date();
  const components = [
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ];
  return components
    .map((value) => value.toString().padStart(2, "0"),)
    .join(" : ");
}

const Clock: Component = () => {
  const [text, setText] = createSignal(getTime());

  makeTimer(
    () => setText(getTime()),
    1000,
    setInterval,
  );

  return (
    <span class={styles["clock"]}>
      {text()}
    </span>
  );
}

export default Clock;