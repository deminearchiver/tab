/* @refresh reload */
import { render } from "solid-js/web";
import { Root } from "./Root";

import "./index.css";
import "./vars.css";

render(
  () => <Root />,
  document.getElementById("mount")!
);
