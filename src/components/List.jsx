import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet, SafeAreaView } from 'react-native';


function List({ tasks }) {  

  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task, index) => ( 
          <Pressable key={index}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  completed: {
    backgroundColor: '#e0e0e0',
  },

  taskText: {
    fontSize: 16,
  }
}); 


 
  
export default List;

