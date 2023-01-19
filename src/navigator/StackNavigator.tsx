import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} />
        </Stack.Navigator>
    );
}