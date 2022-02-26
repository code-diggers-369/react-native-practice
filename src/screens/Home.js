import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [inputBoxValue, setInputBoxValue] = useState('');

  const [storageDataList, setStorageDataList] = useState('');

  const addItemToList = async () => {
    try {
      await AsyncStorage.setItem('itemList', inputBoxValue);
      setInputBoxValue('');

      await getItemList();

      alert('Data Is Added');
    } catch (err) {
      console.log(err);
    }
  };

  const getItemList = async () => {
    try {
      const data = await AsyncStorage.getItem('itemList');
      setStorageDataList(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={inputBoxValue}
        placeholder="Enter Data"
        onChangeText={value => setInputBoxValue(value)}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addItemToList()}>
        <Text style={{color: '#fff'}}>Add</Text>
      </TouchableOpacity>

      <Text>Your Data is {storageDataList}</Text>
    </View>
  );
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 10,
    marginHorizontal: 8,
  },
  addButton: {
    width: width - 20,
    backgroundColor: 'blue',
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 10,
  },
});
