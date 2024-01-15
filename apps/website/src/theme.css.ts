import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: "blue",
    secondary: "red",
    tertiary: "",
    surface: "" 
  },
  typography: {
    title: {
      large: {
        family: "Roboto Flex",
        weight: "400",
        size: "22px",
      },
      medium: {
        family: "Roboto Flex",
        weight: "500",
        size: "16px",
      },
      small: {
        family: "Roboto Flex",
        weight: "500",
        size: "14px",
      },
    },
    body: {
      large: {
        family: "Roboto Flex",
        weight: "400",
        size: "16px",
      },
      medium: {
        family: "Roboto Flex",
        weight: "400",
        size: "14px",
      },
    },
  }
});

