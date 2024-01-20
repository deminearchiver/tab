import { createTheme } from "@vanilla-extract/css";

const family = "Roboto Flex, system-ui, sans-serif";

export const [textThemeClass, textTheme] = createTheme({
  display: {
    large: `700 57px/64px ${family}`,
    medium: `600 45px/52px ${family}`,
    small: `500 36px/44px ${family}`,
  },
  title: {
    large: `400 22px/28px ${family}`,
    medium: `500 16px/24px ${family}`,
    small: `500 14px/20px ${family}`
  },
  body: {
    large: `400 16px/24px ${family}`,
    medium: `400 14px/20px ${family}`,
    small: `400 12px/16px ${family}`,
  },
  label: {
    large: ``,
    medium: ``,
    small: ``,
  }
});
