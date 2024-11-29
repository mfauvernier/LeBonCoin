import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");

  const changeTheme = () => {
    setTheme((prev) => (prev === "white" ? "black" : "white"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);
