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
        borderColor: '#e4e0de',
        borderRadius: 7,
        width: 350,
        height: 100,
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
        borderRadius: 15,
        width: 75,
        height: 75,
        margin: 10,
        marginBottom: 25
    }

})
