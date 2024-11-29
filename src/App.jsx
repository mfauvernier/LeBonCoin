import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import cn from "./utils/cn";
import Footer from "./components/Footer";
import { useThemeContext } from "./contexts/ThemeContext";

function App() {
  const [showModal, setShowModal] = useState(false);

  const { theme } = useThemeContext();

  return (
    <div
      className={cn(
        theme === "white" ? "bg-white text-black" : "bg-black text-white",
      )}
    >
      <Header setShowModal={setShowModal} />
      <Main />
      {showModal && <Modal setShowModal={setShowModal} />}
      <Footer />
    </div>
  );
}

export default App;
