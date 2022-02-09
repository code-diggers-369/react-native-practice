import {View, Text} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 50,
          fontFamily: 'SupermercadoOne-Regular',
        }}>
        Home
      </Text>
    </View>
  );
}
