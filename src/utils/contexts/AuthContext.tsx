import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { IArticle, IArticleCard, IAuthContext } from "./interfaces";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

const API_ARTICLE = axios.create({
  baseURL: `https://sih-server-staging.onrender.com/article`,
});

const API_AUTH = axios.create({
  baseURL: "https://dsalgo.tech/auth",
});

const AuthContext = createContext<IAuthContext>({
  currentUser: {},
  signInWithPhoneNumber: () => {},
  confirmCode: () => {},
  code: "",
  setCode: () => {},
  setCurrentUser: () => {},
  handleLogin: () => {},
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
  const [phone, setPhone] = useState("");

  useEffect(() => {
    async function fetchArticles() {
      //   const res = await API_ARTICLE.get("/all");
      //   console.log({ res });
    }
    fetchArticles();
  }, []);

  useEffect(() => {
    setCurrentUser({
      _id: "123",
      name: "Testing User",
      contact: "124567890",
      gender: "female",
      pibs: ["234"],
      interests: ["test"],
      avatar: "url", // CDN Img URI
      userType: "user",
      savedArticles: [], // array of articleIds
      likedArticles: [], // array of articleIds
      rewards: [],
      rewardPoints: 234, // number of rewardPoints
      notifications: [
        {
          _id: "234234",
          status: "status", // read or unread or sent
        },
      ],
      createdAt: "234nkji jfjhhdfs",
      updatedAt: "3wefwfds",
    });
  }, []);

  async function signInWithPhoneNumber(phoneNumber: string) {
    setPhone(phoneNumber);
    const confirmation = await auth().signInWithPhoneNumber(
      `+91 ${phoneNumber}`
    );
    console.log("################", confirmation);
    setConfirmOTP(confirmation);
  }

  async function confirmCode(cd: string, cb: any) {
    try {
      // const res = await auth().verifyPhoneNumber
      // let userData = await auth().currentUser?.linkWithCredential(credential);
      await confirmOTP.confirm(cd);
      console.log(phone);
      handleLogin(phone);
      if (cb) cb();
      setConfirmOTP(null);
    } catch (error) {
      console.log(error, "Invalid code.");
    }
  }

  async function handleLogin(phone: string) {
    try {
      const res = await API_AUTH.post("/login", {
        phone,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error?.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        signInWithPhoneNumber,
        confirmCode,
        code,
        setCode,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
