import { createTheme } from "@vanilla-extract/css";
import { themeVars } from "./contract.css";

const defaultFontFamily = "Roboto Flex, system-ui, sans-serif"

export const darkTheme = createTheme(
  themeVars,
  {
    // colors: {

    // },
    typography: {
      // title: {
      //   large: `bold 22px/28 ${defaultFontFamily}`,
      //   medium: `500 16px/24 ${defaultFontFamily}`,
      //   small: `500 14px/20 ${defaultFontFamily}`,
      // },
    }
  }
);
