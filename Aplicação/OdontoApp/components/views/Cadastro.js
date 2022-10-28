import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BotaoPrimario from '../objects/BotaoPrimario';
import InputForm from '../objects/InputForm';

export default function Cadastro({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name={'chevron-back'} size={42} color={'#fff'} />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Crie sua conta</Text>
            </View>

            <View style={styles.formContainer}>
                
                            <InputForm label="Usuário" keyboardType={'email-address'} />
                            <InputForm label="E-mail" keyboardType={'email-address'} />
                            <InputForm label="Senha" keyboardType={'password'} secureTextEntry={true} />
                            <InputForm label="Confirmar senha" keyboardType={'password'} secureTextEntry={true} />
                            <BotaoPrimario label="Criar conta!" onPress={() => navigation.navigate('Home')} />
          
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
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: .85,
        backgroundColor: '#e5e5e5',
        borderTopLeftRadius: 50,
        borderTopEndRadius: 50,
    },
    scrollFormContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollForm: {
        width: '100%',
    }
});