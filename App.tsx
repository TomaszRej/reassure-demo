import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Counter from './src/components/Counter';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="decrement" onPress={() => setCount(prev => prev - 1)} />
        <Button title="increment" onPress={() => setCount(prev => prev + 1)} />
      </View>
      <Counter count={count} />
    </View>
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
