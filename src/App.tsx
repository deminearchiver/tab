import { Component, For, Ref, Show, Suspense, createEffect, createResource, createSignal, onMount, useTransition } from "solid-js";

import styles from "./App.module.css";
import { makeTimer } from "@solid-primitives/timer";
import Clock from "./components/clock/Clock";
import { Portal } from "solid-js/web";
import { Drag } from "./components/drag/Drag";
import { getDeveloperExcuse } from "./api/quotes";
import MaterialSymbol from "./components/MaterialSymbol";
import { createPresence } from "@solid-primitives/presence";

const getFaviconUrl = (pageUrl: string): string => {
  try {
    const url = new URL(chrome.runtime.getURL("/_favicon/"));
    url.searchParams.set("pageUrl", pageUrl);
    url.searchParams.set("size", "32");
    return url.toString();
  } catch(error) {
    const url = new URL("https://icon.horse/icon/");
    url.searchParams.set("uri", pageUrl);
    // url.searchParams.set("size", "32");
    return url.toString();
  }
};

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
  const [open, setOpen] = createSignal(false);
  const [quote, { refetch }] = createResource(() => getDeveloperExcuse());

  const [target, setTarget] = createSignal<HTMLElement>();

  let hoverRef: HTMLDivElement | undefined;
  let linksRef: HTMLElement | undefined;

  const { isVisible, isMounted } = createPresence(
    open,
    {
      enterDuration: 600,
      exitDuration: 300,
    }
  );

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
      <Show when={isMounted()}>
        <Portal mount={document.getElementById("modal")!}>
          <div
            onClick={() => setOpen(false)}
            class={styles["barrier"]}
            style={{
              "background-color": isVisible() ? "rgba(0, 0, 0, 0.5)" : "transparent",
              "transition": `background-color ${isVisible() ? 600 : 300}ms cubic-bezier(0.1, 0, 0, 1)`,
            }}/>
          <aside
            class={styles["sidebar"]}
            style={{
              "width": isVisible() ? "360px" : "0",
              "translate": isVisible() ? "0px 0px" : "-180px 0px",
              "transition": ["width", "translate"].map(property => `${property} ${isVisible() ? 600 : 200}ms ${isVisible() ? "cubic-bezier(0.05, 0.7, 0.1, 1.0)" : "cubic-bezier(0.3, 0.0, 0.8, 0.15)"}`).join(","),
            }}>
              <button
                class={styles["settings-button"]}
                onClick={() => setOpen(false)}>
                <MaterialSymbol name="close" />
              </button>
              <ul>
                <li>
                  <button>Test</button>
                </li>
              </ul>
          </aside>
        </Portal>
      </Show>

      <button
        class={styles["settings-button"]}
        onClick={() => setOpen(prev => !prev)}>
        <MaterialSymbol name="settings" />
      </button>
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
                    // src={`https://icon.horse/icon/${item.hostname}`} />
                    src={`${getFaviconUrl(item.toString())}`} />
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