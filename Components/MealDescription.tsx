import {StyleSheet, Text, View} from "react-native";

export default function MealDescription({complexity, duration, affordability}: {
    complexity: string,
    duration: string,
    affordability: string
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >{complexity.toUpperCase()}</Text>
            <Text style={styles.text} >{duration} m</Text>
            <Text style={styles.text} >{affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        marginVertical: 10,
    },
    text:{
        color: 'red',
    }
})