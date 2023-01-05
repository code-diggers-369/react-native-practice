import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-around',
      }}>
      <Button
        onPress={() => {
          navigation.navigate('ScannerScreen');
        }}
        title="Scan Qrcode"
      />
      <Button
        onPress={() => {
          navigation.navigate('GeneratorScreen');
        }}
        title="Genrate Qrcode"
      />
    </View>
  );
}
