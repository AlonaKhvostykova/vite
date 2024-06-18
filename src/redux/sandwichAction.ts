// type Ingredient = 'bread' | 'cheese' | 'ham';
// type SandwichAction =
//   | { type: "add/ingredient"; payload: Ingredient }
//   | { type: "remove/all" };

type SandwichAction =
  | { type: "add/ingredient"; payload: { ingredient: string } }
  | { type: "remove/all" };

export const addIngredient = (ingredient: string): SandwichAction => ({
  type: "add/ingredient",
  payload: { ingredient },
});

export const removeAll = (): SandwichAction => ({
  type: "remove/all",
});

export default SandwichAction;

// type SandwichAction =
//   | { type: "add/bread"; payload: string }
//   | { type: "add/cheese"; payload: string }
//   | { type: "add/ham"; payload: string }
//   | { type: "remove/all" };

// type SandwichAction =
//   | {type: "add/ingredient"; payload: { ingredientType: string; ingredient: string }; }
//   | { type: "remove/all" };

// export const addIngredient = (ingredientType: string, ingredient: string): SandwichAction => ({
//   type: "add/ingredient", payload: { ingredientType, ingredient },
// });

// export const addBread = (ingredient: string): SandwichAction => ({
//   type: "add/bread",
//   payload: ingredient,
// });

// export const addCheese = (ingredient: string): SandwichAction => ({
//   type: "add/cheese",
//   payload: ingredient,
// });

// export const addHam = (ingredient: string): SandwichAction => ({
//   type: "add/ham",
//   payload: ingredient,
// });
