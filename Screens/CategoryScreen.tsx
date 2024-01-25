import {FlatList, ListRenderItemInfo, StyleSheet, View} from "react-native";
import CategoryGridTile from "../Components/CategoryGridTile";
import {CATEGORIES} from "../data/data";

function renderCategoryItem(itemData: ListRenderItemInfo<any>) {
    return <CategoryGridTile title={itemData.item.title} bgColor={itemData.item.color}/>
}

export default function CategoryScreen() {
    return <View style={styles.container}>
        <FlatList data={CATEGORIES}
                  keyExtractor={(item) => item.id}
                  renderItem={renderCategoryItem}
                  numColumns={2}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        height:"100%"
    }
})