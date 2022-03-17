import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.inputBoxContainer}>
        <Ionicon name="mail" size={25} />
        <TextInput style={styles.inputBox} placeholder="Enter Your Email" />
      </View>
      {/*  */}
      <View style={styles.inputBoxContainer}>
        <FontAwesome name="lock" size={25} />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Your Password"
          secureTextEntry={isPasswordVisible ? false : true}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <FontAwesome
            name={isPasswordVisible ? 'eye-slash' : 'eye'}
            size={25}
          />
        </TouchableOpacity>
        {/* <FontAwesome name="eye-slash" size={25} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputBoxContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    width: '90%',
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  inputBox: {
    marginHorizontal: 10,
    flex: 1,
  },
});
