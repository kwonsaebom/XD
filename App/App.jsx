import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'http://localhost:3000/' }}
          style={styles.webview}
          startInLoadingState={false}
          originWhitelist={['http://*', 'https://*', 'intent://*']}

          // renderLoading={() => <ActivityIndicator color="blue" size="large" />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
