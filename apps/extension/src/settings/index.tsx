import { createContextProvider } from "@solid-primitives/context";
import { ParentComponent, ParentProps, createContext, useContext } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";
import { darkTheme, lightTheme } from "../theme.css";
import { QuantizerCelebi } from "@material/material-color-utilities";
import { darkTheme as dark, textThemeClass } from "@tab/ui/theme";
export enum ThemeMode {
  Light,
  Dark,
}

type SettingsStore = {
  mode: ThemeMode,
}
type SettingsContextProps = {
  settings: SettingsStore;
  setSettings: SetStoreFunction<SettingsStore>;
}

type SettingsProps = {
  initial: SettingsStore;
}

const SettingsContext = createContext<SettingsContextProps>();

export const Settings: ParentComponent<SettingsProps> = (props) => {
  const [settings, setSettings] = createStore<SettingsStore>(props.initial);

  return (
    <SettingsContext.Provider value={{
      settings,
      setSettings,
    }}>
      <div
        class={textThemeClass}
        classList={{
          [lightTheme]: settings.mode === ThemeMode.Light,
          [darkTheme]: settings.mode === ThemeMode.Dark,
        }}>
        {props.children}
      </div>
    </SettingsContext.Provider>
  )
}

type SettingsResult = [settings: SettingsStore, setSettings: SetStoreFunction<SettingsStore>];
export const useSettings = (): SettingsResult | undefined => {
  const result = useContext(SettingsContext);
  if(result) {
    return [result.settings, result.setSettings];
  }
}
