import React, {useState} from 'react';
import {View, Button, StyleSheet, SafeAreaView} from 'react-native';
import Counter from './src/components/counter/Counter';
import FlatListComponent from './src/components/flatListComponent/FlatListComponent';

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
