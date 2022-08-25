import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging";
import PushNotification from "react-native-push-notification";

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
    getFCMToken();
  }
}

async function getFCMToken() {
  const fcmToken = await AsyncStorage.getItem("fcmToken");
  if (!fcmToken) {
    try {
      let newToken = await messaging().getToken();
      if (newToken) {
        await AsyncStorage.setItem("fcmToken", newToken);
        console.log(`New FCM Token: ${newToken}`);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
  if (fcmToken) {
    // console.log("FCM Token:", fcmToken);
  } else {
    console.log("Failed to get FCM token");
  }
}

export function notificationServices() {
  messaging().onNotificationOpenedApp((remoteMessage) => {
    console.log(
      "Notification caused app to open from background state:",
      remoteMessage.notification
    );
  });

  // Foreground Message
  messaging().onMessage(async (remoteMessage) => {
    console.log("Notification foreground", remoteMessage);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log(
          "Notification caused app to open from quit state:",
          remoteMessage.notification
        );
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      // setLoading(false);
    });
}
