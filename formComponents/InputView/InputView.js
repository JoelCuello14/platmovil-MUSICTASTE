import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const InputView = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#4B4B4B',
    height: 50,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    color: 'white'
  },
});

export default InputView;