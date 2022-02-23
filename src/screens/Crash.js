import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

async function onSignIn(user) {
  crashlytics().log('User signed in.');
  await Promise.all([
    crashlytics().setUserId(user.uid),
    crashlytics().setAttribute('credits', String(user.credits)),
    crashlytics().setAttributes({
      role: 'admin',
      followers: '13',
      email: user.email,
      username: user.username,
    }),
  ]);
}

export default function Crash() {
  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  return (
    <View>
      <Button
        title="Sign In"
        onPress={() =>
          onSignIn({
            uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
            username: 'Joaquin Phoenix',
            email: 'phoenix@example.com',
            credits: 42,
          })
        }
      />
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
      <Button
        title="Press me"
        // Logs in the firebase analytics console as "select_content" event
        // only accepts the two object properties which accept strings.
        onPress={async () =>
          // await analytics().logSelectContent({
          //   content_type: 'clothing',
          //   item_id: 'abcd',
          // }),
         // console.log(await analytics().getAppInstanceId(),"ggg")
         await analytics().logEvent('basket', {
          id: 3745092,
          item: 'mens grey t-shirt',
          description: ['round neck', 'long sleeved'],
          size: 'L',
        })
        }
      />
    </View>
  );
}