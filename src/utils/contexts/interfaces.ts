export interface IThemeContext {
  theme: any;
  handleChangeTheme: (theme: string) => void;
}

export interface ITheme {
  colors: {
    primary: string;
    success: string;
    error: string;
    background: string;
  };
  fonts: {
    title: {
      fontFamily: string;
      fontSize: number;
      fontWeight: string;
    };
    subTitle: {
      fontFamily: string;
      fontSize: number;
      fontWeight: string;
    };
    body: {
      fontFamily: string;
      fontSize: number;
      fontWeight: string;
    };
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}
