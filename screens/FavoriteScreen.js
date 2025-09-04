import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealList/MealsList";
// import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context"; //export defaultではなく、普通にexportされているやつなので{}で囲む
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";


function FavoriteScreen() {

    // const favoriteMealsContext = useContext(FavoriteContext);
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)

    // 前MealデータからfavoriteMealsContextで管理されているidsのみが残るようにフィルタをかける。
    // これによりid以外のその他情報まで含んだデータリストができる
    const favoriteMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id));

    if(favoriteMeals.length === 0 ) {
        return (
            <View style={styles.roootContainer}>
                <Text style={styles.text}>You have no favorite meals yet. Start adding some!</Text>
            </View>
        );
    }

    return (
        <MealsList items={favoriteMeals} />
    );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    roootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
});