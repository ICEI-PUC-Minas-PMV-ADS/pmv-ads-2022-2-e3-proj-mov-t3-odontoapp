import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Agendamento from './Agendamento';
import Historico from './Historico';

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: '#1c1c1c',
                tabBarActiveTintColor: '#199AE2',
                tabBarStyle: {
                    borderTopColor: '#1c1c1c'
                },
                tabBarHideOnKeyboard: false,
            }}
        >
            <Tab.Screen
                name="Agendamentos"
                component={Agendamento}
                options={{
                    tabBarIcon: ({ size, color }) => (<Icon name='calendar' size={size} color={color} />)
                }}
            />
            <Tab.Screen
                name="Historico"
                component={Historico}
                options={{
                    tabBarIcon: ({ size, color }) => (<Icon name='reader-outline' size={size} color={color} />)
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#199AE2',
        alignItems: 'center',
        justifyContent: 'center',

    },

});