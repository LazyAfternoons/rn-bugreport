import React, { useEffect } from 'react';
import RNBootSplash from "react-native-bootsplash";
import { StatusBar, Text, View } from 'react-native';

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve.bind(null, null), ms));


const App = () => {
  useEffect(() => { 
    const init = async () => {
      await delay(500);
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor='white'/> 
      <Text>TESTTTESTTTESTT</Text>
    </View>
  );
};

export default App;
