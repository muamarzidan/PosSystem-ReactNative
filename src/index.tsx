import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React from 'react';

import ButtonNormal from './components/button';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ECF8F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  welcomeText: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#068DA9',
    padding: 10,
    width: 150,
    borderRadius: 5,
  }
});

interface AppProps {
  navigation: NavigationProp<any>;
}

export default function App({ navigation }: AppProps) { 
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Selamat datang di Toko Anda</Text>
        <ButtonNormal
          onPress={() => navigation.navigate('loginPage')}
          title="Login"
          buttonStyle={styles.button}
        />
        <ButtonNormal
          onPress={() => navigation.navigate('loginPage')}
          title="Cari Barang"
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
}