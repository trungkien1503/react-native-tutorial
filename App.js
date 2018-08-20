import React, { Component } from 'react';
import { AppRegistry, WebView, StyleSheet, View } from 'react-native';

export default class MyWebView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
            source = {{ uri:
               'https://vidia.com.vn/' }}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => MyWebView);
