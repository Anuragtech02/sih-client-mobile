export const regionalThemes = {
  default: {
    color: "#292D32",
  },
  blue: {
    color: "#0077B6",
  },
  yellow: {
    color: "#F9DC5C",
  },
  pink: {
    color: "#F582A8",
  },
  green: {
    color: "#88CA5E",
  },
  lavender: {
    color: "#CDB4DB",
  },
  bhagwa: {
    color: "#FF7F51",
  },
  reddishBrown: {
    color: "#A44A3F",
  },
  orange: {
    color: "#E7625F",
  },
};


export const currentRegion = regionalThemes.default;

type paletteType = {
  [key: string]: string;
}

const paletteLight: paletteType = {
  black: "#292D32", //p2
  green: "#00B894",
  red: "#CD0E61",
  white: "#F0F2F3",
  absoluteWhite: "#FFFFFF",
  p1: "#000000",
  p2: "#292D32",
  p3: "#FFFFFF",
  p4: "#F41E1E",
  g1: "#989898",
  g2: "#565656",
  g3: "#565656",
  g4: "#E5E5E5",
  g5: "#646464",
  regionalColor:currentRegion?.color,
};
console.log(currentRegion)
const paletteDark: paletteType = {
  black: "#292D32",
  green: "#00B894",
  red: "#CD0E61",
  white: "#E5E5E5",
  p1: "#000000",
  p2: "#292D32",
  p3: "#FFFFFF",
  p4: "#F41E1E",
  g1: "#989898",
  g2: "#565656",
  g3: "#565656",
  g4: "#E5E5E5",
  g5: "#646464",
  regionalColor:currentRegion?.color,
};

const themeLight = {
  colors: {
    primary: paletteLight.black,
    regionalColor:paletteLight.regionalColor,
    success: paletteLight.green,
    error: paletteLight.red,
    background: paletteLight.white,
    p1: paletteLight.p1,
    p2: paletteLight.p2,
    p3: paletteLight.p3,
    p4: paletteLight.p4,
    g1: paletteLight.g1,
    g2: paletteLight.g2,
    g3: paletteLight.g3,
    g4: paletteLight.g4,
    g5: paletteLight.g5,
    white: "#F0F2F3",
    absoluteWhite: paletteLight.absoluteWhite,
    black: "#292D32",
  },
  fonts: {
    title: {
      fontFamily: "Poppins-SemiBold",
      fontSize: 22,
      fontWeight: "700",
    },
    subTitle: {
      fontFamily: "Poppins-Medium",
      fontSize: 18,
    },
    body: {
      fontFamily: "Inter-Regular",
      fontSize: 14,
      fontWeight: "400",
    },
  },
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 30,
    xl: 40,
  },
  default: {
    fontSize: 14,
    color: paletteLight.black,
    background: paletteLight.white,
  },
};

const themeDark = {
  ...themeLight,
  colors: {
    primary: paletteDark.white,
    success: paletteDark.green,
    error: paletteDark.red,
    regionalColor:paletteLight.regionalColor,
    background: paletteDark.black,
    p1: paletteDark.p1,
    p2: paletteDark.p2,
    p3: paletteDark.p3,
    p4: paletteDark.p4,
    g1: paletteDark.g1,
    g2: paletteDark.g2,
    g3: paletteDark.g3,
    g4: paletteDark.g4,
    g5: paletteDark.g5,
    white: "#F0F2F3",
    black: "#292D32",
  },
  default: {
    fontSize: 16,
    color: paletteDark.white,
    background: paletteLight.black,
  },
};

export { themeLight, themeDark };
