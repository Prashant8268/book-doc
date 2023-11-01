// App.js
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Schedula - Pati</Text>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4850/4850909.png' }} 
        style={{ width: 200, height: 200, marginBottom:15 }} 
        />

      <Text style={styles.description}>
      DocEase - Your Health, Your Way
      </Text>
      <Link href="/registration" asChild>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Enter Mobile Number</Text>
            </TouchableOpacity>
        </Link>

        <Link href = "/user/sign_in" asChild >
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Sign In / Sign Up</Text>
            </TouchableOpacity>
        </Link>

        <Link href = "/Home" asChild >
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
        </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom:10,
    backgroundColor: '#f0f0f0',
  },
  appName: {
    fontSize: 28,
    marginBottom:10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom:8
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
