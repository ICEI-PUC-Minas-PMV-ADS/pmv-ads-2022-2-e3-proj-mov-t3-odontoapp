import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';



export default function Card({ item }) {
    return (
        <View style={styles.container}>
            <Text>{item.nome}</Text>
            <Text>{item.procedimento}</Text>
            <Text>{item.tipoConsulta}</Text>
            <Text>{item.data}</Text>
            <Text>{item.horario}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },

});