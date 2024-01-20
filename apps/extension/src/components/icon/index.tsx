import { MaterialSymbol as MaterialSymbolName } from "material-symbols";
import { Component, JSX, splitProps } from "solid-js";

type MaterialSymbolProps = {
  name: MaterialSymbolName;
  fill?: number;
  weight?: number;
  grade?: number;
  opticalSize?: number;
} & Omit<JSX.HTMLAttributes<HTMLSpanElement>, "children">;

export const MaterialSymbol: Component<MaterialSymbolProps> = (props) => {
  const [split, others] = splitProps(
    props,
    [
      "class",
      "name",
      "fill",
      "grade",
      "weight",
      "opticalSize",
    ]
  );
  
  return (
    <span
      class={
        [
          "material-symbols-rounded",
          split.class
        ].join(" ")
      }
      {...others}>
      {split.name}
    </span>
  );
}
