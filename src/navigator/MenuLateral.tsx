import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width, height } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width > height ? 'permanent' : 'front'
            }}

            drawerContent={(props) => <Contenido {...props} />}

        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const Contenido = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png'
                    }}
                    style={styles.avatar}
                />
            </View>
            {/* Opciones */}
            <View style={styles.menuOptionsContainer}>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('StackNavigator')}
                >
                    <Text style={styles.menuItemText}>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.menuItemText}>Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
}