import React, { useState, useEffect } from 'react';
import { Alert, SafeAreaView, Button, View, Text } from 'react-native';
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

      const fetchWeatherData = async () => {
        try {
          // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
          const apiKey = '';
          // Replace 'YOUR_CITY' with the city for which you want weather data
          const city = '';
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
          const response = await fetch(apiUrl);
          const data = await response.json();
    
          if (response.ok) 
          {
            setWeatherData(data);
          } 
          else 
          {
            console.error('Error fetching weather data:', data.message);
            // Handle errors here, such as displaying an error message to the user
          }
        } 
        
        catch (error) {
          console.error('Error fetching weather data:', error.message);
          // Handle errors here, such as displaying an error message to the user
        }
      };
    
      useEffect(() => {
        fetchWeatherData();
      }, []);

    
  return (
    <>
      <View style={{ flex: 1 }}>
        {/*<List tasks={tasks}/>
        <Input addTask={addTask}/>*/}

          {/**main page and forecast screen */}
            <View style={{backgroundColor: "royalblue"}}>
              <Text style={{ fontSize: 24, color: 'white', marginBottom: 20, alignSelf: "center" }}>
                Today's Weather
              </Text>


            </View>
          





        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>

            <Button
              title="Go to search page"
              onPress={() => navigation.navigate('Search')}
            />
            <Button
              title="Go to weekly page"
              onPress={() => navigation.navigate('Weekly')}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;