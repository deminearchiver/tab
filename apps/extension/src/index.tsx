/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";

import "./index.css";
import "./vars.css";

render(
  () => <App />,
  document.getElementById("root")!
);
