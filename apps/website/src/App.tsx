import { Component, For, createEffect, createSignal } from "solid-js";
import styles from "./App.module.css";
import { useWindowScrollPosition } from "@solid-primitives/scroll";
import { Card } from "./components/card";
import { QuickLinks } from "./components/quick-links";

const links = [
  ["Features", "#features"],
  ["Download", "#download"],
];

const quickLinks = [
  "https://youtube.com",
  "https://twitch.tv",
  "https://facebook.com",
  "https://twitter.com",
  "https://github.com",
  "https://youtube.com",
  "https://youtube.com",
  "https://youtube.com",
  "https://youtube.com",
  "https://youtube.com",
];

const App: Component = () => {
  const [detached, setDetached] = createSignal(false);

  const scroll = useWindowScrollPosition();

  createEffect(() => {
    setDetached(scroll.y > 64);
  });

  return (
    <main class={styles["app"]}>
      <div
       class={styles["wrapper"]}
       classList={{
        [styles["detached"]]: detached(),
       }}>
        <header
          class={styles["header"]}>
          <nav
            class={styles["navigation"]}>
            <a
              class={styles["title"]}
              href="#">
              tab
            </a>
            <ul
              class={styles["locations"]}>
              <For each={links}>
                {(item, index) => (
                  <li>
                    <a
                      class={styles["location"]}
                      href={item[1]}>
                      {item[0]}
                    </a>
                  </li>
                )}
              </For>
            </ul>
            <ul
              class={styles["links"]}>
              <li>
                <a
                  class={styles["link"]}
                  href="https://github.com/deminearchiver/tab">
                  <img
                    src="images/github.svg"
                    width={32}
                    height={32} />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <img
        class={styles["background"]}
        src="images/img21.jpg" />
      <h1 id="features">Features</h1>
      <Card>
        <QuickLinks links={quickLinks} />
      </Card>
      <h1 id="download">Download</h1>
    </main>
  )
}

export default App;
