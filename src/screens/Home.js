import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import FilePicker, {types} from 'react-native-document-picker';

export default function Home() {
  const [fileData, setFileData] = useState([]);
  //
  const handleFilePicker = async () => {
    try {
      const response = await FilePicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
        type: [types.images],
      });

      setFileData(response);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {fileData.length > 0
        ? fileData.map((ls, index) => {
            return (
              <View key={index}>
                <Image
                  source={{uri: ls.uri}}
                  style={{height: 300, width: 300}}
                />
              </View>
            );
          })
        : null}

      <TouchableOpacity
        onPress={() => handleFilePicker()}
        style={{
          backgroundColor: 'blue',
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}>
        <Text style={{color: '#fff'}}>Open </Text>
      </TouchableOpacity>
    </View>
  );
}
