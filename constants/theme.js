import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")

export const COLORS = {
    background: "#031F2B",
    primary: "#5EDFFF",
    secondary: "#D6D2D2",
    tertiary: "#263238",
    white: "#FFFFFF",
}

export const SIZES = {
    // GLOBAL SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 8,
    padding2: 12,
    padding3: 16,

    // FONTS SIZES
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // APP DIMENSIONS
    width,
    height
}

export const FONTS = {
    largeTitle: { fontFamily: "bold", fontSize: SIZES.largeTitle, lineHeight: 55},
    h1: { fontFamily: "bold", fontSize: SIZES.h1, lineHeight: 36},
    h2: { fontFamily: "bold", fontSize: SIZES.h2, lineHeight: 30},
    h3: { fontFamily: "bold", fontSize: SIZES.h3, lineHeight: 22},
    h4: { fontFamily: "bold", fontSize: SIZES.h4, lineHeight: 20},
    body1: { fontFamily: "regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "regular", fontSize: SIZES.body4, lineHeight: 20}

}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme