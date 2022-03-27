import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, StackActions} from '@react-navigation/native';

export default function Home() {
  //
  const navigation = useNavigation();
  //
  const handleLogout = async () => {
    try {
      console.log('logout');
      await AsyncStorage.clear();

      navigation.dispatch(StackActions.replace('Login'));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>

      <TouchableOpacity
        style={{
          marginVertical: 10,
          padding: 8,
          backgroundColor: 'red',
          width: '80%',
          borderRadius: 20,
          alignItems: 'center',
        }}
        onPress={() => handleLogout()}>
        <Text style={{color: '#fff'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
