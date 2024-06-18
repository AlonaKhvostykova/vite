import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counterReducer";
import sandwichReducer from "./sandwichReducer";
import libraryReducer from "./libraryReducer";


const rootReducer = combineReducers({
  counter: counterReducer,
  sandwich: sandwichReducer,
  library: libraryReducer
});

const store = legacy_createStore(rootReducer);

// const store = legacy_createStore(
//   combineReducers({
//     counter: counterReducer,
//     sandwich: sandwichReducer,
//   })
// );



export default store;

export type RootState = ReturnType<typeof store.getState>;