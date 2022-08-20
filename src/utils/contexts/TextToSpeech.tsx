import React, { createContext, useState, useEffect, ReactNode } from "react";
import { ITextToSpeech, IVoiceType } from "./interfaces";
import Tts from "react-native-tts";

const TextToSpeech = createContext<ITextToSpeech>({
  voices: [],
  ttsStatus: "initiliazing",
  selectedVoice: null,
  speechRate: 0.5,
  speechPitch: 1,
  readText: (text: string) => {},
  updateSpeechRate: () => {},
  updateSpeechPitch: () => {},
  handleChangeSelectedVoice: () => {},
  stopTTS: () => {},
});

interface ITextToSpeechContextProvider {
  children: ReactNode;
}

export const TextToSpeechProvider: React.FC<ITextToSpeechContextProvider> = ({
  children,
}) => {
  const [voices, setVoices] = useState<Array<any>>([]);
  const [ttsStatus, setTtsStatus] = useState("initiliazing");
  const [selectedVoice, setSelectedVoice] = useState<any>(null);
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);

  async function initTts() {
    const tempVoices = await Tts.voices();
    const availableVoices = tempVoices
      .filter((v) => !v.networkConnectionRequired && !v.notInstalled)
      .map((v) => {
        return { id: v.id, name: v.name, language: v.language };
      });
    console.log(availableVoices);

    let selectedVoice = null;
    if (tempVoices && tempVoices.length > 0) {
      selectedVoice = tempVoices[0].id;
      try {
        await Tts.setDefaultLanguage(tempVoices[0].language);
      } catch (err) {
        //Samsung S9 always has this error:
        //"Language is not supported"
        console.log(`setDefaultLanguage error `, err);
      }
      await Tts.setDefaultVoice(tempVoices[0].id);
      setVoices(availableVoices);
      setSelectedVoice(selectedVoice);
      setTtsStatus("initialized");
    } else {
      setTtsStatus("initialized");
    }
  }

  useEffect(() => {
    Tts.addEventListener("tts-start", (e) => setTtsStatus("started"));
    Tts.addEventListener("tts-finish", (e) => setTtsStatus("finished"));
    Tts.addEventListener("tts-cancel", (e) => setTtsStatus("cancelled"));
    Tts.setDefaultRate(speechRate);
    Tts.setDefaultPitch(speechPitch);
    Tts.getInitStatus().then(initTts);

    return () => {
      Tts.removeEventListener("tts-start", (e) => setTtsStatus("started"));
      Tts.removeEventListener("tts-finish", (e) => setTtsStatus("finished"));
      Tts.removeEventListener("tts-cancel", (e) => setTtsStatus("cancelled"));
    };
  }, []);

  function readText(text: string) {
    Tts.stop();
    Tts.speak(text);
    console.log(voices, selectedVoice);
  }

  async function updateSpeechRate(rate: number) {
    await Tts.setDefaultRate(rate);
    setSpeechRate(rate);
  }

  async function updateSpeechPitch(rate: number) {
    await Tts.setDefaultPitch(rate);
    setSpeechPitch(rate);
  }

  function stopTTS() {
    Tts.stop();
  }

  async function handleChangeSelectedVoice(voice: IVoiceType) {
    try {
      await Tts.setDefaultLanguage(voice.language);
    } catch (err) {
      // Samsung S9 has always this error:
      // "Language is not supported"
      console.log(`setDefaultLanguage error `, err);
    }
    await Tts.setDefaultVoice(voice.id);
    setSelectedVoice(voice.id);
  }

  return (
    <TextToSpeech.Provider
      value={{
        voices,
        ttsStatus,
        selectedVoice,
        speechPitch,
        speechRate,
        readText,
        updateSpeechRate,
        updateSpeechPitch,
        handleChangeSelectedVoice,
        stopTTS,
      }}
    >
      {children}
    </TextToSpeech.Provider>
  );
};

export default TextToSpeech;
