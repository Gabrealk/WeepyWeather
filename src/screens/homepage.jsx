import React, { useState } from 'react';
import { Alert, SafeAreaView, Button, View, StyleSheet, ImageBackground, Text} from 'react-native';
import List from '../components/List';
import Input from '../components/Inputbar';
import { TextInput } from 'react-native-gesture-handler';




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
        <View style={styles.root}>
          <ImageBackground source={require("../components/skybg.jpg")} // got the image from google https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148639325.jpg?w=900&t=st=1701486364~exp=1701486964~hmac=2bda8c2c7c548d22dcbcb6b4dc8a50a8fee6fb9589271f005cd26b14c6c292fd
          resizeMode='cover'
          style={styles.image}>
              <Text style={styles.title}>Weepy Weather</Text>
              <List tasks={tasks}/>
              <Input addTask={addTask}/>      
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Button title="Go to search page" onPress={() => navigation.navigate('Search')}/>
                    <Button title="Go to weekly page" onPress={() => navigation.navigate('Weekly')}/>
                  </View>
                </View>
          </ImageBackground>
        </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  image: {
    flex:1,
    flexDirection:"column",
  },

  title: {
    fontSize: 30, 
    color: 'black', 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 20, 
  },

  textInput: {
    borderBottomWidth: 3,
    paadding: 5,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginVertical: 100,
    backgroundColor: '#fff',
    fontSize: 19,
    borderRadius: 16,
    borderBottomColor: 'black',

  },
});

export default Home;
