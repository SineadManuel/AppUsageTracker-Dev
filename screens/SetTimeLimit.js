import * as React from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function SetTimeLimit ({ navigation }) {
  // Testing to see that firebase is set up correctly
  // https://rnfirebase.io/firestore/usage
  // firestore()
  // .collection('Test')
  // .doc('ABC')
  // .set({
  //   Name: 'Ada Lovelace',
  //   Age: 30,
  // })
  // .then(() => {
  //   console.log('User added!');
  // });

  return (
      <View>
            <Text>App Block List Name</Text>
            <TextInput
                style={styles.input}
                value={Text}
                placeholder="e.g. Distracting Apps"
            />
            <Text>Set Time Limit</Text>
            <Button
                title="Done"
                onPress={() => navigation.navigate('Home')}
            />
      </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});
  
export default SetTimeLimit