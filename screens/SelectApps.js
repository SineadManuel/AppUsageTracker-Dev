import * as React from 'react';
import { Text, Button, View } from 'react-native';

function SelectApps ({ navigation }) {
  return (
      <View>
          <Text>App List</Text>
          <Button
            title="Next"
            onPress={() => navigation.navigate('Set Time Limit')}
          />
      </View>
  )
}
  
export default SelectApps