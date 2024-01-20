import { Component, For, createEffect, createSignal } from "solid-js";
import styles from "./style.module.css";
import { Hover, HoverGroup } from "@tab/ui/components/hover";
import browser from "webextension-polyfill";



const getFaviconUrl = (pageUrl: string, size: number): string => {
  try {
    const url = new URL(browser.runtime.getURL("/_favicon/"));
    url.searchParams.set("pageUrl", pageUrl);
    url.searchParams.set("size", size.toString());
    return url.toString();
  } catch {
    const url = new URL("https://icon.horse/icon/");
    url.searchParams.set("uri", pageUrl);
    return url.toString();
  }
};


export type QuickLinksProps = {
  links: string[];
}
export const QuickLinks: Component<QuickLinksProps> = (props) => {
  const [selected, setSelected] = createSignal<HTMLElement>();
  
  const [visible, setVisible] = createSignal(false);
  let indicatorRef!: HTMLDivElement;

  createEffect<boolean>((animate) => {
    if(selected()) {
      const element = selected()!;
      indicatorRef.animate(
        [
          {
            "top": `${element.offsetTop}px`,
            "left": `${element.offsetLeft}px`,
            "width": `${element.offsetWidth}px`,
            "height": `${element.offsetHeight}px`,
          }
        ],
        {
          duration: animate ? 600 : 0,
          // easing: "cubic-bezier(0.1, `0, 0, 1)",
          easing: getComputedStyle(document.documentElement).getPropertyValue("--easing-emphasized"),
          fill: "forwards",
        }
      );
      if(!animate) setVisible(true);
      return true;
    } else {
      setVisible(false);
      return false;
    }
  }, false);

  return (
    <div class={styles["quick-links"]}>
      <div
        ref={indicatorRef} 
        class={styles["indicator"]}
        classList={{
          [styles["active"]]: visible(),
        }} />
      <Hover ref={setSelected}>
        <ul class={styles["list"]}>
          <HoverGroup>
            <For each={props.links}>
              {(url, index) => (
                <li class={styles["wrapper"]}>
                  <a
                    class={styles["link"]}
                    href={url}
                    title={new URL(url).hostname}>
                    <img
                      class={styles["icon"]}
                      src={getFaviconUrl(url, 32)} />
                  </a>
                </li>
              )}
            </For>
          </HoverGroup>
        </ul>
      </Hover>
    </div>
  )
}
