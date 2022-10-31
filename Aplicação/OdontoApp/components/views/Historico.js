import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Historico({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.topBar}>
                    <View style={{ width:'20%', flexDirection: 'row', alignItems: 'center', justifyContent:'center'  }}>
                        <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Login')}}><Icon name='chevron-back' size={22} /></TouchableOpacity>
                    </View>
                    <View style={{ width:'80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                        <View style={styles.wrpImageUser}>
                            <ImageBackground source={require('./../../assets/doctor-profile-small.png')} style={styles.imgUser} />
                        </View>
                        <TouchableOpacity style={[styles.botao, { backgroundColor: '#e5e5e5' }]}><Icon name='notifications' size={22} /></TouchableOpacity>
                    </View>

                </View>
                <View style={styles.headerList}>
                    <Text style={{fontSize:28, fontWeight: 'bold', marginRight:15}}>Histórico</Text>
                    <TouchableOpacity style={styles.botaoHeaderList}>
                        <Text style={{color:'#fff', marginRight:5}}>Filtrar</Text>
                        <Icon name='chevron-down' color={'#fff'} size={18}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.list}>

                <FlatList />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    header: {
        flex: .2,
        flexDirection: 'column'
    },
    topBar: {
        flex: .5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    botao: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#a8a8a8',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:10

    },
    wrpImageUser: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:30

    },
    imgUser: {
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerList: {
        flex: .5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        flex: .8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoHeaderList:{
        height: 25,
        paddingHorizontal:10,
        backgroundColor:'#199AE2',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:12,
    }


});