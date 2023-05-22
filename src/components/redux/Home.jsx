import axios from "axios";
import React, { useReducer, useState } from "react";

const Home = () => {
  //   const [state, dispatch] = useReducer(reducer, initialState);

  const countReducer = (state, action) => {
    switch (action) {
      case "tang":
        return state + 1;
      case "giam":
        return state - 1;
      case "nhan":
        return state * 2;
      case "chia":
        return state / 2;
      case "xoa":
        return 0;
      default:
        return state;
    }
  };

  const [count, countDispatch] = useReducer(countReducer, 1);

  // state = initialState
  const countReducer2 = (state, action) => {
    switch (action.type) {
      case "gan":
        return action.data;
      default:
        return state;
    }
  };
  const [count2, countDispatch2] = useReducer(countReducer2, 1);

  const initState = {
    loading: false,
    data: [],
    error: null,
  };

  const userReducer = (state, action) => {
    switch (action.type) {
      case "GET_USER_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_USER_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.data,
        };
      case "GET_USER_ERROR":
        return {
          ...state,
          data: [],
          error: action.data,
        };
    }
  };
  const [user, userDispatch] = useReducer(userReducer, initState);
  const getUser = () => {
    userDispatch({
      type: "GET_USER_REQUEST",
    });

    setTimeout(async () => {
      try {
        const res = await axios.get("https://reqres.in/api/users");
        userDispatch({
          type: "GET_USER_SUCCESS",
          data: res.data,
        });
      } catch (error) {
        userDispatch({
          type: "GET_USER_REQUEST",
          data: error,
        });
      }
    }, 2000);
  };
  return (
    <div>
      <p>Count 1: {count}</p>
      <button className="p-2 bg-pink-300" onClick={() => countDispatch("tang")}>
        Tăng
      </button>
      <button className="p-2 bg-red-300" onClick={() => countDispatch("giam")}>
        Giảm
      </button>
      <button className="p-2 bg-blue-300" onClick={() => countDispatch("xoa")}>
        Xóa
      </button>
      <button
        className="p-2 bg-green-300"
        onClick={() => countDispatch("nhan")}
      >
        Nhân 2
      </button>
      <button
        className="p-2 bg-orange-300"
        onClick={() => countDispatch("chia")}
      >
        Chia 2
      </button>
      <br /> <br /> <hr /> <br />
      <p>Count 2: {count2}</p>
      <button
        className="p-2 bg-orange-300"
        onClick={() =>
          countDispatch2({
            type: "gan",
            data: 10,
          })
        }
      >
        Gán giá trị
      </button>
      <br />
      <br /> <hr /> <br />
      <button className="p-2 bg-blue-300" onClick={getUser}>
        GET USER
      </button>
      {user.loading ? <p>Loading... </p> : <p>{JSON.stringify(user.data)}</p>}
    </div>
  );
};

export default Home;
