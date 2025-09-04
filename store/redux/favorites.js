import { createSlice } from "@reduxjs/toolkit";

// SliceはStateとReducers(Action)をまとめたものを定義するためたもの

const favoriesSlice = createSlice({
    name: 'favorites',
    // storeで管理する変数を定義
    initialState: {
        ids: []
    },
    // store上のstateを変化させるための関数を描く。
    // これらひとつ一つはActionになり、favoritesSlice.actionsにまとめられる。
    reducers: {
        // action
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1); // spliceは配列から要素を削除するメソッド(引数のidのindexを探してそこから1つ削除)
        }
    }
});

// 以下の定義は必要な箇所でactionをdispatchするために必要

export const { addFavorite, removeFavorite } = favoriesSlice.actions;


// 以下の定義はstore.jsでreducersをまとめるときに使うので定義する必要がある。
// 注意点として、favoriesSliceのreducersを返しているのではなく、stateとreducers（Action）をまとめたものを返すreducer関数をの結果をexportしている。
// 従って、下記の戻りオブジェクトはinitialStateとreducer両方にアクセス可能。
export default favoriesSlice.reducer;