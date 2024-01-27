import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons"

export default function IconButton({color, icon, onPress,}: { color: string, icon: any, onPress: () => void }) {
    return (
        <Pressable onPress={onPress}
                   android_ripple={{color: '#ccc', borderless: true}}
                   style={(pressed) => pressed && styles.buttonPress}
        >
            <Ionicons name={icon}
                      size={20}
                      color={color}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonPress: {
        opacity: 0.7
    }
})