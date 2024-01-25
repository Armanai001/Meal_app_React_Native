import {Pressable, StyleSheet, Text, View} from "react-native";

export default function CategoryGridTile({title, bgColor}: { title: string, bgColor: string }) {
    return <View style={[styles.container, {backgroundColor: bgColor}]}>
        <Pressable>
            <View>
                <Text>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 2
    }
})