// Screen setup and navigation
// https://reactnavigation.org/docs/hello-react-navigation/
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import AppLimit from './screens/AppLimit';
import SelectApps from './screens/SelectApps';
import SetTimeLimit from './screens/SetTimeLimit';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="App Limit" component={AppLimit} />
        <Stack.Screen name="Select Apps" component={SelectApps} />
        <Stack.Screen name="Set Time Limit" component={SetTimeLimit} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App