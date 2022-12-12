import * as React from 'react';
import { Text, Button, View } from 'react-native';

function AppLimit ({ navigation }) {
  return (
      <View>
          <Text>App Limit list is empty. Press 'Add' to set time limits to apps.</Text>
          <Button
            title="Add"
            onPress={() => navigation.navigate('Select Apps')}
          />
      </View>
  )
}
  
export default AppLimit