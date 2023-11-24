import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, SafeAreaView, } from 'react-native';

function Input({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      Alert.alert('Enter a task');
      return;
    }

    addTask(taskText);
    setTaskText('');
  }
  return (
    <SafeAreaView>
    <View style={styles.form}>
    <TextInput
      style={styles.input}
      placeholder="Add a city..."
      onChangeText={(Text) => setTaskText(Text)}
      value={taskText}/>
    <Button title="Add" onPress={handleAddTask}/>
  </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
form: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginHorizontal: 20,
  marginTop: 20,
},
input: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#ccc',
  paddingHorizontal: 10,
  paddingVertical: 5,
  marginRight: 10,
},
});

export default Input;