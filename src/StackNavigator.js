import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/HomeScreen";
import NavigationScreen from "./screens/NavigationScreen";
import ScrollViewScreen from "./screens/ScrollViewScreen";
import FlatListScreen from "./screens/FlatListScreen";
import StyledComponentsScreen from "./screens/StyledComponentsScreen";
import UsingApisScreen from "./screens/UsingApisScreen";
import AccelerometerScreen from "./screens/AccelerometerScreen";

const Stack = createNativeStackNavigator()

export default function StackNavigator(){

    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Navigation" component={NavigationScreen}/>
                <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen}/>
                <Stack.Screen name="FlatList" component={FlatListScreen}/>
                <Stack.Screen name="StyledComponents" component={StyledComponentsScreen}/>
                <Stack.Screen name="UsingApis" component={UsingApisScreen}/>
                <Stack.Screen name="Accelerometer" component={AccelerometerScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}