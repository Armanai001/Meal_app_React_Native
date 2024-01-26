import {StyleSheet, Text, View} from "react-native";

export default function MealsDetailScreen({route}: any) {
    const mealId = route.params.mealId
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Detail Screen : {mealId}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 20
    },
    text: {
        color: "white",
        fontSize: 20
    }
})