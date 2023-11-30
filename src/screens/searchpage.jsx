"use client";

import {View, Text, Image, StyleSheet, Alert, SafeAreaView, Button} from 'react-native';
import React, { useState } from 'react';
import List from '../components/List';
import Input from '../components/Inputbar';

function Search({  }) {

    const [tasks, setTasks] = useState(
        [
          'Enter a city to check its weather',
        ]
      );
     
      const addTask = (newTask) => {
        if (!tasks.includes(newTask)) {
          setTasks(prevTasks => [...prevTasks, newTask]);
        } else {
          Alert.alert('Error', 'This city already exists in the list.'); 
        }
    };

  return (
    <>
      <SafeAreaView style={styles.blueBackGround}>
          <View>
              <List tasks={tasks}/>
              <Input addTask={addTask}/>
              <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}/>
          </View>
          <View style={styles.Weekbox}>
              <Text>city1 placeholder</Text>
          </View>
              
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
    Weekbox: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 10,
      },
      
      footerBox: {
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 5,
        margin: 60,
      },

      blueBackGround: {
        backgroundColor: 'royalblue',
        padding:50,
      },

    text: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',

      },
});

export default Search;
