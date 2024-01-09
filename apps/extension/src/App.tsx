import { Component } from "solid-js";
import styles from "./App.module.css";
import { QuickLinks } from "./components/quick-links";





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


const App: Component = () => {
  return (
    <main class={styles["app"]}>
      <img
        class={styles["background"]}
        src="/images/wallpapers/glow/img22.jpg" />
      <article>
        00 : 00 : 00
      </article>
      <article>
        <QuickLinks links={links} />
      </article>
    </main>
  )
}

export default App;
