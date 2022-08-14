type paletteType = {
  [key: string]: string;
};

const paletteLight: paletteType = {
  black: "#292D32",
  green: "#00B894",
  red: "#CD0E61",
  white: "#F0F2F3",
};

const paletteDark: paletteType = {
  black: "#292D32",
  green: "#00B894",
  red: "#CD0E61",
  white: "#FFFFFF",
};

const themeLight = {
  colors: {
    primary: paletteLight.black,
    success: paletteLight.green,
    error: paletteLight.red,
    background: paletteLight.white,
  },
  fonts: {
    title: {
      fontFamily: "Poppins-SemiBold",
      fontSize: 22,
      fontWeight: "700",
    },
    subTitle: {
      fontFamily: "Poppins-Medium",
      fontSize: 20,
    },
    body: {
      fontFamily: "Poppins-Regular",
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
};

const themeDark = {
  ...themeLight,
  colors: {
    primary: paletteDark.black,
    success: paletteDark.green,
    error: paletteDark.red,
    background: paletteDark.white,
  },
};

export { themeLight, themeDark };
