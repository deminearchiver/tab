import { createContextProvider } from "@solid-primitives/context";
import { createPresence } from "@solid-primitives/presence";
import { JSX, ParentComponent, ParentProps, Setter, Show, createContext, mergeProps } from "solid-js";
import { Portal } from "solid-js/web";




// const DrawerContext = createContext();
// const DrawerProvider: ParentComponent = (props) => {
//   return (
//     <DrawerContext.Provider value={}>
//       {props.children}
//     </DrawerContext.Provider>
//   )
// }

// interface DrawerProps {
//   open: boolean;
//   onVisibilityChanged?: Setter<boolean>;
// }
// export const Drawer: ParentComponent<DrawerProps> = (props) => {
//   props = mergeProps(
//     {
//       open: false
//     },
//     props,
//   );

//   const { isMounted, isVisible } = createPresence(
//     () => props.open,
//     {
//       transitionDuration: 600
//     }
//   );

//   return (
//     <Show when={isMounted()}>
//       <Portal>
//         <div
//           onClick={() => props.onVisibilityChanged?.(false)}
//           style={{
//             "position": "absolute",
//             "top": "0",
//             "left": "0",
//             "bottom": "0",
//             "right": "0",
//             "backdrop-filter": isVisible() ? "blur(4px)" : "",
//             "background-color": isVisible() ? "rgba(0, 0, 0, 0.5)" : "transparent",
//             "transition": "background-color 600ms cubic-bezier(0.2, 0.0, 0, 1.0), backdrop-filter 600ms cubic-bezier(0.2, 0.0, 0, 1.0)"
//           }} />
//         <div
//           style={{
//             "position": "absolute",
//             "top": "0",
//             "left": "0",
//             "bottom": "0",
//             "display": "grid",
//             "grid-template-rows": "28px 1fr 28px",
//             "grid-template-columns": "1fr 28px",
//             "translate": isVisible() ? "0 0" : "-180px 0",
//             "transition": "translate 600ms cubic-bezier(0.2, 0.0, 0, 1.0)",
//           }}>
//           <div
//             style={{
//               "grid-row": "1 / span 3",
//               "overflow": "hidden",
//               // "position": "absolute",
//               // "top": "0",
//               // "left": "0",
//               // "bottom": "0",
//               "height": "100%",
//               "width": isVisible() ? "360px" : "0",
//               "background-color": "red",
//               // "border-top-right-radius": "28px",
//               // "border-bottom-right-radius": "28px",
//               "transition": "width 600ms cubic-bezier(0.2, 0.0, 0, 1.0)",
//             }}>
//             {props.children}
//           </div>
//           <div style={{
//             // "background-color": "red",
//             "grid-column": "2",
//             "border-bottom-right-radius": "-28px",
//             "width": "28px",
//             "height": "28px",
//             "background": "radial-gradient(circle at 100% 100%, transparent 28px, red 28px)"
//             }} />
//           <div style={{
//             // "background-color": "red",
//             "grid-row": "3",
//             "grid-column": "2",
//             "border-bottom-right-radius": "-28px",
//             "width": "28px",
//             "height": "28px",
//             "background": "radial-gradient(circle at 100% 0%, transparent 28px, red 28px)"
//             }} />
//           </div>
//       </Portal>
//     </Show>
//   );
// }
