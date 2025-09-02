import { StyleSheet, Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function iconButton({icon, onPress, color}) {
    return (
        // pressableはstyleの引数にpressされたかどうかを示すpressedをもつ。pressed==trueのときにstyles.pressedを適用する
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons
                name={icon}
                size={24}
                color={color}
            />
        </Pressable>
    );
}

export default iconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});