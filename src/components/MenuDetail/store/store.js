import { configureStore } from "@reduxjs/toolkit";

import cart from "./cart";
const store = configureStore({
  reducer: {
    value: cart,
  },
});
export default store;
