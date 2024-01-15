import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  colors: {
    primary: null,
    secondary: null,
    tertiary: null,
    surface: null,
  },
  // typography: {
  //   body: {
  //     large: {
  //       family: "",
  //       size: "",
  //       weight: "",
  //     }
  //   }
  // }
});

export const lightTheme = createTheme(
  vars,
  {
    colors: {
      primary: "red",
      secondary: "blue",
      tertiary: "green",
      surface: "black",
    },
    // typography: {
    //   body: {
    //     large: {
    //       family: "",
    //       size: "",
    //       weight: "",
    //     }
    //   }
    // }
  }
);

export const darkTheme = createTheme(
  vars,
  {
    colors: {
      primary: "red",
      secondary: "blue",
      tertiary: "green",
      surface: "black",
    },
    // typography: {
    //   body: {
    //     large: {
    //       family: "",
    //       size: "",
    //       weight: "",
    //     }
    //   }
    // }
  }
)
