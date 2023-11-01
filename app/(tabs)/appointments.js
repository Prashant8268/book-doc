import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Appointments = () => {
  // Dummy appointment data
  const appointmentData = [
    {
      id: '1',
      doctor: 'Dr. John Smith',
      date: '2023-11-15',
      time: '10:00 AM',
      location: '123 Main Street',
    },
    {
      id: '2',
      doctor: 'Dr. Sarah Johnson',
      date: '2023-11-17',
      time: '2:30 PM',
      location: '456 Elm Avenue',
    },
    {
      id: '3',
      doctor: 'Dr. David Lee',
      date: '2023-11-18',
      time: '11:15 AM',
      location: '789 Oak Lane',
    },
    // Add more dummy appointment data as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text style={styles.doctorName}>{item.doctor}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Time: {item.time}</Text>
      <Text>Location: {item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Appointments</Text>
      <FlatList
        data={appointmentData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  appointmentItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Appointments;
