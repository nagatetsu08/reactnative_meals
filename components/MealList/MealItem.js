import { View, Text, StyleSheet, Pressable, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem ({ id, title, imageUrl, duration, complexity, affordability }) {

    // componentsでルーティングで使用するパラメータにアクセスする際にやり方。（通常のReactの練習）
    // コンポーネントの一コンテンツから画面遷移させたい場合に重宝する
    // 画面として登録されていない場合もこれと同じやり方で画面遷移をコントロールできる
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable onPress={selectMealItemHandler}>
                <View>
                    <Image 
                        source={{ uri: imageUrl }} style={styles.image}
                    />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails 
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    }
})
