import { useState, useCallback, useMemo, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import calculateTotal from "./utils/calculateTotal";
import Modal from "./components/Modal";
import cn from "./utils/cn";
import Footer from "./components/Footer";

const reducer = (state, action) => {
  switch (action.type) {
    case "":
    default:
      return state;
  }
};

const initialState = { fav: [], total: 0 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [fav, setFav] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("white");

  const addToFav = useCallback((product) => {
    setFav((prev) => [...prev, product]);
  }, []);

  const removeFromFav = useCallback((product) => {
    setFav((prev) => prev.filter((item) => item.title !== product.title));
  }, []);

  const total = useMemo(() => calculateTotal(fav), [fav]);

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
        countFav={fav.length}
        total={total}
        changeTheme={changeTheme}
        theme={theme}
        setShowModal={setShowModal}
      />
      <Main
        addFav={addToFav}
        removeFav={removeFromFav}
        fav={fav}
        theme={theme}
      />
      {showModal && (
        <Modal fav={fav} total={total} setShowModal={setShowModal} />
      )}
      <Footer />
    </div>
  );
}

export default App;
