import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/data";
import List from "../Components/List";
import MealDescription from "../Components/MealDescription";

export default function MealsDetailScreen({route}: any) {
    const mealId = route.params.mealId
    const meal = MEALS.find(item => item.id === mealId)

    return (
        <View>
            {
                meal &&
                <>
                    <ScrollView style={styles.container}>
                        <View style={styles.mainContainer}>
                            <View style={styles.imageContainer}>
                                <Image source={{uri: meal.imageUrl}} style={styles.image}/>
                            </View>
                            <Text style={styles.title}>{meal.title}</Text>
                            <MealDescription complexity={meal.complexity}
                                             duration={meal.duration}
                                             affordability={meal.affordability}/>
                        </View>
                        <View>
                            <List title="Ingredients" data={meal.ingredients}/>
                        </View>
                        <View>
                            <List title="Steps" data={meal.steps}/>
                        </View>
                    </ScrollView>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 2,
        marginBottom: 5,
    },
    mainContainer: {
        borderStyle: 'solid',
        borderWidth:3,
        borderRadius:10,
        borderColor: '#180b0b',
        backgroundColor: '#180b0b'
    },
    imageContainer: {
        marginBottom: 20,
        alignItems: "center",
    },
    image: {
        width: "90%",
        height: 200,
        margin: 5
    },
    title: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold",
    }
})