import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BotaoPrimario from "../objects/BotaoPrimario";
import InputForm from "../objects/InputForm";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [name, setName] = useState("");

  const signOn = async () => {
    console.log(email);
    if (password == repeatedPassword) {
      const auth = getAuth();
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const docRef = doc(firestore, "user-details", user.user.uid);
        await setDoc(docRef, {
          name,
          type: "USER",
          email,
        });
        navigation.navigate("Home");
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      console.error("Senhas não são iguais!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={"chevron-back"} size={42} color={"#fff"} />
        </TouchableOpacity>
        <Text style={styles.textTitle}>Crie sua conta</Text>
      </View>

      <View style={styles.formContainer}>
        <InputForm
          label="Usuário"
          keyboardType={"email-address"}
          onInputChange={setName}
        />
        <InputForm
          label="E-mail"
          keyboardType={"email-address"}
          onInputChange={setEmail}
        />
        <InputForm
          label="Senha"
          keyboardType={"password"}
          secureTextEntry={true}
          onInputChange={setPassword}
        />
        <InputForm
          label="Confirmar senha"
          keyboardType={"password"}
          secureTextEntry={true}
          onInputChange={setRepeatedPassword}
        />
        <BotaoPrimario label="Criar conta!" onPress={() => signOn()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#199AE2",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 0.15,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#199AE2",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textTitle: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 0.85,
    backgroundColor: "#e5e5e5",
    borderTopLeftRadius: 50,
    borderTopEndRadius: 50,
  },
  scrollFormContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  scrollForm: {
    width: "100%",
  },
});
