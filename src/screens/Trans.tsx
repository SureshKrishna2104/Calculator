import React from 'react';
import LottieView from 'lottie-react-native';
import {SafeAreaView,Button, StyleSheet, View, Text, StatusBar} from 'react-native';
// Localization.ts code can be found here: https://gist.github.com/naishe/a6d9ea9d23214875ac176b63387ab833
import '../initI18next';
import {useTranslation} from 'react-i18next';

declare const global: {HermesInternal: null | {}};

const Trans = () => {
  const {t,i18n} = useTranslation();
  console.log(i18n.language)
 

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.main}>
        <View>
        {/* <Text>{t('common:currentLanguage', { lng: i18n.language })}</Text> */}
        <LottieView source={require('../assets/96372-loader-5.json')} autoPlay loop />
          <Text>{t('hello')}</Text>
          <Button
          onPress={() => {
            i18n.changeLanguage('tn');
          }}
          title="Change to Tamil"
        />
        <Button
          onPress={() => {
            i18n.changeLanguage('en');
          }}
          title="Change to english"
        />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Trans;