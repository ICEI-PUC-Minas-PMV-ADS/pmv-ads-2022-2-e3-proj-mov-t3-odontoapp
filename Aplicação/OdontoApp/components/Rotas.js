import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Login from "./views/Login";
import Home from "./views/Home";
import RecuperarSenha from "./views/RecuperarSenha";
import Cadastro from "./views/Cadastro";
import Reenvio from "./views/Reenvio"

const Stack = createNativeStackNavigator();


export default function Rotas(){
    return(
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Recuperar Senha" component={RecuperarSenha}/>
            <Stack.Screen name="Cadastro" component={Cadastro}/>
            <Stack.Screen name="Reenvio" component={Reenvio}/>

        </Stack.Navigator>
    );
}