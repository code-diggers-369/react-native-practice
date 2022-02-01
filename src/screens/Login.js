import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This Is Login Screen</Text>

      <TouchableOpacity
        style={{backgroundColor: 'blue', padding: 20, marginVertical: 10}}
        onPress={() => navigation.navigate('DrawerNavigator')}>
        <Text style={{color: '#fff'}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{color: 'red'}}>New User Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
