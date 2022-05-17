import Nav from "./components/Nav";
import Pages from "./pages/Pages";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
