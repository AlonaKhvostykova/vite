import SandwichAction from "./sandwichAction";

// interface ISandwichState {ingredients: string[] }
// const initialState: ISandwichState = { ingredients: [] };

const initialState = { ingredients: [] };

export default function sandwichReducer(state = initialState, action: SandwichAction) {
  switch (action.type) {
    // case "add/bread":
    // case "add/cheese":
    // case "add/ham":
    //   return { ...state, ingredients: [...state.ingredients, action.payload] };
    case "add/ingredient":
      return {...state, ingredients: [...state.ingredients, action.payload.ingredient]  };

    case "remove/all":
      // return { ...state, ingredients: [] };
      return initialState;
    default:
      return state;
  }
}
