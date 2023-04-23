import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import Container from "../components/Container";
import StyledButton from "../components/StyledButton";
import StyledTitle from "../components/StyledTitle";


export default function UsingApisScreen(){

    const [user, setUser] = useState({});


    const navigation = useNavigation();
    const navigateBack = ()=> {
        navigation.goBack();
    }

    const fetchGithubUser = async () => {
        const res = await axios.get('https://api.github.com/users/jefersonvmoraes');
        setUser(res.data)
    }

    useEffect(()=>{
        fetchGithubUser()
    },[])
    return(
        <Container>
            <StyledTitle>Consumindo Apis</StyledTitle>
            <Text style={styles.text}>{user.name}</Text>
            <Text>{user.bio}</Text>
            <Image source={{ uri: user.avatar_url }} style={styles.avatar}/>
            <StyledButton onPress={navigateBack}>Voltar</StyledButton>
        </Container>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        marginVertical: 20,
        textAlign: 'center',
    },
    avatar:{
        alignSelf: 'center',
        borderRadius: 999,
        height: 200,
        width: 200,
        marginVertical: 20,
        borderWidth: 2,
    }
})