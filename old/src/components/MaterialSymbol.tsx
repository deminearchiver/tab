import { Component } from "solid-js";

interface MaterialSymbolProps {
  name: string;
}

const MaterialSymbol: Component<MaterialSymbolProps> = (props) => {
  return (
    <span class="material-symbols-rounded">{props.name}</span>
  );
}

export default MaterialSymbol;