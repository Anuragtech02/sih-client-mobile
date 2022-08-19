export interface IThemeContext {
  theme: any;
  handleChangeTheme?: (theme: string) => void;
  isDarkMode: boolean;
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
}
