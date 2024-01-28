import {configureStore} from "@reduxjs/toolkit";
import favourites from "./favourites";

export const store = configureStore({
    reducer: {
        favouriteMeals: favourites
    }
})