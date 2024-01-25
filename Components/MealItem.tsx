import {Pressable, StyleSheet, Text, View} from "react-native";

export default function MealItem({title}: { title: string }) {

    return (
        <View style={styles.container}>
            <Pressable>
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flex: 1,
        height: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})