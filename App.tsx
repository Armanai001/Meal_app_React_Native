import {SafeAreaView, StyleSheet, View} from "react-native";
import CategoryScreen from "./Screens/CategoryScreen";
import {StatusBar} from "expo-status-bar";


export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <StatusBar style='light'/>
                <CategoryScreen/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})