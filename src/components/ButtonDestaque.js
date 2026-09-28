import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonDestaque({texto, onPress}) {
    return (
    <View>
        <TouchableOpacity style={[styles.Button]} onPress={onPress}>
            <LinearGradient colors={['#F97316', '#EF4444']}  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.Button}>
                    <Text style={styles.Texto}>{texto}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
Button: {
    width: 320,
    height: 50,  
    backgroundColor: '#f05800',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    },
Texto: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
}
})