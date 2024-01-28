import {StyleSheet, Text, View} from "react-native";

export default function List({title, data}: { title: string, data: [] }) {
    return <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
        {
            data.map((data) => {
                return <View key={data} style={styles.items}>
                    <Text style={styles.items}>
                        {data}
                    </Text>
                </View>
            })
        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 2,
        marginTop: 10,
    },
    titleContainer:{
        borderBottomColor: 'khaki',
        borderStyle: 'solid',
        borderBottomWidth: 3,
        margin:5,
        padding: 5,


    },
    title: {
        paddingBottom:10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    items: {
        margin: 2,
        marginTop: 5,
        padding: 5,
        fontSize: 20,
        borderStyle: 'solid',
        borderColor: "khaki",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "khaki",
        fontWeight: "bold",
    }
})