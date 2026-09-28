import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonBranco({texto, onPress}) {
    return (
    <View>
        <TouchableOpacity style={[styles.Button]} onPress={onPress}>
                    <Text style={styles.Texto}>{texto}</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
Button: {
    width: 320,
    height: 50,
    outlineColor: "#afafaf",
    outlineWidth: 1,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    },
Texto: {
    fontSize: 19,
    color: "#1f1f1f",
}
})