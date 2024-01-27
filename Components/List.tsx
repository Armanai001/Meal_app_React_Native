import {StyleSheet, Text, View} from "react-native";

export default function List({title, data}: { title: string, data: [] }) {
    return <View style={styles.container}>
        <Text style={styles.title}>
            {title}
        </Text>

        {
            data.map((data) => {
                return <View key={data}>
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
        marginTop:10
    },
    title: {
        margin: 5,
        padding: 3,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',

    },
    items: {
        textAlign: 'left',
        margin: 2,
        marginTop:5,
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