import { useDispatch, useSelector } from "react-redux";
import { addIngredient, clearSandwich } from "../redux_rtk/sandwichSlice";
import { RootState } from "../redux_rtk/storeRTK";

const Sandwich = () => {
  const ingredients = useSelector(
    (state: RootState) => state.sandwich.ingredients
  );
  const dispatch = useDispatch();

  function handleAddBread() {
    dispatch(addIngredient("bread"));
    // dispatch({ type: "sandwich/addIngredient", payload: "bread" });
  }

  function handleAddCheese() {
    dispatch(addIngredient("cheese"));
  }

  function handleAddSalami() {
    dispatch(addIngredient("salami"));
  }

  function handleDelete() {
    dispatch(clearSandwich());
  }

  return (
    <div>
      <h1>Choose your sandwich: </h1>
      <p>Sandwich: {ingredients}</p>
      <button onClick={handleAddBread}>Add bread</button>
      <button onClick={handleAddCheese}>Add cheese</button>
      <button onClick={handleAddSalami}>Add salami</button>
      <button onClick={handleDelete}>Delete all ingredients</button>
    </div>
  );
};

export default Sandwich;



// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux/store";
// import { addIngredient, removeAll } from "../redux/sandwichAction";

// const Sandwich = () => {
//   const ingredients = useSelector(
//     (state: RootState) => state.sandwich.ingredients
//   );
//   const dispatch = useDispatch();

//   const handleAddBread = () => dispatch(addIngredient("bread"));
//   // const handleAddBread = () =>  dispatch({ type: "add/ingredient", payload: "bread" });
//   const handleAddCheese = () => dispatch(addIngredient("cheese"));
//   const handleAddHam = () => dispatch(addIngredient("ham"));
//   const handleRemoveAll = () => dispatch(removeAll());

//   return (
//     <div>
//       <h2>Create your own sandwich</h2>
//       <div>
//         <div>Sandwich</div>
//         <button onClick={handleAddBread}>Add bread</button>
//         <button onClick={handleAddCheese}>Add cheese</button>
//         <button onClick={handleAddHam}>Add ham</button>
//         <button onClick={handleRemoveAll}>Remove ingredients</button>
//       </div>
//       <p>Your sandwich: {ingredients.join(", ")} </p>
//     </div>
//   );
// };

// export default Sandwich;
