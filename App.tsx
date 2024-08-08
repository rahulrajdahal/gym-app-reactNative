import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomTabNavigation} from './src/navigations';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;
