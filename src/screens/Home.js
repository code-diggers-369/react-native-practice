import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';

export default function Home() {
  const [isRotate, setIsRotate] = useState(false);

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      const orientation = isPotrait();

      setIsRotate(orientation);
    });

    return () => {};
  }, []);

  const isPotrait = () => {
    const {height, width} = Dimensions.get('screen');

    return height > width ? false : true;
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1,
        flexDirection: isRotate ? 'row' : 'column',
      }}>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'yellow',
        }}>
        <Text>World</Text>
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <Text>World</Text>
      </View>
    </View>
  );
}
