import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>

      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Settings')}>
        <Text style={{color: 'red'}}>Goto Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
