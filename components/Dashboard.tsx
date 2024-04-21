import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Dashboard = ({onChangePage}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onChangePage('Activity Tracking');
        }}>
        <Text style={styles.buttonText}>Activity Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onChangePage('Nutrition Log');
        }}>
        <Text style={styles.buttonText}>Nutrition Log</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onChangePage('Mental health check-ins');
        }}>
        <Text style={styles.buttonText}>Mental health check-ins</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onChangePage('Goal Setting');
        }}>
        <Text style={styles.buttonText}>Goal Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dashboard;
