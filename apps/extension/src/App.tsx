import { Component, ParentComponent, createEffect, createSignal } from "solid-js";
import styles from "./App.module.css";
import { QuickLinks } from "./components/quick-links";
import { useMousePosition } from "@solid-primitives/mouse";
import { createElementBounds } from "@solid-primitives/bounds";
import { makeTimer } from "@solid-primitives/timer";
import { createDateNow } from "@solid-primitives/date";
import { darkTheme, lightTheme, vars } from "./theme.css";
import { makePersisted } from "@solid-primitives/storage";
import { createStore } from "solid-js/store";



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

interface FormatTimeOptions {
  useMeridiem?: boolean;
  hours?: boolean;
  minutes?: boolean;
  seconds?: boolean;
}

const formatTime = (
  date: Date,
  options: FormatTimeOptions = {
    useMeridiem: false,
    hours: true,
    minutes: true,
    seconds: false,
  },
) => {
  const hours = date.getHours();
    const components: number[] = [];
  if(options.hours ?? true) components.push(options.useMeridiem ? hours % 12 || 12 : hours);
  if(options.minutes ?? true) components.push(date.getMinutes());
  if(options.seconds) components.push(date.getSeconds());
  const formatted = components
    .map(value => value.toString().padStart(2, "0"),)
    .join(" : ");
  return options.useMeridiem ? `${formatted} ${hours >= 12 ? "PM" : "AM"}` : formatted;
}

enum ThemeMode {
  Light,
  Dark,
}
type SettingsStore = {
  mode: ThemeMode,
}

const App: Component = () => {
  const [settings, setSettings] = makePersisted(
    createStore<SettingsStore>({
      mode: ThemeMode.Dark,
    }),
    {
      name: "settings"
    }
  )
  const [now] = createDateNow(1000);
  return (
      <main class={styles["app"]}>
        {/* <span onClick={() => setSettings("mode", ThemeMode.Light)}>{settings.mode}</span> */}
        <img
          class={styles["background"]}
          src="/images/wallpapers/glow/img22.jpg" />
        <article>
          <span
            class={styles["time"]}>
            {formatTime(now(), { seconds: true })}
          </span>
        </article>
        <article>
          <QuickLinks links={links} />
        </article>
      </main>
  )
}

export default App;
