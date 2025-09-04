import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items }) {
    function renderMealItem({ item }) {
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        };
        return (
            // ポイントは展開先のコンポーネントのprops定義に合わせてオブジェクトを展開して渡すこと
            <MealItem {...mealItemProps} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderMealItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})