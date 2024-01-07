import { For, JSX, ParentComponent, ResolvedJSXElement, children } from "solid-js";

export const SegmentedButton: ParentComponent = (props) => {
  const resolved = children(() => props.children);

  return (
    <div>
      <For each={resolved.toArray()}>{
        (item, index) => <button>{item}</button>
      }</For>

    </div>
  );
}

const BUTTON_SEGMENT_ID = Symbol();

interface ButtonSegmentProps {
  children?: JSX.Element;
}
const isButtonSegment = (component: any): component is ButtonSegmentProps => {
  return component?.[BUTTON_SEGMENT_ID] === true;
}
export const ButtonSegment: ParentComponent = (props) => {
  return {

    [BUTTON_SEGMENT_ID]: true,
    props,
  } as unknown as JSX.Element;
}
