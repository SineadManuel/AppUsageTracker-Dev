import { React } from 'react';
import { Button, Text, View } from 'react-native';

function Home ({ navigation }) {
  // Switching screens
  // https://reactnavigation.org/docs/navigating/
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="App Limit"
        onPress={() => navigation.navigate('App Limit')}
      />
      <Button
        title="Test"
      />
    </View>
  )
}

export default Home