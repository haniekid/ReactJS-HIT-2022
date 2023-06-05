import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const reducer = combineReducers({
  counter1: counterSlice,
});

const store = configureStore({
  reducer,
});

export default store;
