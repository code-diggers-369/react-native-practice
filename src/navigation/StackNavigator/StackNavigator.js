import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens import
import SplashScreen from '../../screens/SplashScreen';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*  */}
        {showSplashScreen ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : null}

        {/*  */}
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        /> */}
        {/*  */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        {/*  */}
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
