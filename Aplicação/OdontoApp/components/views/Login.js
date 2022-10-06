import React from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import BotaoPrimario from '../objects/BotaoPrimario';
import InputForm from '../objects/InputForm';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.logoWrp}>
                <Image style={styles.imgLogotipo} resizeMode='contain' source={require('../../assets/Logotipo.png')} />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Acesse sua conta</Text>
                <InputForm label="Usuário" keyboardType={'email-address'} />
                <InputForm label="Senha" />
                <BotaoPrimario label="Entrar" onPress={() => navigation.navigate('Home')} />
                <View style={styles.wrplink}>
                    <Text style={styles.linkDescription}>Não possui uma conta? </Text>

                    <TouchableOpacity style={styles.botaoLink} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.link}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.botaoLink} onPress={() => navigation.navigate('Recuperar Senha')} >
                    <Text style={styles.link}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#199AE2',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    logoWrp: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 60
    },
    imgLogotipo: {
        width: 250,
        height: 250,
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 0.7,
        backgroundColor: '#F7F7F7',
        borderTopLeftRadius: 50,
        borderTopEndRadius: 50,
    },
    title: {
        color: '#2c2c2c',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 50
    },
    wrplink: {
        flexDirection: 'row',
        backgroundColor: '#F7F7F7',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    botaoLink: {
        color: '#0061BA',
        backgroundColor: '#F7F7F7',

    },
    linkDescription: {
        backgroundColor: '#F7F7F7',
        color: '#111',
        textAlignVertical: 'center',
        height: 35,
        paddingRight: 5,
    },
    link: {
        color: '#0061BA',
        textAlignVertical: 'center',
        height: 35,
    }
});