import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
// import { StackNavigator } from './src/navigator/StackNavigator';
import { BasicDrawerNavigator } from './src/navigator/BasicDrawerNavigator';

const App = () => {
    return (
        <NavigationContainer>
            {/* <StackNavigator/> */}
            <BasicDrawerNavigator />
        </NavigationContainer>
    )
}

export default App;