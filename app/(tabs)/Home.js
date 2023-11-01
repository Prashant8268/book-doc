import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import doctorsData from '../../data/Doctors';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const DoctorGrid = () => { 
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
      <View style={styles.gridItem}>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/4807/4807695.png'}} style={styles.doctorImage} />
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.doctorType}>{item.doctorType}</Text>
      </View>
  );
  return (
    <FlatList
      data={doctorsData.doctors}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2} 
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    borderRadius: 5,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  doctorType: {
    fontSize: 14,
  },
});

export default DoctorGrid;
