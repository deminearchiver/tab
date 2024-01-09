import { createContextProvider } from "@solid-primitives/context";
import { Refs, resolveElements } from "@solid-primitives/refs";
import { For, ParentComponent, ParentProps, Setter, children, createEffect, createSignal, sharedConfig } from "solid-js";

export const SegmentedButton: ParentComponent = (props) => {
  const resolved = children(() => props.children);

  const [refs, setRefs] = createSignal<HTMLElement[]>([]);

  const onClick = () => {
    
  }


  return (
    <div>
      <Refs ref={refs}>
        {resolved()}
      </Refs>
    </div>  
  );
}

export const ButtonSegment: ParentComponent = () => {
  return (
    <button>

    </button>
  );
}
