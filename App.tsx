import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

import Calculator from './src/screens/Calculator';
import Crash from './src/screens/Crash';
import Analytics from './src/screens/Analytics';
import {store} from './src/redux/Store';
import {Provider} from 'react-redux';
import hookForm from './src/screens/hookForm';
import Trans from './src/screens/Trans';
import Realm from './src/screens/Realm';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    firebase.messaging().onMessage(response => {
      console.log(JSON.stringify(response));
      if (Platform.OS !== 'ios') {
        showNotification(response.notification!);
        return;
      }
PushNotificationIOS.requestPermissions().then(() =>
        showNotification(response.notification!),
      );
    });
  }, []);
const showNotification = (
    notification: FirebaseMessagingTypes.Notification,
  ) => {
    PushNotification.localNotification({
      title: notification.title,
      message: notification.body!,
    });
  };
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Realm} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

// import React, {useEffect} from 'react';
// import {View} from 'react-native'
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/messaging';
// import PushNotification,{Importance} from 'react-native-push-notification';
// import {Platform} from 'react-native';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
// import messaging from '@react-native-firebase/messaging';
// import Crash from './src/screens/Crash';
// import LottieView from 'lottie-react-native';
// import Calculator from './src/screens/Calculator';
// const App = () => {
//   useEffect(() => {
//     //console.log(messaging().getToken(),"jj");
    
//     //onAppBootstrap();
//     PushNotification.createChannel(
//       {
//         channelId: "default-channel-id", // (required)
//         channelName: `Default channel`, // (required)
//         channelDescription: "A default channel", // (optional) default: undefined.
//         soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
//         importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
//         vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//       },
//       (created) => console.log(`createChannel 'default-channel-id' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
//     );
//      firebase.messaging().onMessage(response => {
//       console.log(JSON.stringify(response));

//       if (Platform.OS !== 'ios') {
//         showNotification(response.notification!);
//         return;
//       }
//       PushNotificationIOS.requestPermissions().then(() =>
//       //showNotification(response.notification!),
//         console.log(response)
        
//       );
//     });

//     // PushNotification.configure({
//     //   onRegister: function (token) {
//     //     console.log('TOKEN:', token);
//     //   },

//     //   onNotification: function (notification) {
//     //     console.log('NOTIFICATION:', notification);
//     //   },
//     //   permissions: {
//     //     alert: true,
//     //     badge: true,
//     //     sound: true,
//     //   },
//     //   popInitialNotification: true,
//     //   requestPermissions: true,
//     // });
//     PushNotification.getChannels(function(channels) {
//       console.log(channels,"hhhh");
//     });
//    // testPush()
//   }, []);
//   const  onAppBootstrap=async() =>{
//     // Register the device with FCM
//     await messaging().registerDeviceForRemoteMessages();
  
//     // Get the token
//     const token = await messaging().getToken();
//    console.log(token,"fff");
   
//     // Save the token
//    // await postToApi('/users/1234/tokens', { token });
//   }
//   const showNotification = (
//     notification: FirebaseMessagingTypes.Notification,
//   ) => {
//     PushNotification.localNotification({
//       title: notification.title,
//       message: notification.body!,
//       channelId:"default-channel-id"
//     });
//   };
//   //console.log()
//   // const testPush=()=>{
//   //     PushNotification.localNotification({
//   //     title: 'Scheduled Notification',
//   //     message: "My notification",
//   //     channelId:"default-channel-id"
//   //   });
//   //}
//   return <Calculator />;
// };
// export default App;
