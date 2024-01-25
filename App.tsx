import CategoryScreen from "./Screens/CategoryScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverview from "./Screens/MealsOverview";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>

                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {backgroundColor: "#9d7e67"},
                        contentStyle: {backgroundColor: "#2a1f17"}
                        // We can set headerTintColor : "red" for changing heading color.
                        // We can set these properties for every or for individual screens
                    }}
                >
                    <Stack.Screen name="Categories"
                                  component={CategoryScreen}
                                  options={{
                                      title: "All Categories",
                                  }}

                    />
                    <Stack.Screen name="Overview" component={MealsOverview}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}
