import { View, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGritTile";

function renderCategoryItem({ item }) {
    return (
        <CategoryGridTile
            title={item.title}
            color={item.color}
        />
    );
}

function CategoriesScreen() {
  return (
    <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem} //関数側で分割代入方式で引数を定義するとitemを直接参照できる
        keyExtractor={(item) => item.id}
        numColumns={2}  
    />
  );
}

export default CategoriesScreen;