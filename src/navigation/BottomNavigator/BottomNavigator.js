import React from 'react';
import {View, Text} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

// import screens
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';

export default function HomeScreen() {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <IconContainer name="home" />,
          tabBarColor: 'red',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <IconContainer name="person" />,
          tabBarColor: 'purple',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: () => <IconContainer name="settings" />,
          tabBarColor: 'green',
        }}
      />
    </Tab.Navigator>
  );
}

const IconContainer = props => {
  return <IonicIcons name={props.name} size={20} color={'#fff'} />;
};
