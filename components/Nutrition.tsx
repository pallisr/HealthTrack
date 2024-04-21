import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const NutritionPage = () => {
  const [foodData, setFoodData] = useState([]);
  const foodInputRef = useRef(null);
  const caloriesInputRef = useRef(null);

  console.log(foodData);

  const handleAddFood = () => {
    const food = foodInputRef.current.value;
    const calories = caloriesInputRef.current.value;
    console.log(foodInputRef.current, calories);
    setFoodData([...foodData, {food, calories}]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Page</Text>
      <TextInput
        ref={foodInputRef}
        style={styles.input}
        placeholder="Enter food please man"
        onChangeText={() => {
          console.log('you have typed this again');
        }}
      />
      <TextInput
        ref={caloriesInputRef}
        style={styles.input}
        placeholder="Enter calories"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddFood}>
        <Text style={styles.buttonText}>Add Food</Text>
      </TouchableOpacity>
      <FlatList
        data={foodData}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>{item.food}</Text>
            <Text>{item.calories} calories</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    width: '100%',
  },
});

export default NutritionPage;
