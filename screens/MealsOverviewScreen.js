import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";


function MealsOverviewScreen({ route, navigation }) {

    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((mealItem) => {
        // カテゴリーIDのindexが0以上、つまり存在するやつ全て返す
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })

    /**
     * 動的パラメータをこの画面で取得したい場合のやり方。（遷移先の画面タイトルとかを選んだIDを元に表示したい時とか）
     * (Laravelとかだとルーティングで渡すことが多いかも。もちろんApp.js内のルーティングでも渡せる。コメントアウトしてある部分参照）)
     * 
     * useEffectはこの画面が表示された時に実行されるが、アニメーションとか考慮せずに実行される。（useEffectは非同期だから）
     * そのため、遷移した直後に関数が実行されて文字が変わりましたよっていうのが一瞬写ってしまう。（これをちらつきという）
     * なので、useLayoutEffectを使う。これを使うと、ブラウザ描画前に同期的に実行されてちらつきがなくなる
     * 
     */
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

        // 公式ガイドにあるnavigationプロパティの全ての設定値を取得できる。
        navigation.setOptions({
            title: categoryTitle

        })
    }, [categoryId, navigation])

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
                data={displayedMeals}
                renderItem={renderMealItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})