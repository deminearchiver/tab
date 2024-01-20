import { createThemeContract } from "@vanilla-extract/css";

const fontStyle = {
  family: null,
  size: null,
  weight: null,
  color: null,
  lineHeight: null,
};
const fontContract = {
  large: null,
  medium: null,
  small: null,
}

export const themeVars = createThemeContract({
  // colors: {
  //   // Primary
  //   primary: null,
  //   onPrimary: null,
  //   primaryContainer: null,
  //   onPrimaryContainer: null,

  //   // Secondary
  //   secondary: null,
  //   onSecondary: null,
  //   secondaryContainer: null,
  //   onSecondaryContainer: null,

  //   // Tertiary
  //   tertiary: null,
  //   onTertiary: null,
  //   tertiaryContainer: null,
  //   onTertiaryContainer: null,

  //   // Error
  //   error: null,
  //   onError: null,
  //   errorContainer: null,
  //   onErrorContainer: null,

  //   // Surface
  //   surfaceDim: null,
  //   surface: null,
  //   surfaceBright: null,

  //   // Surface container
  //   surfaceContainerLowest: null,
  //   surfaceContainerLow: null,
  //   surfaceContainer: null,
  //   surfaceContainerHigh: null,
  //   surfaceContainerHighest: null,

  //   onSurface: null,
  //   onSurfaceVariant: null,

  //   shadow: null,
  //   scrim: null,
  // },
  typography: {
    // display: fontContract,
    // headline: fontContract,
    // title: {
    //   large: null,
    //   medium: null
    // },
    // body: {
    //   large: null,
    //   medium: null,
    //   small: null,
    // }
    // body: fontContract,
    // label: fontContract,
  },
});
