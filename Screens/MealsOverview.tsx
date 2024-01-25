import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "../Components/MealItem";
import {CATEGORIES, MEALS} from "../data/data";
import {useLayoutEffect} from "react";

export default function MealsOverview({route, navigation}: any) {
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
        return <MealItem data={itemData.item}/>
    }
    const categoryId = route.params.categoryId;

    useLayoutEffect(() => {
            // useEffect run after mounting but it runs before component mounting
            const categoryTitle = CATEGORIES.find(item => item.id === categoryId)

            if (categoryTitle) {
                navigation.setOptions({
                    title: categoryTitle.title
                });
            }
        }, []
    )

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