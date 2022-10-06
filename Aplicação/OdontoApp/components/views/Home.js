import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';


export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Tela Home</Text>
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