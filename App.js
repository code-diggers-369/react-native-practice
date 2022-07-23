import React, {useState} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';

//
import StackNavigator from './src/navigation/StackNavigator/StackNavigator';

//
import DisconnectPage from './src/components/DisconnectPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  //
  const net = useNetInfo();

  console.log(net);

  setTimeout(() => {
    setIsLoading(false);
  }, 100);

  // return <>{net.isConnected ? <StackNavigator /> : <DisconnectPage />}</>;
  return (
    <>
      <StackNavigator />
      {!net.isConnected && !isLoading ? <DisconnectPage /> : null}
    </>
  );
}

export default App;
