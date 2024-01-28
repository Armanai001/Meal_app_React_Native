import {StyleSheet, Text, View} from "react-native";

export default function FavouriteScreen(){
    return <View>
        <Text style={styles.title}>
            Favourite screen
        </Text>
    </View>
}

const styles = StyleSheet.create({
    title:{
        color:'white',
        padding:5,
        margin:5,
        fontSize:20
    }
})