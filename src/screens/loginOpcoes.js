import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import ButtonDestaque from "../components/ButtonDestaque";
import ButtonBranco from "../components/ButtonBranco";


export default function loginOpcoes({ navigation }) {
    return (
        <View style={Styles.container}>
        <Image source={require('../../assets/mascotePreto.png')} style={Styles.imagem} />
            <Text style={Styles.textoDestaque}>Bem vindo ao App Bentovote!</Text>
            <Text style={Styles.subTexto}>Escolha sua opção de login:</Text>
            <ButtonDestaque
                texto="Visitante pré-cadastrado"
                onPress={() => navigation.navigate('loginCadastrado')}
            >
            </ButtonDestaque>
            <View style={Styles.containerOu}>
                <View style={Styles.linha}></View>
                    <Text>ou</Text>
                <View style={Styles.linha}></View>
            </View>
            <ButtonBranco
                texto="Visitante Comum"
                onPress={() => navigation.navigate('loginComum')}

            >
            </ButtonBranco>
            <View style={Styles.containerAjuda}>
                <TouchableOpacity>
                    <Text style={Styles.ajuda}>ajuda</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({

container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
    },
imagem: {
    width: 175,
    height: 175,
},
textoDestaque: {
    fontSize: 27,
    fontWeight: "bold",
    margin: 10
},
subTexto: {
    margin: 20
},
containerOu: {
    alignItems: 'center',
    flexDirection: "row",
    margin: 15
},
linha: {
    height: 2,
    width: 75,
    backgroundColor: "#36363641",
    marginHorizontal: 10,
},
containerAjuda: {
    marginTop: 15,
    alignItems: 'flex-end',
    flex: 1,
    width: 280
},
ajuda: {
    textDecorationLine: 'underline'
}
})