import {Platform, Pressable, StyleSheet, Text, View} from "react-native";

export default function CategoryGridTile({title, bgColor, onPress}: {
    title: string,
    bgColor: string,
    onPress: () => void
}) {
    return <Pressable android_ripple={{color: '#ccc'}}
                      style={({pressed}) => [styles.container, {backgroundColor: bgColor}, pressed ? styles.buttonPressed : null]}
                      onPress={onPress}>
        <View>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    </Pressable>

}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 2,
        flex: 1,
        borderRadius: 10,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.select({android: 'hidden'}),
    },
    buttonPressed: {
        opacity: 0.8
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})