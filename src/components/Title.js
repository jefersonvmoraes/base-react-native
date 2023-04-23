import {Text, StyleSheet} from "react-native"

export default function Title({text}){
    return(
        <Text style={styles.title}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    title:{
        marginTop: 20,
        fontSize: 40,
        color: '#f64348',
    },
})