import { View, Text, StyleSheet } from "react-native";

function MealDetailScreen() {
    return (
        <View style={styles.container}>
            <Text>Meal Detail Screen</Text>
        </View>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#3f2f25',
    }
});