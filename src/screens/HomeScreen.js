import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Container from "../components/Container";

import StyledTitle from "../components/StyledTitle";

export default function HomeScreen (){

    const navigation = useNavigation();
    const navigateToNavigationScreen = ()=>{
        navigation.navigate("Navigation")
    }
    const toScrollViewNavigation = ()=>{
        navigation.navigate("ScrollViewScreen")
    }
    const toFlatListScreen = () => {
        navigation.navigate("FlatList")
    }
    const toStyledComponentsScreen = () => {
        navigation.navigate("StyledComponents")
    }
    const toUsingApisScreen = ()=> {
        navigation.navigate("UsingApis")
    }

    return(

        <Container>
            <StyledTitle>Óla, mundo!</StyledTitle>
            <StatusBar style="auto"/>

            <NavButton onPress={navigateToNavigationScreen} text="Aula de Navegação"/>

            <NavButton onPress={toScrollViewNavigation} text="Aula de ScrollView"/>

            <NavButton onPress={toFlatListScreen} text="Aula de FlatList"/>

            <NavButton onPress={toStyledComponentsScreen} text="Aula de Styled Components"/>

            <NavButton onPress={toUsingApisScreen } text="Aula de Consumo de Apis"/>
        </Container>
    )
}

