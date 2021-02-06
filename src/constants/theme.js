import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#24A19C",
  secondary: "#F8F8F8",

  white: "#FFFFFF",
};

export const SIZES = {
  base: 12,
  font: 14,
  boderRadius: 13,

  largeTitle: 48,
  h1: 40,
  h2: 24,

  body1: 14,
  body2: 12,

  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Metropolis",
    fontSize: SIZES.largeTitle,
    lineHeight: 48,
  },
  h1: {
    fontFamily: "Metropolis",
    fontSize: SIZES.h1,
    lineHeight: 18,
  },
  h2: {
    fontFamily: "Metropolis",
    fontSize: SIZES.h2,
    lineHeight: 32,
  },

  body1: {
    fontFamily: "Metropolis",
    fontSize: SIZES.body1,
    lineHeight: 18,
  },
  body2: {
    fontFamily: "Metropolis",
    fontSize: SIZES.body2,
    lineHeight: 18,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
