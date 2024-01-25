import CategoryScreen from "./Screens/CategoryScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Meal's Categories" component={CategoryScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}
