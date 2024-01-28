import {StyleSheet, Text, View} from "react-native";

export default function FavouriteScreen(){
    return <View style={styles.emptyContainer}>
        <Text style={styles.title}>
            You have no favorite meals yet.
        </Text>
    </View>
}

const styles = StyleSheet.create({
    emptyContainer: {
        flex:1,
        justifyContent: 'center',
    },
    title:{
        color:'white',
        padding:5,
        margin:5,
        fontSize:23,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})