import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter1);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mt-5 mb-8">Count: {count}</h2>
      <div className="flex justify-between items-center gap-x-5">
        <button
          className="inline-block border p-2 border-blue-200"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block border p-2 border-blue-200"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
