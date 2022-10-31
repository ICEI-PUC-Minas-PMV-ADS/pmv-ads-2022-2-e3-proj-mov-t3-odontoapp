import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default function Card({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleCard}>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>{item.nome}</Text>
                <TouchableOpacity ><Icon name={'ios-ellipsis-horizontal'} size={22} color={'#07996D'} /></TouchableOpacity>
            </View>
            <View style={styles.descriptionCard}>
                <Text style={{ fontSize: 20, fontWeight: '500', color:'#199AE2', marginRight:10 }}>{item.procedimento}</Text>
                <Text style={{ fontSize: 20, fontWeight: '500', color:'#199AE2', marginRight:10 }}>-</Text>
                <Text style={{ fontSize: 20, fontWeight: '500', color:'#199AE2', marginRight:10 }}>{item.tipoConsulta}</Text>
            </View>
            <View style={styles.horarioCard}>
                <Text style={{ fontSize: 20, fontWeight: '500', color:'#07996D', marginRight:10 }}>{item.data}</Text>
                <Text style={{ fontSize: 20, fontWeight: '500', color:'#1c1c1c', marginRight:10 }}>{item.horario}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2FDFA',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 10,
        width: '90%',
        borderRadius: 10,
        paddingVertical: 10
    },
    titleCard: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical:10
    },
    descriptionCard:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        paddingHorizontal: 20
    },
    horarioCard:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }

});