/* eslint-disable */

import { createContext, useReducer, useContext } from "react";

const FavContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add_favorite":
      return {
        ...state,
        fav: [...state.fav, action.payload],
        total: state.total + action.payload.price,
      };
    case "remove_favorite": {
      const updatedFav = state.fav.filter(
        (item) => item.title !== action.payload.title,
      );
      return {
        ...state,
        fav: updatedFav,
        total: state.total - action.payload.price,
      };
    }
    default:
      return state;
  }
};

const initialState = { fav: [], total: 0 };

const FavProvider = ({ children }) => {
  const [favState, favDispatch] = useReducer(reducer, initialState);
  return (
    <FavContext.Provider
      value={{ fav: favState.fav, total: favState.total, favDispatch }}
    >
      {children}
    </FavContext.Provider>
  );
};

export default FavProvider;

export const useFavContext = () => useContext(FavContext);
