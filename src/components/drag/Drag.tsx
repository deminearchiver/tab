import { ParentComponent, createEffect, createSignal } from "solid-js";
import { Portal } from "solid-js/web";

type Offset = {
  x: number;
  y: number;
};

export const Drag: ParentComponent = (props) => {
  const [dragging, setDragging] = createSignal(false);
  const [mousePosition, setMousePosition] = createSignal<Offset>({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = createSignal<Offset>({ x: 0, y: 0 });
  const [rect, setRect] = createSignal<DOMRect>();

  let ref: HTMLDivElement | undefined;

  const onMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  createEffect(() => {
    if(dragging()) {
      setRect(ref?.getBoundingClientRect());
      window.addEventListener("mousemove", onMouseMove);
    } else {
      setRect(undefined);
      window.removeEventListener("mousemove", onMouseMove);
    }
  });

  const children = (
    <>
      Draggg
      {props.children}
    </>
  );

  return (
    <div
      ref={ref}
      style={rect() ? {
        "width": `${rect()!.width}px`,
        "height": `${rect()!.height}px`,
        "background-color": "red",
      } : undefined}
      onMouseDown={(event) => setDragging(true)}
      onMouseUp={(event) => setDragging(false)}
      onMouseMove={event => {
        if(dragging()) return;
        const offset = { x: event.offsetX, y: event.offsetY };
        setMouseOffset(offset);
        setMousePosition(offset);
      }}>
      {
        dragging()
          ? <Portal mount={document.querySelector(".app")!}>
            <div
              style={{
                position: "absolute",
                left: `${mousePosition().x - mouseOffset().x}px`,
                top: `${mousePosition().y - mouseOffset().y}px`,
              }}
            >
                {children}
              </div>
          </Portal>
          : children
      }
    </div>
  );
}