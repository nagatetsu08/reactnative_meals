import { createContext, useState } from "react";

// ここは単なる箱を作るだけ。（いわゆるstore）
// poinnは、State変数だけでなく、それに対して変化を加える関数も含める。
export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}  
});


// storeで管理しているState変数とそれを変化させる関数の詳細を記述するコンポーネント
// レデューサーの役割を担う。
function FavoriteContextProvider({ children }) {

    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    // reduxではreducerになる
    function addFavorite(id) {
        setFavoriteMealIds((currentFavoriteIds) => [...currentFavoriteIds, id]);
    }

    // reduxではreducerになる
    function removeFavorite(id) {
        setFavoriteMealIds((currentFavoriteIds) => currentFavoriteIds.filter(mealId => mealId !== id));
    }

    // ここでFavoriteContextの初期化の値を作成し、下のProviderのvalueに渡すことでContextがcreateされて使えるようになる
    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;

}

export default FavoriteContextProvider;