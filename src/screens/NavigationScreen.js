
import { useNavigation } from "@react-navigation/native";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Container from "../components/Container";

export default function NavigationScreen (){

    const navigation = useNavigation();
    const navigateBack = ()=>{
        navigation.goBack();
    }
    return(

        <Container>
            <Title text="Aula de Navegação"/>
            <NavButton onPress={navigateBack} text="Voltar"/>
        </Container>
    )
}
