import {Text, StyleSheet, TouchableOpacity} from "react-native";

export default function NavButton({text, onPress}){
    return(
        <TouchableOpacity 
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#1c1a1d',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
       
    },
    buttonText:{
        color: '#fff'
    },
})