import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SearchScreen() {
  const router = useRouter();
  const [origin, setOrigin] = useState('NYCA');
  const [destination, setDestination] = useState('LOND');
  const [date, setDate] = useState('2025-08-15');

  const handleSearch = () => {
    router.push({
      pathname: '/screens/ResultsScreen',
      params: {
        origin,
        destination,
        date,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>From (Sky ID)</Text>
      <TextInput style={styles.input} value={origin} onChangeText={setOrigin} />

      <Text style={styles.label}>To (Sky ID)</Text>
      <TextInput style={styles.input} value={destination} onChangeText={setDestination} />

      <Text style={styles.label}>Date (YYYY-MM-DD)</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} />

      <Button title="Search Flights" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginBottom: 4, fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
});

