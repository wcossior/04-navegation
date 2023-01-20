import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { useEffect } from 'react';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { };

export const PersonaScreen = ({ route, navigation }: Props) => {

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        });
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>PersonaScreen</Text>
        </View>
    )
}
