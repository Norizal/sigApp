import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function ListName({itemListName, pressName}) {
  // console.log('Name ', itemListName);
  return (
    <TouchableOpacity onPress={() => pressName(itemListName.key)}>
      <Text style={styles.item}>Hello World {itemListName.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
  },
});
