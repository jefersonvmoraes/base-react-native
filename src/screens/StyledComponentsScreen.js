import {useNavigation} from "@react-navigation/native";
import StyledContainer from "../components/StyledContainer";
import StyledTitle from "../components/StyledTitle";
import StyledButton from "../components/StyledButton";

export default function StyledComponentsScreen(){

    const navigation = useNavigation();
    const navigateBack = ()=>{
        navigation.goBack();
    }
    return(
        <StyledContainer>
            <StyledTitle >Styled Components</StyledTitle>
            <StyledButton onPress={navigateBack}>Voltar</StyledButton>
        </StyledContainer>
    )
}
