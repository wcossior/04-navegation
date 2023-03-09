import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
// import { StackNavigator } from './src/navigator/StackNavigator';
import { BasicDrawerNavigatorMiau } from './src/navigator/BasicDrawerNavigator';

const App = () => {
    return (
        <NavigationContainer>
            {/* <StackNavigator/> */}
            <BasicDrawerNavigatorMiau />
        </NavigationContainer>
    )
}

export default App;