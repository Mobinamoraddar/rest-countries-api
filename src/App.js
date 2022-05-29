import Nav from "./components/Nav";
import Detail from "./components/Detail";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Countries from "./components/Countries";

const LightTheme = {
  pageBackground: "hsl(0, 0%, 98%)",
  textColor: "hsl(200, 15%, 8%)",
  inputColor: "hsl(0, 0%, 82%)",
  elementsColor: "hsl(0, 0%, 100%)",
  boxShadowColor: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
};
const DarkTheme = {
  pageBackground: "hsl(207, 26%, 17%)",
  textColor: "hsl(0, 0%, 100%)",
  inputColor: "hsl(0, 0%, 52%)",
  elementsColor: "hsl(209, 23%, 22%)",
  boxShadowColor: "rgba(0, 0, 0, 0.3) 0px 3px 8px",
};
const themes = {
  light: LightTheme,
  dark: DarkTheme,
};
const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body {
  width: 100vw;
  overflow-x: hidden;
    font-size: 14px;
    font-family: 'Nunito Sans', sans-serif; 
    background-color: ${(props) => props.theme.pageBackground};
    }`;

function App() {
  const [theme, setTheme] = useState("light");
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />

      <Nav changeTheme={changeTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
