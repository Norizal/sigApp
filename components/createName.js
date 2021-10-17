import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default function CreateName({createName}) {
  const [name, setName] = useState('');

  const addName = val => {
    setName(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Name"
        onChangeText={addName}
      />

      <Button onPress={() => createName(name)} title="Add Name" color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 10,
  },
});
