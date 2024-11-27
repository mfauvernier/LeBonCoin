import { useState, useCallback, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import cn from "./utils/cn";
import Footer from "./components/Footer";

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("white");

  const addToFav = useCallback((product) => {
    dispatch({ type: "add_favorite", payload: product });
  }, []);

  const removeFromFav = useCallback((product) => {
    dispatch({ type: "remove_favorite", payload: product });
  }, []);

  const changeTheme = () => {
    setTheme((prev) => (prev === "white" ? "black" : "white"));
  };

  return (
    <div
      className={cn(
        theme === "white" ? "bg-white text-black" : "bg-black text-white",
      )}
    >
      <Header
        countFav={state.fav.length}
        total={state.total}
        changeTheme={changeTheme}
        theme={theme}
        setShowModal={setShowModal}
      />
      <Main
        addFav={addToFav}
        removeFav={removeFromFav}
        fav={state.fav}
        theme={theme}
      />
      {showModal && (
        <Modal
          fav={state.fav}
          total={state.total}
          setShowModal={setShowModal}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
