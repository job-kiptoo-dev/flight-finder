// app/screens/SearchScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SearchScreen({ navigation }: any) {
  return (
    <View>
      <Text>Flight Search</Text>
      <Button title="Search Flights" onPress={() => navigation.navigate('Results')} />
    </View>
  );
}

