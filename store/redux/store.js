import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from './favorites'

// React版reduxでいうところのrootReducerをここで定義するイメージ
export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer
    }
});

