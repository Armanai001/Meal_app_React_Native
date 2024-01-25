import {StyleSheet, Text, View} from "react-native";

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

    const categoryId = route.params.categoryId;
    return <View style={styles.container}>
        <Text style={styles.text}>
            OverView of {categoryId}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    text: {
        fontSize: 20,
        color:'#8c0808'
    }
})