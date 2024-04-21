import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';

export default function Goal() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (goal.trim().length > 0) {
      setGoals([...goals, goal]);
      setGoal('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Goal Setting</Text>
      <TextInput
        style={styles.input}
        value={goal}
        onChangeText={text => setGoal(text)}
        placeholder="Enter your goal"
        onSubmitEditing={addGoal}
      />
      <Button title="Add Goal" onPress={addGoal} />
      <Text style={styles.label}>Your Goals:</Text>
      {goals.map((item, index) => (
        <Text key={index} style={styles.goal}>
          {item}
        </Text>
      ))}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  goal: {
    fontSize: 16,
    marginBottom: 5,
  },
});
