import React, { useState, useEffect } from 'react';
import { Alert, View, Text, Image, StyleSheet, Button } from 'react-native';
import List from '../components/List';
import Input from '../components/Inputbar';

function Home({ navigation }) {
  const [tasks, setTasks] = useState(['Check Today weather']);
  const [weatherData, setWeatherData] = useState(null);

  const addCity = async (newCity) => {
    await fetchWeatherData(newCity);
  };

  const fetchWeatherData = async (city) => {
    try {
      const apiKey = 'c5139903775f07430e287ba8362fe725'; // Replace with your actual OpenWeatherMap API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {
        setWeatherData(data);
      } else {
        console.error('Error fetching weather data:', data.message);
        // Handle errors here, such as displaying an error message to the user
      }
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      // Handle errors here, such as displaying an error message to the user
    }
  };

  useEffect(() => {
    fetchWeatherData(''); // Initialize with an empty city, replace with default city if needed
  }, []);

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'royalblue', paddingVertical: 180 }}>
          <Text style={{ fontSize: 24, color: 'white', marginBottom: 20, alignSelf: 'center' }}>
            Today's Weather
          </Text>

          {weatherData && (
            <>
              <Text style={{ fontSize: 24, color: 'white', marginBottom: 20, alignSelf: 'center' }}>
                Temperature: {weatherData.main.temp}°C
              </Text>

              <Text style={{ fontSize: 24, color: 'white', marginBottom: 20, alignSelf: 'center' }}>
                Weather: {weatherData.weather[0].description}
              </Text>
            </>
          )}
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
              onPress={() => navigation.navigate('Search', { addCity })}
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
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default Home;
