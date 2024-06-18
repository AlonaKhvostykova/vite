import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IUser { 
  id: number;
  name: string
}


interface ICounterUserState{ 
  user: IUser | null;
  status: 'idle' | 'loading' | 'success' | 'error';
  value: number
}


//опишем асинхр-е действие
export const fetchUser = createAsyncThunk('fetchUser', async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  //эти 2 действия объединям в одно с пом бибилиотеки axios (extraReducers)
  return data;
})






const initialState: ICounterUserState = {
  value: 0,
  status: 'idle',
  user: null
};

// const initialState = { value: 0 };


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {


    // minus(state, action) {state.value -- }
    minus(state, action: PayloadAction<number>) {
      state.value = state.value - action.payload;
    }, //название ф-ции - ключ, а тело ф-ции - ее значение
    plus(state, action: PayloadAction<number>) {
      state.value = state.value + action.payload;
    }, //ф-ция ничего не возвращает, поменялся оригинал
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => { state.status = 'loading' })
      .addCase(fetchUser.fulfilled, (state, action) => { state.status = 'success'; state.user = action.payload})
      .addCase(fetchUser.rejected, (state) => {state.status = 'error'})
  }
});


export const { minus, plus } = counterSlice.actions; //экспорт только действий c пом. деструктуризации
export default counterSlice.reducer;




