import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina1Screen </Text>
            <Button
                title='Ir a pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            <Text>Navegar con argumentos</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('PersonaScreen', {
                    id: 1,
                    nombre: 'Natalia'
                })}
            >
                <Text>Natalia</Text>
            </TouchableOpacity>
        </View>
    )
}
