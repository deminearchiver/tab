import { Component, For, createEffect, createSignal } from "solid-js";
import styles from "./App.module.css";
import { useWindowScrollPosition } from "@solid-primitives/scroll";
import { Card } from "./components/card";
import { QuickLinks } from "./components/quick-links";
import MD1 from "./quick-links.mdx";

const links = [
  ["Features", "#features"],
  ["Download", "#download"],
];

const quickLinks = [
  "https://youtube.com",
  "https://music.youtube.com",
  "https://twitch.tv",
  "https://facebook.com",
  "https://twitter.com",
  "https://github.com",
  "https://solidjs.com",
  "https://vitejs.dev",
  "https://developer.mozilla.org/en-US",
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
                  href="https://github.com/deminearchiver/tab"
                  target="_blank">
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
      <article>
        <h1 id="features">Features</h1>
        <section 
          style={{
          "display": "grid",
          "grid-template-columns": "1fr 1fr",
          "width": "100%",
          "gap": "24px",
          "padding": "16px"
        }}>
          <div style={{
            "aspect-ratio": "16 / 9",
            "background-image": "linear-gradient(to bottom right, rgba(255, 100, 100, 0.5), rgba(0, 128, 255, 0.5))",
            "border-radius": "28px",
          }}>
          </div>
          <div>
            <MD1 />
          </div>
          <button class="test1" style={{
            "grid-column": "2",
          }}>Learn more</button>
        </section>
      </article>
      <h1 id="download">Download</h1>
    </main>
  )
}

export default App;
