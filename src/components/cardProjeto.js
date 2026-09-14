import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

export default function CardProjeto() {
    return (
        <View>
            <TouchableOpacity style={styles.card}>
                <View style={styles.conteudo}>
                    <Image source={require('../../assets/icon.png')} style={styles.icon}/>
                    <View style={styles.conteudoTexto}>
                        <Text style={styles.nomeProjeto}>Projeto 1</Text>
                        <Text numberOfLines={4} ellipsizeMode="tail" style={styles.descricaoProjeto}>Lorem ipsum é um texto padrão em latim usado para preencher espaços em branco em layouts de design gráfico, sites e impressos antes da inclusão do conteúdo final.</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 5,
        borderWidth: 1,
        borderColor: '#e9d4d4',
        borderRadius: 7,
        width: 350,
        height: 120,
        overflow: 'hidden',
    },
    conteudo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
    },
conteudoTexto: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    flexShrink: 1,
    minWidth: 0,
},
    nomeProjeto: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    descricaoProjeto: {
        fontSize: 14,
        color: '#666',
    },
    icon: {
        borderRadius: 30,
        width: 100,
        height: 100,
        margin: 10,
    }

})
