import React, {useState} from 'react';
import {View, Button, StyleSheet, SafeAreaView} from 'react-native';
import Counter from './src/components/counter/Counter';
import FlatListComponent from './src/components/flatListComponent/FlatListComponent';
import Todos from './src/components/todos/Todos';

const extractTodos = Array.from(Array(100000).keys())

const todos = [
  ...extractTodos,
  'todo 1',
  'todo 2',
  'todo 3',
  'todo 4',
  'todo 5',
  'todo 6',
  'todo 7',
  'todo 8',
  'todo 9',
  'todo 10',
  'todo 11',
  'todo 12',
  'todo 13',
  'todo 14',
  'todo 15',
  'todo 16',
  'todo 17',
  'todo 18',
  'todo 19',
  'todo 20',
];

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="decrement" onPress={() => setCount(prev => prev - 1)} />
        <Button title="increment" onPress={() => setCount(prev => prev + 1)} />
      </View>
      <Counter count={count} />
      <FlatListComponent />
      <Todos todos={todos} filter={'todo 10'} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
