import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homepage';
import SearchScreen from './screens/searchpage';
import WeeklyScreen from './screens/weeklypage';

const Stack = createStackNavigator();

function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Weekly" component={WeeklyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
