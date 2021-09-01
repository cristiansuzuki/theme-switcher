import React from "react";
import usePersistedState from "./utils/usePersistedState";
import { ThemeProvider, DefaultTheme } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Cards from "./components/Card/index";
import GlobalStyle from "./styles/global";
import Header from "./components/Header/index";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Cards />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
