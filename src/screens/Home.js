import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 50, color: "white" }}>Hello World</Text>
    </View>
  );
}
