import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "../Components/MealItem";
import {MEALS} from "../data/data";

export default function MealsOverview({route}: any) {
    /*
     * If we want to get access currently loaded route information in some nested component which is not registered as a screen
     *
     * Alternatively : we can use useRoute() hook from react-navigation
     *      import {useRoute} from '@react-navigation/native';
     *      const route = useRoute();
     *      const categoryId = route.params.categoryId;
     *
     * */

    const renderItem = (itemData: any) => {
        return <MealItem title={itemData.item.title}
        />
    }
    const categoryId = route.params.categoryId;


    const filterMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);


    return <View style={styles.container}>

        <FlatList data={filterMeals}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
        />

    </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
})