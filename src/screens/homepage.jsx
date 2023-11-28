import React, { useState } from 'react';
import { Alert, SafeAreaView, Button, View } from 'react-native';
import List from '../components/List';
import Input from '../components/Inputbar';




function Home({ navigation }) {

    const [tasks, setTasks] = useState(
        [
          'Check Today weather',
        ]
      );
     
      const addTask = (newTask) => {
        if (!tasks.includes(newTask)) {
          setTasks(prevTasks => [...prevTasks, newTask]);
        } else {
          Alert.alert('Error', 'This city already exists in the list.'); 
        }
      }

    return (
      <>
      <SafeAreaView style={{ flex: 1 }}>
      {/*<List tasks={tasks}/>
      <Input addTask={addTask}/>*/}
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
          <Button title="Go to search page" onPress={() => navigation.navigate('Search')}/>
          <Button title="Go to weekly page" onPress={() => navigation.navigate('Weekly')}/>
        </View>
      </View>
    </SafeAreaView>
    </>
    );

}

export default Home;