import {View, Text, Dimensions, Button} from 'react-native';
import React, {useState, useRef} from 'react';
import ReanimatedBottomsheet from 'react-native-reanimated-bottomsheet';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('screen');

//
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function Home() {
  const [itemList, setItemList] = useState([
    {
      title: 'Home',
      icon: () => <Ionicons name="home-outline" />,
    },
    {
      title: 'Profile',
      icon: () => <Ionicons name="person-outline" />,
    },
    {
      title: 'Settings',
      icon: () => <Ionicons name="settings-outline" />,
    },
    {
      title: 'Profile',
      icon: () => <Ionicons name="person-outline" />,
    },
    {
      title: 'Settings',
      icon: () => <Ionicons name="settings-outline" />,
    },
  ]);

  const bottomSheetRef = useRef(null);

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Feed"
        component={() => {
          return (
            <View style={{flex: 1}}>
              <ReanimatedBottomsheet
                ref={bottomSheetRef}
                snapPoints={[0, 200, 400, 450]}
                renderHeader={() => {
                  return (
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'grey',
                        paddingVertical: 10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      }}>
                      <View
                        style={{
                          height: 5,
                          width: 50,
                          backgroundColor: 'white',
                        }}></View>
                    </View>
                  );
                }}
                renderContent={() => {
                  return itemList.map((ls, index) => {
                    return (
                      <View style={{backgroundColor: 'white'}} key={index}>
                        <Text>{ls.title}</Text>
                      </View>
                    );
                  });
                }}
                enabledGestureInteraction={true}
              />
              <View>
                <Button
                  title="Open Bottom Sheet"
                  onPress={() => {
                    bottomSheetRef.current.snapTo(2);
                  }}
                />
                <View style={{marginVertical: 20}}></View>
                <Button
                  title="Close Bottom Sheet"
                  onPress={() => {
                    bottomSheetRef.current.close();
                  }}
                />
              </View>
            </View>
          );
        }}
      />
      <Drawer.Screen
        name="Article"
        component={() => {
          return (
            <View>
              <Text>Article</Text>
            </View>
          );
        }}
      />
    </Drawer.Navigator>
  );
}
