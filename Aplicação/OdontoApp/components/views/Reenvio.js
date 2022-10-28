import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BotaoPrimario from '../objects/BotaoPrimario';

export default function RecuperarSenha({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name={'chevron-back'} size={42} color={'#fff'} />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Esqueci minha senha</Text>
            </View>

            <View style={styles.formContainer}>
                <View style={styles.contentInfo}>
                    <Text style={styles.infoTitle}>Cheque seu e-mail!</Text>
                    <Text style={styles.infoSubtitle}>Foi enviado um link para recuperação da sua senha!</Text>
                </View>
                <View style={styles.contentForm}>
                    <BotaoPrimario label={'Reenviar'}/>
                </View>
            </View>



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
    header: {
        flex: .15,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#199AE2',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textTitle: {
        flex: .7,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    contentInfo:{
        flex: .35,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30

    },
    contentForm:{
        flex:.65,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    infoTitle:{
        textAlign: 'center',
        fontSize:22,
        fontWeight: 'bold',
    },
    infoSubtitle:{
        paddingTop:10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'300'
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: .85,
        backgroundColor: '#e5e5e5',
        borderTopLeftRadius: 50,
        borderTopEndRadius: 50,
    },
    
});