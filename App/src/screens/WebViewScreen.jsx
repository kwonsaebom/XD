import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRef, useEffect } from 'react';

const WebViewScreen = ({ userId }) => {
  const webviewRef = useRef(null);

  useEffect(() => {
    if (webviewRef.current && userId !== '') {
      const script = `
        (function() {
          window.postMessage('${userId}',"*");
        })();
      `;
      webviewRef.current.injectJavaScript(script);
    }
  }, [userId]);

  const handleMessage = async (event) => {
    try {
      const data = event.nativeEvent.data;

      // AsyncStorage에 저장
      await AsyncStorage.setItem('userId', data);

      Alert.alert('Success', 'User credentials saved successfully!');
    } catch (error) {
      console.error('Error parsing message data:', error);
      Alert.alert('Error', 'Failed to save user credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: 'http://10.0.2.2:3000' }}
        style={styles.webview}
        startInLoadingState={true}
        originWhitelist={['http://*', 'https://*', 'intent://*']}
        // renderLoading={() => <ActivityIndicator color="blue" size="large" />}
        onMessage={handleMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
