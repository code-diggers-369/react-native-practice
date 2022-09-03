import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        }}
        style={styles.backgroundVideo}
      />
    </View>
  );
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
