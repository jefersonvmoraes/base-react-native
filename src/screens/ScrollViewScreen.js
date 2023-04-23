import {Text, StyleSheet, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

import NavButton from "../components/NavButton";
import Title from "../components/Title";
import Container from "../components/Container";

export default function ScrollViewScreen(){

    const navigation = useNavigation()
    const navigateBack = ()=>{
        navigation.goBack()
    }

    return(

        <Container>
            <Title text="ScrollView"/>
            <NavButton onPress={navigateBack} text="Voltar"/>
            <Container>
                <ScrollView 
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.item}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                    </Text>

                    <Text style={styles.item}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                    </Text>

                    <Text style={styles.item}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                    </Text>

                    <Text style={styles.item}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                    </Text>

                    <Text style={styles.item}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                    </Text>

                    <Text style={styles.item}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellat voluptatem tenetur non porro doloremque quo assumenda vero consequuntur maxime error, 
                        consequatur enim dolor itaque repellendus temporibus modi voluptate ea natus.
                    </Text>
                </ScrollView>    
            </Container>
        </Container>
    )
}

const styles = StyleSheet.create({

    item:{
        fontSize: 16,
        marginTop: 16,
    },

})