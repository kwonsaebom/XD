import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebViewScreen from './src/screens/WebViewScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
// import FastImage from 'react-native-fast-image';

function App() {
  const [userId, setUserId] = useState('sss');

  useEffect(() => {
    SplashScreen.show();
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000); // 예제에서는 3초 후에 스플래쉬 화면을 숨깁니다.
    // const getData = async () => {
    //   try {
    //     const userId = await AsyncStorage.getItem('userId');
    //     if (userId) {
    //       setUserId(userId);
    //     }
    //   } catch (error) {
    //     console.error('Error getting data:', error);
    //   }
    // };
    // getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebViewScreen userId={userId} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
