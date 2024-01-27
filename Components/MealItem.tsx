import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import MealDescription from "./MealDescription";

export default function MealItem({data}: { data: any }) {

    type RootStackParamList = {
        Detail: { mealId: string };
    };

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = () => {
        navigation.navigate('Detail', {
            mealId: data.id
        })

    }

    return (
        <Pressable android_ripple={{color: '#ccc', radius: 10}}
                   style={({pressed}) => [styles.container, pressed ? styles.buttonPressed : null]}
                   onPress={handlePress}>
            <View style={styles.main}>
                <Image source={{uri: data.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{data.title}</Text>
            </View>
            <MealDescription complexity={data.complexity}
                             duration={data.duration}
                             affordability={data.affordability}
            />
        </Pressable>

    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        flex: 1,
        elevation: 5,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.5,
        shadowOffset: {width: 8, height: 7},
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: "white",
    },
    buttonPressed: {
        opacity: 0.7
    },
    main: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})