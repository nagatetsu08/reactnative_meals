import { View, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGritTile";


// ナビゲーションを使用するために、外側にあったrenderCategoryItemを内部に移動させた
function CategoriesScreen({ navigation}) {

  function renderCategoryItem({ item }) {
    function pressHandler() {
      // 第二引数にパラメータをオブジェクト形式で渡せる
      navigation.navigate("MealsOverview", {
        categoryId: item.id
      });
    }

    return (
        <CategoryGridTile
            title={item.title}
            color={item.color}
            onPress={pressHandler}
        />
    );
  }

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