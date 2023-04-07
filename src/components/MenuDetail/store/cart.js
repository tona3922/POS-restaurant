import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 20, name: [] };
const count = createSlice({
  name: "entity",
  initialState,
  reducers: {
    increase(state) {
      state.value++;
    },
    decrease(state) {
      state.value--;
    },
    increasebyAmount(state, action) {
      state.value += action.payload;
    },
    decreasebyAmount(state, action) {
      state.value -= action.payload;
    },
    pushname(state, action) {
      let arr = state.name;
      console.log(action.payload);
      for (let item = 0; item < arr.length; item++) {
        if (arr[item][0] === action.payload.name) {
          arr[item][1] += 1;
          return;
        }
      }
      state.name.push([action.payload.name, 1, action.payload.price]);
    },
    quantity_Arr_increment(state, action) {
      let arr = state.name;
      for (let item = 0; item < arr.length; item++) {
        if (arr[item][0] === action.payload.name) {
          arr[item][1] += 1;
          state.value += action.payload.price;
          return;
        }
      }
    },
    quantity_Arr_decrement(state, action) {
      let arr = state.name;
      for (let item = 0; item < arr.length; item++) {
        if (arr[item][0] === action.payload.name) {
          arr[item][1] -= 1;
          state.value -= action.payload.price;
          return;
        }
      }
    },
  },
});
export const {
  increase,
  decrease,
  increasebyAmount,
  decreasebyAmount,
  pushname,
  quantity_Arr_increment,
  quantity_Arr_decrement,
} = count.actions;
export const cnt = (state) => state.value.value;
export const myname = (state) => state.value.name;
// export const cnt = (state) => state.entity.entity;
export default count.reducer;
