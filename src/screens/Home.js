import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import ProgressBar from 'react-native-progress/Bar';
import Ionicos from 'react-native-vector-icons/Ionicons';

export default function Home() {
  const webViewRef = useRef();

  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  //
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [title, setTitle] = useState('');

  const handleGoBack = () => {
    webViewRef.current.goBack();
  };
  const handleGoForward = () => {
    webViewRef.current.goForward();
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text>{title}</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{marginRight: 10}}
            disabled={!canGoBack}
            onPress={() => handleGoBack()}>
            <Ionicos
              name="arrow-back"
              size={25}
              color={canGoBack ? '#000' : 'rgba(0,0,0,0.3)'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!canGoForward}
            onPress={() => handleGoForward()}>
            <Ionicos
              name="arrow-forward"
              size={25}
              color={canGoForward ? '#000' : 'rgba(0,0,0,0.3)'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {!isLoaded ? <ProgressBar progress={progress} width={null} /> : null}
      <WebView
        ref={webViewRef}
        source={{uri: 'https://www.google.in'}}
        onError={event => {
          console.log(event);
          alert(`Webview Error : ${event.nativeEvent.description}`);
        }}
        onLoadProgress={event => setProgress(event.nativeEvent.progress)}
        onLoadEnd={() => setIsLoaded(true)}
        onNavigationStateChange={state => {
          console.log(state);
          setCanGoBack(state.canGoBack);
          setCanGoForward(state.canGoForward);
          setTitle(state.title);
        }}
      />
    </View>
  );
}
