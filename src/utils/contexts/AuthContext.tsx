import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { IArticle, IArticleCard, IAuthContext } from "./interfaces";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_ARTICLE = axios.create({
  baseURL: `https://sih-server-staging.onrender.com/article`,
});

const API_AUTH = axios.create({
  baseURL: "https://sih-server-staging.onrender.com/auth",
});

const API_USER = axios.create({
  baseURL: "https://sih-server-staging.onrender.com/user",
});

const AuthContext = createContext<IAuthContext>({
  currentUser: {},
  signInWithPhoneNumber: () => {},
  confirmCode: () => {},
  code: "",
  phone: "",
  userDetails: {},
  setCode: () => {},
  setCurrentUser: () => {},
  handleLogin: () => {},
  createNewUser: () => {},
  editUser: () => {},
  updateCurrentUser: () => {},
});

interface IAuthContextProvider {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<IAuthContextProvider> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<any>({});
  const [userDetails, setUserDetails] = useState<any>({});
  const [confirmOTP, setConfirmOTP] = useState<any>(null);
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    async function fetchUser() {
      // const tUser = await AsyncStorage.getItem("CURRENT_USER");
      // console.log(tUser);
      // if (tUser) {
      //   const us = JSON.parse(tUser);
      console.log("FETCH USER CALLED");
      const user = await API_USER.get("/single", {
        params: {
          id: currentUser?.id,
        },
      });
      setUserDetails(user.data);
      // console.log("user ka data:", user.data);
      // }
    }
    if (currentUser?.id) {
      fetchUser();
    }
  }, [currentUser]);
  useEffect(() => {
    async function updateUser() {
      console.log("UPDATE USER CALLED");
      const fcmToken = await AsyncStorage.getItem("fcmToken");
      if (fcmToken && currentUser?.id) {
        const res = await API_USER.patch(
          "https://sih-server-staging.onrender.com/user/update",
          {
            id: currentUser.id,
            fcmToken,
          }
        );
        console.log(res.data);
      }
    }

    updateUser();
  }, [currentUser]);

  async function editUser(change: any, value: any) {
    setUserDetails((userDetails: any) => {
      return {
        ...userDetails,
        [change]: value,
      };
    });
  }
  // useEffect(() => {
  //   setCurrentUser({
  //     _id: "123",
  //     name: "Testing User",
  //     contact: "124567890",
  //     gender: "female",
  //     pibs: ["234"],
  //     interests: ["test"],
  //     avatar: "url", // CDN Img URI
  //     userType: "user",
  //     savedArticles: [], // array of articleIds
  //     likedArticles: [], // array of articleIds
  //     rewards: [],
  //     rewardPoints: 234, // number of rewardPoints
  //     notifications: [
  //       {
  //         _id: "234234",
  //         status: "status", // read or unread or sent
  //       },
  //     ],
  //     createdAt: "234nkji jfjhhdfs",
  //     updatedAt: "3wefwfds",
  //   });
  // }, []);

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
      //handleLogin(phone);
      if (cb) cb();
      setConfirmOTP(null);
    } catch (error) {
      console.log(error, "Invalid code.");
    }
  }

  async function handleLogin(phone: string, cb: any) {
    try {
      const res = await API_AUTH.post("/login", {
        contact: phone,
      });
      console.log(res.status);
      // if (res.status === 404) {
      // }
      cb(res.data.token);
    } catch (error) {
      cb("404");
      // console.log(error?.message);
    }
  }

  async function createNewUser(user: any, cb: any) {
    try {
      const res = await API_USER.post("/create", user);
      console.log("Axios createUser success, token: ", res.data.token);
      cb(res.data.token);
    } catch (error) {
      console.log("Error in creating new user, axios: ", error);
    }
  }
  async function updateCurrentUser(value: object) {
    // try {
    //   const res = await API_USER.patch("/update", {
    //     ...value,
    //     id: currentUser._id,
    //   });
    //   console.log("RES:", res.data);
    // } catch (error) {
    //   console.log("Error in updating value:", error);
    // }
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
        createNewUser,
        phone,
        userDetails,
        editUser,
        updateCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
