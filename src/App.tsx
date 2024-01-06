import { Component, For, Ref, Suspense, createEffect, createResource, createSignal, onMount } from "solid-js";

import styles from "./App.module.css";
import { makeTimer } from "@solid-primitives/timer";
import Clock from "./components/clock/Clock";
import { Portal } from "solid-js/web";
import { Drag } from "./components/drag/Drag";
import { getDeveloperExcuse } from "./api/quotes";


const test = [
  "https://youtube.com",
  "https://twitch.tv",
  "https://github.com",
  "https://beta.tauri.app",
  "https://obsproject.com",
  "https://modrinth.com",
  "https://stackoverflow.com",
  "https://hyunsdojo.com",
  "https://beta.gamepadviewer.com",
  "https://discord.com",
].map(url => new URL(url));

// TODO: C:\Windows\Web\Wallpaper\Glow

const App: Component = () => {
  const [quote, { refetch }] = createResource(() => getDeveloperExcuse());

  const [target, setTarget] = createSignal<HTMLElement>();

  let hoverRef: HTMLDivElement | undefined;
  let linksRef: HTMLElement | undefined;



  createEffect(() => {
    if(hoverRef && linksRef && target()) {
      const element = target()!;
      hoverRef.animate(
        [
          {
            "left": `${element.offsetLeft}px`,
            "top": `${element.offsetTop}px`,
            "width": `${element.offsetWidth}px`,
            "height": `${element.offsetHeight}px`,
          }
        ],
        {
          duration: 300,
          easing: "cubic-bezier(0.1, 0, 0, 1)",
          fill: "forwards",
        }
      );
    }
  });

  return (
    <main class={styles["app"]}>
      <img
        class={styles["background"]}
        src="/images/wallpapers/glow/img22.jpg" />
      <section>
        <Clock />
      </section>
      <Suspense>
        <section>
          <span
            class={styles["quote"]}>
              {quote()}
            </span>
        </section>
      </Suspense>
      <section
        ref={linksRef}
        class={styles["links"]}>
        <div
          ref={hoverRef}
          class={styles["hover"]} />
        <ul class={styles["links-list"]}>
          <For each={test}>
            {(item, index) => <li
                class={styles["link-wrapper"]}
                onMouseOver={event => setTarget(event.currentTarget)}>
                <a
                  class={styles["link"]}
                  href={item.toString()}
                  title={item.hostname}>
                  <img
                    class={styles["icon"]}
                    src={`https://icon.horse/icon/${item.hostname}`} />
                </a>
              </li>
            }
          </For>
        </ul>
      </section>
    </main>
  );
}

export default App;