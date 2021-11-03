import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FriendsContext } from './FriendsContext';
import HomePage from './containers/HomePage/index';
const Stack = createNativeStackNavigator();

function App() {

    return (

        <FriendsContext.Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
                    <Stack.Screen name="Home" component={HomePage} options={{}} />
                </Stack.Navigator>
            </NavigationContainer>
        </FriendsContext.Provider>

    );
}

export default App