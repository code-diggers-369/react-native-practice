import { View, Text, TextInput, Button, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import Clipboard, { useClipboard } from '@react-native-clipboard/clipboard';

export default function Home() {
  const [inputText, setInputText] = useState("")
  const [input2Text, setInput2Text] = useState("")

  const [data, setData] = useClipboard();



  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
      }}
    >

      <TextInput value={inputText} onChangeText={(text) => setInputText(text)} style={{ borderWidth: 1, width: "90%", marginBottom: 20 }} placeholder="Enter Your Text" />

      <Button title='Copy To Clipboard' onPress={() => {

        // Clipboard.setString(inputText)
        setData(inputText)
        ToastAndroid.show('Copy Done', ToastAndroid.SHORT)
      }} />


      <TextInput value={input2Text} onChangeText={(text) => setInput2Text(text)} style={{ borderWidth: 1, width: "90%", marginVertical: 20 }} placeholder="Enter Your Text" />

      <Button title='Paste From Clipboard' onPress={async () => {
        const value = await Clipboard.getString()
        setInput2Text(value)

        ToastAndroid.show('Paste Done', ToastAndroid.SHORT)
      }} />

      <Text style={{
        marginVertical: 20, fontWeight: "bold", fontSize: 40
      }} selectable={true}>Haresh</Text>


      <TextInput value={data} style={{ borderWidth: 1, width: "90%", marginVertical: 20 }} placeholder="Cipboard" />

    </View>
  );
}