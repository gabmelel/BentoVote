import React, { useState, useRef } from "react";
import { FlatList, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView } from "react-native";
import Button from "../components/Button";


const { width } = Dimensions.get('window');


const slides = [
  {
    id: '1',
    imagem: require('../../assets/mascotePreto.png'),
    titulo: 'Bem vindo à Bentotec',
    subTexto: 'Você está na maior feira estudantil de Campinas!',
  },
  {
    id: '2',
    imagem: require('../../assets/mascotePreto.png'),
    titulo: 'Sistema de Votação BentoVote',
    subTexto: 'Venha saber como fizemos o melhor sistema de votação da história da Bentotec.',
  },
  {
    id: '3',
    imagem: require('../../assets/mascotePreto.png'),
    titulo: 'Utilização do Mapa Bentotec',
    subTexto: 'Utilize o mapa para conhecer os projetos de interesse. E conheça o Mapa Interativo no nosso Stand!',
  },
  {
    id: '4',
    imagem: require('../../assets/mascotePreto.png'),
    titulo: 'Tenha uma ótima Bentotec!',
    subTexto: 'Conheça, pergunte, vote, curte e divirta-se!',
  },
];

export default function onBoarding({ navigation }){
    const [slideAtual, setSlide] = useState(0)
    const listaRef = useRef(null);

const ultimoSlide = slideAtual === slides.length - 1;
function avancar() {
  if (ultimoSlide) {
    navigation.navigate('listaProjetos')
  } else {
    listaRef.current.scrollToIndex({ index: slideAtual + 1 });
  }
}
    function trocaSlide(e) {
      const novoIndice = Math.round(e.nativeEvent.contentOffset.x / width);
      setSlide(novoIndice);
    }
    return (
      <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.Pular}> 
              <Text style={{fontSize: 16, color: "#252525"}}>Pular</Text>
          </TouchableOpacity>
          <FlatList
          style={{ flex: 1 }}
              ref={listaRef}
              onMomentumScrollEnd={trocaSlide}
              data={slides}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
              <View style={[styles.slide, { width }]}>
      <Image source={require('../../assets/mascotePreto.png')} style={styles.imagem} />
      <Text style={styles.Texto}>{item.titulo}</Text>
      <Text style={styles.subTexto}>{item.subTexto}</Text>
    </View>
  )}
/>
          <View style={styles.navegador}>
            {slides.map((_, index) => (
                <View
                  key={index}
                  style={index === slideAtual ? styles.navegadorAtivo : styles.navegadorInativo}
    />
  ))}
</View>
          <Button
  texto={"Continuar"}
  onPress={avancar}
/>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#ececec',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: 30,
},
  Pular: {
    position: "absolute",
    top: 40,
    right: 40
  },
  Texto: {
    marginTop: 10,
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 30,
    textAlign: 'center',
    maxWidth: '75%'

  },
  subTexto: {
    margin: 10,
    fontWeight: "350",
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
    maxWidth: '50%',
    marginBottom: 30,
  },
  imagem: {
    width: 400,
    height: 400,
    marginBottom: 50,
    marginTop: 50,
  },
  navegador: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 25,
  marginTop: 5,

  },
  navegadorInativo: {
    backgroundColor: "#d9d9d9",
    width: 10,
    height: 10,
    borderRadius: 999,
    marginHorizontal: 3,
  },
  navegadorAtivo: {
    backgroundColor: "grey",
    width: 30,
    height: 10,
    borderRadius: 999,
  marginHorizontal: 3,
  },
  slide: {
  alignItems: 'center',
  justifyContent: 'center',
},
});