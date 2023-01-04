import {View, Text, Button, Vibration} from 'react-native';
import React, {useState} from 'react';

export default function Home() {
  const [vibrationId, setVibrationId] = useState(null);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text>Home</Text>

      <Button
        title="click here for vibration"
        onPress={() => {
          const id = setInterval(() => {
            Vibration.vibrate(1000, true);
          }, 3000);
          setVibrationId(id);
        }}
      />

      <Button
        title="click here for stop vibration"
        onPress={() => {
          Vibration.cancel();
          clearInterval(vibrationId);
        }}
      />
    </View>
  );
}
