import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function BotaoPrimario({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#199Ae2',
        borderRadius: 50,
        height: 40,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: '#fff',
        fontSize: 20,
    }

});