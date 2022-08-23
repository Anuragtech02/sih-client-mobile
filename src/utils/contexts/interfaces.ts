import { AxiosResponse } from "axios";

export interface IThemeContext {
  theme: any;
  handleChangeTheme?: (theme: string) => void;
  isDarkMode: boolean;
}

export interface INotificationCard {
  item: {
    id: string;
    title: string;
    description: string;
    timestamp: string;
    icon?: any;
  };
}

export interface ISvg {
  style?: any;
  [x: string]: any;
}

export interface ITheme {
  colors: {
    primary: string;
    success: string;
    error: string;
    background: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    g1: string;
    g2: string;
    g3: string;
    g4: string;
    g5: string;
    white: string;
    black: string;
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
  default: any;
}

export interface IVoiceType {
  id: string;
  name: string;
  language: string;
}

export interface ITextToSpeech {
  voices: Array<IVoiceType>;
  ttsStatus:
    | "initializing"
    | "started"
    | "ready"
    | "finished"
    | "canceled"
    | string;
  selectedVoice: any;
  speechRate: number;
  speechPitch: number;
  readText: (text: string) => void;
  updateSpeechRate: (rate: number) => void;
  updateSpeechPitch: (rate: number) => void;
  handleChangeSelectedVoice: (voice: IVoiceType) => void;
  stopTTS: () => void;
}

export interface ILocaleContext {
  translations: any;
  setLocaleLanguage: (language: string) => void;
  appLanguage: string;
  initializeAppLanguage: () => void;
}

export interface IArticle {
  _id: string;
  title: string;
  slug: string; // slug is the url friendly version of the title
  content: {
    en: string; // english
    hi: string; // hindi
    gu: string; // gujarati
    kn: string; // kannada
    pa: string; // punjabi
    ta: string; // tamil
    te: string; // telugu
    mr: string; // marathi
    ml: string; // malayalam
  }; // HTMLString, comes from the editor
  thumbnail: string; // CDN URI
  views: number; // number of views
  likes: Array<string>; // array of UserIDS
  shares: number; // number of shares
  savedByCount: number; // number of users who saved this article
  categories: Array<any>;
  createdBy: {
    id: string;
    userType: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface IArticleCard {
  _id: string;
  title: string;
  thumbnail: string;
  views: number;
  slug: string;
  createdAt: string;
  createdBy: {
    id: string;
    userType: string;
  };
}

export interface IArticleContext {
  articles: Array<IArticleCard>;
  articleLoading: boolean;
  getArticle: (id: string) => any;
  updateViewsByOne: (id: string) => void;
  likeArticle: (id: string) => void;
  saveArticle: (id: string) => void;
}
