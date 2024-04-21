import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

export default function MentalHealthCheckIn() {
  const [mood, setMood] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [activities, setActivities] = useState([]);

  const logCheckIn = () => {
    const checkIn = {mood, thoughts, activities};
    console.log('Check-in logged:', checkIn);
    // You can add further logic here, like sending this data to a server, saving it locally, etc.
    // For simplicity, I'm just logging it to the console.
  };

  const addActivity = () => {
    const newActivity = 'Walking';
    setActivities([...activities, newActivity]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Mental Health Check-in</Text>
      <Text style={styles.label}>Mood:</Text>
      <TextInput
        style={styles.input}
        value={mood}
        onChangeText={text => setMood(text)}
        placeholder="Enter your mood"
      />
      <Text style={styles.label}>Thoughts:</Text>
      <TextInput
        style={styles.input}
        value={thoughts}
        onChangeText={text => setThoughts(text)}
        placeholder="Enter your thoughts"
        multiline
      />
      <Text style={styles.label}>Activities:</Text>
      {activities.map((activity, index) => (
        <Text key={index} style={styles.activity}>
          {activity}
        </Text>
      ))}
      <Button title="Add Activity" onPress={addActivity} />
      <Button title="Log Check-in" onPress={logCheckIn} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  activity: {
    fontSize: 16,
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
});
