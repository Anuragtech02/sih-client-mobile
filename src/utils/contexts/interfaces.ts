export interface IThemeContext {
  theme: any;
  handleChangeTheme?: (theme: string) => void;
  isDarkMode: boolean;
}

export interface ISvg{
  style?:any;
  [x:string]:any
}

export interface ITheme {
  colors: {
    primary: string;
    success: string;
    error: string;
    background: string;
    textLight:string;
    textMedium:string;
    separation:string;
  };
  fonts: {
    title: {
      fontFamily: string;
      fontSize: number;
      fontWeight?: string;
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
  default:any
}
