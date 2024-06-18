
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Ingredient = 'bread' | 'cheese' | 'salami';

// const initialState = { ingredients: [] };
const initialState = {ingredients: ""};


export const sandwichSlice = createSlice({
  name: "sandwich",
  initialState,
  reducers: {
    addIngredient(state, action: PayloadAction<Ingredient>) { state.ingredients = `${state.ingredients} ${action.payload}` },
      clearSandwich(state) { state.ingredients = "" },
    },
});


export const { addIngredient, clearSandwich } = sandwichSlice.actions;
export default sandwichSlice.reducer;
