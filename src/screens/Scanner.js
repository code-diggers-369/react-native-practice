import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export default function Scanner() {
  const onSuccess = async e => {
    try {
      // alert('done');
      console.log(e);
      await Linking.openURL(e.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <QRCodeScanner
      onRead={e => onSuccess(e)}
      // flashMode={RNCamera.Constants.FlashMode.torch}
    />
  );
}
