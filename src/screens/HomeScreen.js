import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Container from "../components/Container";

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
    return(

        <Container>
            <Title text="Óla, mundo!"/>
            <StatusBar style="auto"/>

            <NavButton onPress={navigateToNavigationScreen} text="Aula de Navegação"/>

            <NavButton onPress={toScrollViewNavigation} text="Aula de ScrollView"/>

            <NavButton onPress={toFlatListScreen} text="Aula de FlatList"/>

            <NavButton onPress={toStyledComponentsScreen} text="Aula de Styled Components"/>
        </Container>
    )
}

