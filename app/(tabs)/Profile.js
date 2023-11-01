import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';

const UserProfile = () => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png'}} style={styles.profileImage} />

      {isEditing ? (
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={user.name}
          onChangeText={(text) => setUser({ ...user, name: text })}
        />
      ) : (
        <Text style={styles.name}>{user.name}</Text>
      )}

      {isEditing ? (
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={user.email}
          onChangeText={(text) => setUser({ ...user, email: text })}
        />
      ) : (
        <Text style={styles.email}>{user.email}</Text>
      )}

      {isEditing ? (
        <Button title="Save Profile" onPress={handleSaveProfile} />
      ) : (
        <TouchableOpacity onPress={handleEditProfile}>
          <Text style={styles.editButton}>Edit Profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  editButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default UserProfile;
