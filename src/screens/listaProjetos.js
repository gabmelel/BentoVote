import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import CardProjeto from "../components/cardProjeto";

export default function listaProjetos({ navigation }){
    return (
        <View style={styles.container}>
            <CardProjeto></CardProjeto>
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2ffef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});