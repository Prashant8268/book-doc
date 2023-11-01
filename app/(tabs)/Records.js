import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MyRecords = () => {
  // Dummy record data
  const recordData = [
    {
      id: '1',
      title: 'Medical Report - 2023',
      date: '2023-11-10',
      description: 'Annual medical checkup report.',
    },
    {
      id: '2',
      title: 'Prescription - Pain Medication',
      date: '2023-11-15',
      description: 'Prescription for pain relief medication.',
    },
    {
      id: '3',
      title: 'Lab Test Results',
      date: '2023-11-20',
      description: 'Results of recent blood tests.',
    },
    // Add more dummy record data as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.recordItem}>
      <Text style={styles.recordTitle}>{item.title}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Description: {item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Records</Text>
      <FlatList
        data={recordData}
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
  recordItem: {
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
  recordTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default MyRecords;
