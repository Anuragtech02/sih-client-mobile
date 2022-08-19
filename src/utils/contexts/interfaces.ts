export interface IThemeContext {
  theme: any;
  handleChangeTheme?: (theme: string) => void;
  isDarkMode: boolean;
}

export interface INotificationCard{
  item:{
    id:string;
    title:string;
    description:string;
    timestamp:string;
    icon?:any;
  }
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
     p1:string;
  p2:string;
  p3:string;
  p4:string;
  g1:string;
  g2:string;
  g3:string;
  g4:string;
  g5:string;  };
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
