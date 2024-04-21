import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function Activity() {
  const [activities, setActivities] = useState([]);

  const addActivity = () => {
    const newActivity = {
      name: 'Cycling',
      duration: '45 minutes',
      distance: '10 kilometers',
      caloriesBurned: '350 calories',
    };
    setActivities([...activities, newActivity]);
    Alert.alert('Activity Added', 'Cycling activity has been added.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity Tracking</Text>
      <View style={styles.activityContainer}>
        {activities.map((activity, index) => (
          <View key={index} style={styles.activityItem}>
            <Text style={styles.activity}>Activity Name: {activity.name}</Text>
            <Text style={styles.activity}>Duration: {activity.duration}</Text>
            <Text style={styles.activity}>Distance: {activity.distance}</Text>
            <Text style={styles.activity}>Calories Burned: {activity.caloriesBurned}</Text>
          </View>
        ))}
        <Button title="Add Activity" onPress={addActivity} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  activityContainer: {
    flex: 1,
  },
  activityItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  activity: {
    fontSize: 16,
    marginBottom: 5,
  },
});
