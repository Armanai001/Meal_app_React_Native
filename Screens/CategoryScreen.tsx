import {FlatList, ListRenderItemInfo, View} from "react-native";
import CategoryGridTile from "../Components/CategoryGridTile";
import {CATEGORIES} from "../data/data";

function renderCategoryItem(itemData: ListRenderItemInfo<any>) {
    return <CategoryGridTile title={itemData.item.title} bgColor={itemData.item.color}/>
}

export default function CategoryScreen() {
    return <View>
        <FlatList data={CATEGORIES}
                  keyExtractor={(item) => item.id}
                  renderItem={renderCategoryItem}/>
    </View>
}