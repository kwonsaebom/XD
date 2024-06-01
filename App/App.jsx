import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebViewScreen from './src/screens/WebViewScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        if (value) {
          setUserId(userId);
        }
      } catch (error) {
        console.error('Error getting data:', error);
      }
    };

    getData();
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
