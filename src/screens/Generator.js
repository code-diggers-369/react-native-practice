import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import Qrcode from 'react-native-qrcode-svg';
import RNFetchBlob from 'rn-fetch-blob';

export default function Home() {
  const [qrCodeText, setQrCodeText] = useState('');

  const [qrCodeRef, setQrCodeRef] = useState(null);

  const downloadQrcode = () => {
    try {
      // alert('hello');
      qrCodeRef.toDataURL(async data => {
        // console.log(data);
        const path =
          RNFetchBlob.fs.dirs.DownloadDir +
          `/${qrCodeText
            .replace('http', '')
            .replace('://', 'a')
            .replace('.', '_')
            .slice(0, 20)}.png`;

        await RNFetchBlob.fs.writeFile(path, data, 'base64');

        alert('Download Successfully');
      });
    } catch (err) {
      console.log(err);
    }
  };

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
          getRef={ref => setQrCodeRef(ref)}
        />
      </View>

      <Button title="Download Qrcode" onPress={() => downloadQrcode()} />
    </View>
  );
}
