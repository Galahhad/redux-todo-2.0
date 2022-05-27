import { createStore } from "redux";

const initialState = {
  todoArray: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "like_todo":
      return {
        ...state,
        todoArray: [
          ...state.todoArray.map((item) => {
            if (item.id === action.payload) {
              return { ...item, like: !item.like };
            }
            return item;
          }),
        ],
      };
    case "favorite_todo":
      return {
        ...state,
        todoArray: [
          ...state.todoArray.map((item) => {
            if (item.id === action.payload) {
              return { ...item, favorite: !item.favorite };
            }
            return item;
          }),
        ],
      };
    case "add_todo":
      return {
        ...state,
        todoArray: [
          {
            text: action.payload,
            like: false,
            favorite: false,
            id: Math.random() * 99999,
          },
          ...state.todoArray,
        ],
      };
    case "delete_todo":
      return {
        ...state,
        todoArray: [
          ...state.todoArray.filter((item) => item.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
