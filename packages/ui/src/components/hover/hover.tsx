import { createContextProvider } from "@solid-primitives/context";
import { createEventListener, createEventSignal } from "@solid-primitives/event-listener";
import { ReactiveMap } from "@solid-primitives/map";
import { Refs } from "@solid-primitives/refs";
import { Accessor, ParentComponent, ParentProps, Ref, ResolvedJSXElement, Setter, children, createEffect, createRenderEffect, createSignal, onMount } from "solid-js";

interface HoverContext {
  selected: Accessor<HTMLElement | undefined>;
  setSelected: Setter<HTMLElement | undefined>;

}
type HoverProviderProps = {
  selected: Accessor<HTMLElement | undefined>;
  setSelected: Setter<HTMLElement | undefined>;
}
const [HoverProvider, useHoverContext] = createContextProvider<
  HoverContext,
  ParentProps<HoverProviderProps>
>(
  (props) => {
    // const [selected, setSelected] = createSignal<HTMLElement>();

    return {
      selected: props.selected,
      setSelected: props.setSelected,
    };
  },
);

type HoverProps = {
  ref?: Setter<HTMLElement | undefined>;
}

export const Hover: ParentComponent<HoverProps> = (props) => {
  const [selected, setSelected] = createSignal<HTMLElement>();

  createEffect(() => {
    props.ref?.(selected());
  });

  return (
    <HoverProvider
      selected={selected}
      setSelected={setSelected}>
      {props.children}
    </HoverProvider>
  );
}

export const HoverGroup: ParentComponent = (props) => {
  const { selected, setSelected } = useHoverContext()!;

  const [refs, setRefs] = createSignal<HTMLElement[]>([]);

  const listener = (event: MouseEvent) => {
    const currentTarget = event.currentTarget as HTMLElement;
    const relatedTarget = event.relatedTarget as HTMLElement ?? undefined;
    switch(event.type) {
      case "mouseover":
        setSelected(currentTarget);
        break;
      case "mouseout":
        if(!refs().some(ref => ref.contains(relatedTarget))) setSelected();
        break;
    }
  }

  createEventListener(
    refs,
    ["mouseover", "mouseout"],
    listener,
  );
  
  return (
    <Refs ref={setRefs}>
      {props.children}
    </Refs>
  );
}
