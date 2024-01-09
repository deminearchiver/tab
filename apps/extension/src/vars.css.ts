import { createVar, globalStyle } from "@vanilla-extract/css";
import { createLinear, emphasized } from "./util";


globalStyle(":root", {
  vars: {
    "--emphasized": createLinear(emphasized, 100),
    "--emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
    "--emphasized-accelerate": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
  },
});
