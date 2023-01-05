import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import Qrcode from 'react-native-qrcode-svg';

export default function Home() {
  const [qrCodeText, setQrCodeText] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TextInput
          placeholder="Enter Your Data"
          style={{borderWidth: 1, borderColor: 'white', width: '80%'}}
          onChangeText={text => setQrCodeText(text)}
          value={qrCodeText}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Qrcode
          value={qrCodeText ? qrCodeText : 'https://www.google.com/'}
          size={300}
          logo={require('../../assets/img/logo.png')}
        />
      </View>
    </View>
  );
}
