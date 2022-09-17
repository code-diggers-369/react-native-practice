import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigate = useNavigation();
  return (
    <View style={{flex: 1}}>
      {/* <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        }}
        style={styles.backgroundVideo}
      /> */}
      <VideoPlayer
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        }}
        navigator={navigate}
        controlTimeout={2000}
        onPlay={() => {
          console.log('video is playing');
        }}
        onPause={() => {
          console.log('video is pause');
        }}
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
