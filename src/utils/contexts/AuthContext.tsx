import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { IArticle, IArticleCard, IAuthContext } from "./interfaces";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

const API_ARTICLE = axios.create({
  baseURL: `https://sih-server-staging.onrender.com/article`,
});

const AuthContext = createContext<IAuthContext>({
  currentUser: {},
  signInWithPhoneNumber: () => {},
  confirmCode: () => {},
  code: "",
  setCode: () => {},
});

interface IAuthContextProvider {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<IAuthContextProvider> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<any>({});
  const [confirmOTP, setConfirmOTP] = useState<any>(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    async function fetchArticles() {
      //   const res = await API_ARTICLE.get("/all");
      //   console.log({ res });
    }
    fetchArticles();
  }, []);

  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await auth().signInWithPhoneNumber(
      `+91 ${phoneNumber}`
    );
    console.log("################", confirmation);
    setConfirmOTP(confirmation);
  }

  async function confirmCode(cd: string, cb: any) {
    try {
      await confirmOTP.confirm(code);
      if (cb) cb();
      setConfirmOTP(null);
    } catch (error) {
      console.log(console.log(error), "Invalid code.");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signInWithPhoneNumber,
        confirmCode,
        code,
        setCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;