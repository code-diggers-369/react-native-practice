import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import Video from 'react-native-video';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Slider from '@react-native-community/slider';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    currentTime: 0,
    endingTime: 1,
  });

  //
  const videoRef = useRef();

  const timeformat = timeInSecond => {
    const digit = n => (n < 10 ? `0${n}` : `${n}`);
    //
    const sec = digit(Math.floor(timeInSecond % 60));
    const min = digit(Math.floor((timeInSecond / 60) % 60));
    const hr = digit(Math.floor((timeInSecond / 3600) % 60));
    return `${hr}:${min}:${sec}`;
  };

  const handleSlide = value => {
    videoRef.current.seek(value * time.endingTime);
  };

  const handleForward = () => {
    videoRef.current.seek(time.currentTime + 10);
  };
  const handleBackward = () => {
    videoRef.current.seek(time.currentTime - 10);
  };

  return (
    <View style={{flex: 1}}>
      <Video
        ref={videoRef}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        }}
        style={styles.backgroundVideo}
        paused={!isPlaying}
        onLoad={data => {
          setTime({...time, endingTime: data.duration});
        }}
        onProgress={data => {
          setTime({...time, currentTime: data.currentTime});
        }}
      />

      <View style={styles.controllerContainer}>
        <View style={styles.controllerInnerContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}>
            <TouchableOpacity onPress={() => handleBackward()}>
              <FontAwesome5Icon name="backward" size={30} />
            </TouchableOpacity>
            {isPlaying ? (
              <TouchableOpacity onPress={() => setIsPlaying(false)}>
                <FontAwesome5Icon name="pause" size={30} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setIsPlaying(true)}>
                <FontAwesome5Icon name="play" size={30} />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => handleForward()}>
              <FontAwesome5Icon name="forward" size={30} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Text>{timeformat(time.currentTime)}</Text>

            <View style={{width: '65%'}}>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                value={time.currentTime / time.endingTime}
                onValueChange={v => handleSlide(v)}
              />
            </View>

            <Text>{timeformat(time.endingTime)}</Text>
          </View>
        </View>
      </View>
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
  controllerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  controllerInnerContainer: {
    height: 150,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
