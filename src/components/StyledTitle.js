import styled from "styled-components/native";

export default styled.Text`
    color: ${(props)=> props.theme.colors.dark};
    margin-top: 20px;
    font-size: 40px;
    font-family: ${({theme}) => theme.fonts.roboto700};

`;