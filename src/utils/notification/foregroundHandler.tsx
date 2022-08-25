import messaging from "@react-native-firebase/messaging";
import { useEffect } from "react";

export function foregroundHandler() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // console.log(remoteMessage);
    });
  }, []);
}
