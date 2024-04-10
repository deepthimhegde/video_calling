import React from 'react';
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
function Navigation() {
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen 
                    name="Room" 
                    component={MeetingRoom} 
                    options={{
                        title: 'Start a meeting',
                        headerStyle: {
                            backgroundColor: "#1c1c1c",
                            shadowOpacity: 0,
                        },
                        headerTintColor: "white",
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;

