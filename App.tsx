import 'react-native-gesture-handler';
import CategoryScreen from "./Screens/CategoryScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverview from "./Screens/MealsOverview";
import MealsDetailScreen from "./Screens/MealsDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";
import FavouriteScreen from "./Screens/FavouriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return <Drawer.Navigator
        screenOptions={{
            headerStyle: {backgroundColor: "#9d7e67"},
            sceneContainerStyle: {backgroundColor: "#2a1f17"},
            headerTintColor: "black",
            drawerContentStyle: {backgroundColor: "#d09d78"},
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor:'black',
            drawerActiveBackgroundColor: "#2a1f17"
        }}
    >
        <Drawer.Screen name="Categories"
                       component={CategoryScreen}
                       options={{
                           title: "Categories",
                           drawerIcon: ({color, size}) => (
                               <Ionicons name="list" color={color} size={size}/>
                           )
                       }}
        />
        <Drawer.Screen name="Favourite"
                       component={FavouriteScreen}
                       options={{
                           title: "Favourite",
                           drawerIcon: ({color, size}) => (
                               <Ionicons name="star" color={color} size={size}/>
                           )
                       }}
        />

    </Drawer.Navigator>
}


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
                    <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
                        headerShown: false,
                    }}/>
                    <Stack.Screen name="Overview" component={MealsOverview}/>
                    <Stack.Screen name="Detail" component={MealsDetailScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}
