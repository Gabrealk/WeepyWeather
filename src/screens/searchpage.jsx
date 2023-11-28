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
            <SafeAreaView>
                <View style={styles.blueBackGround}>
                    <List tasks={tasks}/>
                    <Input addTask={addTask}/>
                    <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                    </View>
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
      },

    text: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',

      },
});

export default Search;
