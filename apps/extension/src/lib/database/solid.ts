import { openDB } from "idb";
import { createSingletonRoot } from "@solid-primitives/rootless"
import { createMemo } from "solid-js";

const databases: Record<string, never> = {};


export const useDatabase = (name: string) => {
  console.log(`Using "${name}"`);
}

export const useExtensionDatabase = () => {
  return createSingletonRoot(() => {
    return useDatabase("tab");
  });
}
