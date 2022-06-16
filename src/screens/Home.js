import {View, Text} from 'react-native';
import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';

export default function Home() {
  const net = useNetInfo();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Type = {net.type}</Text>
      <Text>isConnected = {net.isConnected ? 'connect' : 'disconnect'}</Text>
    </View>
  );
}
