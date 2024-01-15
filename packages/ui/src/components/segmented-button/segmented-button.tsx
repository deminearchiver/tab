import { createContextProvider } from "@solid-primitives/context";
import { createToken, createTokenizer, resolveTokens } from "@solid-primitives/jsx-tokenizer";
import { Refs, resolveElements } from "@solid-primitives/refs";
import { For, ParentComponent, ParentProps, Setter, children, createEffect, createSignal, sharedConfig } from "solid-js";

const Tokenizer = createTokenizer();
const SegmentToken = createToken(Tokenizer, (props) => {

});

export const SegmentedButton: ParentComponent = (props) => {
  const segments = resolveTokens(Tokenizer, () => props.children);

  return (
    <div>
      {segments()}
    </div>  
  );
}

export const ButtonSegment: ParentComponent = () => {
  return (
    <button>

    </button>
  );
}
