type paletteType = {
  [key: string]: string;
};

const paletteLight: paletteType = {
  black: "#292D32",
  green: "#00B894",
  red: "#CD0E61",
  white: "#F0F2F3",
  lightGrey:"#E5E5E5",
  mediumGrey:'#9E9E9E',
  darkGrey:"#646464",
};

const paletteDark: paletteType = {
  black: "#292D32",
  green: "#00B894",
  red: "#CD0E61",
  white: "#FFFFFF",
  lightGrey:"#E5E5E5",
  mediumGrey:'#9E9E9E',
  darkGrey:"#646464",
};

const themeLight = {
  colors: {
    primary: paletteLight.black,
    success: paletteLight.green,
    error: paletteLight.red,
    background: paletteLight.white,
    textLight:paletteLight.lightGrey,
    textMedium:paletteLight.darkGrey,
    separation:paletteDark.lightGrey,
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
   default:{
    fontSize:16,
    color:paletteLight.black,
    background: paletteLight.white,
  }
};

const themeDark = {
  ...themeLight,
  colors: {
    primary: paletteDark.white,
    success: paletteDark.green,
    error: paletteDark.red,
    background: paletteDark.white,
    textLight:paletteDark.mediumGrey,
    textMedium:paletteDark.darkGrey,
    separation:paletteDark.lightGrey,
  },
 default:{
    fontSize:16,
    color:paletteDark.white,
    background: paletteLight.black,
  }
};

export { themeLight, themeDark };
