import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebViewScreen from './src/screens/WebViewScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        if (value) {
          const data = JSON.parse(value);
          setUserId(data.userId);
          setPassword(data.password);
        }
      } catch (error) {
        console.error('Error getting data:', error);
      }
    };

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebViewScreen userId={userId} password={password} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
