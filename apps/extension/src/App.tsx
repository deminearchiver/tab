import { Component, ParentComponent, createEffect, createSignal, from } from "solid-js";
import styles from "./App.module.css";
import { QuickLinks } from "./components/quick-links";
import { createDateNow } from "@solid-primitives/date";
import { MaterialSymbol } from "./components/icon";
import { ThemeMode, useSettings } from "./settings";
import { Time } from "@tab/ui/components/time"

const links = [
  // "https://youtube.com",
  // "https://music.youtube.com",
  // "https://twitch.tv",
  // "https://github.com",
  // "https://discord.com",
  // "https://developer.chrome.com/docs/extensions",
  // "https://turbo.build/repo",
  // "https://solidjs.com",
  // "https://vitejs.dev",
  // "https://vanilla-extract.style",

  "https://youtube.com",
  "https://music.youtube.com",
  "https://twitch.tv",
  "https://github.com",
  "https://mail.google.com",
  "https://discord.com",
  "https://solidjs.com",
  "https://vitejs.dev",
  "https://vanilla-extract.style",
  "https://turbo.build/repo",
];

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


const App: Component = () => {
  return (
      <div class={styles["app"]}>
        <img
          class={styles["background"]}
          src="/images/wallpapers/glow/img22.jpg" />
        {/* <article>
          <span
            class={styles["time"]}>
            {formatTime(now(), { seconds: true })}
          </span>
        </article> */}
        <section>
          <Time />
        </section>
        <article>
          <QuickLinks links={links} />
        </article>
      </div>
  )
}

export default App;
