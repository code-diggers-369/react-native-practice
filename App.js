import React from 'react';
import {useNetInfo} from '@react-native-community/netinfo';

//
import StackNavigator from './src/navigation/StackNavigator/StackNavigator';

//
import DisconnectPage from './src/components/DisconnectPage';

function App() {
  const net = useNetInfo();

  console.log(net);
  // return <>{net.isConnected ? <StackNavigator /> : <DisconnectPage />}</>;
  return (
    <>
      <StackNavigator />
      {!net.isConnected ? <DisconnectPage /> : null}
    </>
  );
}

export default App;
