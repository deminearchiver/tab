import { makePersisted } from "@solid-primitives/storage";
import { Component } from "solid-js";
import { createStore } from "solid-js/store";
import { Settings, ThemeMode } from "./settings";
import App from "./App";

const [settings, setSettings] = makePersisted(
  createStore({
    
  }),
  {
    name: "settings"
  }
);

export const Root: Component = () => {
  return (
    <>
        <Settings initial={{
          mode: ThemeMode.Dark,
        }}>
          <App />
        </Settings>
    </>
  )
}
