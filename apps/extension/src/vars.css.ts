import { createVar, globalStyle } from "@vanilla-extract/css";

import { emphasized } from "@tab/ui/curves";

globalStyle(":root", {
  vars: {
    "--easing-emphasized": emphasized.toCssEasing(100),
    "--easing-emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
    "--easing-emphasized-accelerate": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
    "--easing-standard": "cubic-bezier(0.2, 0.0, 0, 1.0)",
    "--easing-standard-decelerate": "cubic-bezier(0, 0, 0, 1)",
    "--easing-standard-accelerate": "cubic-bezier(0.3, 0, 1, 1)",
  },
});
