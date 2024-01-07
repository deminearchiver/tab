import { ParentComponent, createContext, useContext } from "solid-js";

interface HoverContextData {

}

const HoverContext = createContext<HoverContextData>();

const useHoverContext = () => useContext(HoverContext);

const HoverProvider: ParentComponent = (props) => {
  return (
    <HoverContext.Provider value={{}}>
      {props.children}
    </HoverContext.Provider>
  );
}