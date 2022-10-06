import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import BotaoPrimario from '../objects/BotaoPrimario';
import InputForm from '../objects/InputForm';

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <Text>Tela Cadastro</Text>
        </View>
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