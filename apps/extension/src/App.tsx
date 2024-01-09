import { Component, ParentComponent, createEffect, createSignal } from "solid-js";
import styles from "./App.module.css";
import { QuickLinks } from "./components/quick-links";
import { useMousePosition } from "@solid-primitives/mouse";
import { createElementBounds } from "@solid-primitives/bounds";
import { makeTimer } from "@solid-primitives/timer";





const links = [
  "https://youtube.com",
  "https://music.youtube.com",
  "https://twitch.tv",
  "https://github.com",
  "https://discord.com",
  "https://developer.chrome.com/docs/extensions",
  "https://turbo.build/repo",
  "https://solidjs.com",
  "https://vitejs.dev",
  "https://vanilla-extract.style",
];

const Card: ParentComponent = (props) => {
  const [rotateX, setRotateX] = createSignal(0);
  const [rotateY, setRotateY] = createSignal(0);

  let [cardRef, setCardRef] = createSignal<HTMLElement>();

  const mouse = useMousePosition();

  createEffect(() => {
    if(mouse.isInside) {
      const rect = cardRef()!.getBoundingClientRect();

      const x = rect.left;
      const y = rect.top;
      const width = rect.width;
      const height = rect.height;

      const centerX = x + width / 2;
      const centerY = y + height / 2;

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

const getTime = () => {
  const now = new Date();
  const components = [
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ];
  return components
    .map(value => value.toString().padStart(2, "0"),)
    .join(" : ");
}
const App: Component = () => {
  const [time, setTime] = createSignal(getTime());

  makeTimer(
    () => setTime(getTime()),
    1000,
    setInterval,
  );

  return (
    <main class={styles["app"]}>
      <img
        class={styles["background"]}
        src="/images/wallpapers/glow/img22.jpg" />
      <article>
        <span
          class={styles["time"]}>
          {time()}
        </span>
      </article>
      <article>
        <QuickLinks links={links} />
      </article>
      {/* <article>
        <Card>
          <QuickLinks links={links} />
        </Card>
      </article> */}
    </main>
  )
}

export default App;
