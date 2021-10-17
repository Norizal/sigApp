import React, {useState} from 'react';
import {Button, Image, StyleSheet, TextInput, View} from 'react-native';

export default function Login({navigation}) {
  const [user, setUser] = useState('');

  const userLogin = user => {
    setUser(user);
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Image style={styles.image} source={require('../assets/ukm.png')} />
          <TextInput
            style={styles.inputUsername}
            placeholder="Username"
            onChangeText={userLogin}
          />
          <TextInput style={styles.inputPassword} placeholder="Password" />
          <View style={styles.sectionLogin}>
            <Button title="Login" />
          </View>
          <View style={styles.sectionRegister}>
            <Button
              style={styles.buttonRegister}
              title="Don't have an account? Sign Up"
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  cardContent: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  image: {
    width: 250,
    height: 60,
    margin: 10,
  },
  inputUsername: {
    marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    borderRadius: 10,
  },
  inputPassword: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    borderRadius: 10,
  },

  sectionLogin: {
    marginTop: 30,
  },
  sectionRegister: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
});
