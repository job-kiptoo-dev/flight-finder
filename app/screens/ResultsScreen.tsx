import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import axios from 'axios';
import styles from '../../utils/ResultScreen';
import Constants from 'expo-constants';
import { useLocalSearchParams } from 'expo-router';


export default function ResultsScreen() {
  const { origin, destination, date } = useLocalSearchParams(); // 👈 get values from navigation
  const { API_KEY, API_HOST } = Constants.expoConfig?.extra;
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights',
        params: {
          originSkyId: origin,
          destinationSkyId: destination,
          originEntityId: '27537542',       // hardcoded for now
          destinationEntityId: '27544008',  // hardcoded for now
          date: date,
          cabinClass: 'economy',
          adults: '1',
          sortBy: 'best',
          currency: 'USD',
          market: 'en-US',
          countryCode: 'US'
        },
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST,
        }
      };

      const response = await axios.request(options);
      console.log("📦 Full API response:", JSON.stringify(response.data, null, 2));

    } catch (error) {
      console.error('❌ Error fetching flights:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  // renderFlight stays the same...
  const renderFlight = ({ item }) => {
    const leg = item.legs[0];
    return (
      <View style={styles.card}>
        <Text style={styles.route}>
          {leg.origin.name} → {leg.destination.name}
        </Text>
        <Text style={styles.details}>Airline: {leg.carriers.marketing[0].name}</Text>
        <Text style={styles.details}>Departure: {leg.departure}</Text>
        <Text style={styles.details}>Arrival: {leg.arrival}</Text>
        <Text style={styles.details}>Duration: {leg.durationInMinutes} mins</Text>
        <Text style={styles.price}>Price: {item.price.formatted}</Text>
      </View>
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title

      }>Flights from {origin} to {destination}</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#2563EB" />
      ) : (
        <FlatList
          data={flights}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderFlight}
        />
      )}
    </SafeAreaView>
  );
}



