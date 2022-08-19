type paletteType = {
  [key: string]: string ;
};

const paletteLight: paletteType = {
  black: "#292D32",//p2
  green: "#00B894",
  red: "#CD0E61",
  white: "#F0F2F3",
  p1:"#000000",
  p2:"#292D32",
  p3:'#FFFFFF',
  p4:'#F41E1E',
  g1:'#989898',
  g2:'#565656',
  g3:'#565656',
  g4:'#E5E5E5',
  g5:'#646464'
};

const paletteDark: paletteType = {
  black: "#292D32",
  green: "#00B894",
  red: "#CD0E61",
  white: "#FFFFFF",
 p1:"#000000",
  p2:"#292D32",
  p3:'#FFFFFF',
  p4:'#F41E1E',
  g1:'#989898',
  g2:'#565656',
  g3:'#565656',
  g4:'#E5E5E5',
  g5:'#646464'
};

const themeLight = {
  colors: {
    primary: paletteLight.black,
    success: paletteLight.green,
    error: paletteLight.red,
    background: paletteLight.white,
    p1:paletteLight.p1,
    p2:paletteLight.p2,
    p3:paletteLight.p3,
    p4:paletteLight.p4,
    g1:paletteLight.g1,
    g2:paletteLight.g2,
    g3:paletteLight.g3,
    g4:paletteLight.g4,
    g5:paletteLight.g5
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
    p1:paletteDark.p1,
    p2:paletteDark.p2,
    p3:paletteDark.p3,
    p4:paletteDark.p4,
    g1:paletteDark.g1,
    g2:paletteDark.g2,
    g3:paletteDark.g3,
    g4:paletteDark.g4,
    g5:paletteDark.g5
  },
 default:{
    fontSize:16,
    color:paletteDark.white,
    background: paletteLight.black,
  }
};

export { themeLight, themeDark };
