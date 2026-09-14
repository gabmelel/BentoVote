import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import CardProjeto from "../components/cardProjeto";

export default function BoasVindas({ navigation }){
    return (
        <View style={styles.container}>
            <CardProjeto></CardProjeto>
        </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});