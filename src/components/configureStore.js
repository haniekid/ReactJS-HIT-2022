import { createStore, combineReducers } from "redux";
import counterReducer from "./counterSlice";

const reducer = combineReducers({
  counter: counterReducer,
});
const store = createStore(reducer); // tạo kho trạng thái
export default store;
