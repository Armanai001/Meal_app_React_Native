import CategoryScreen from "./Screens/CategoryScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverview from "./Screens/MealsOverview";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Categories" component={CategoryScreen}/>
                    <Stack.Screen name="Overview" component={MealsOverview}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}
