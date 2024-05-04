import Header from "./Components/Header";
import Shell from "./Components/Shell";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Shell />
      </BrowserRouter>
    </>
  );
}

export default App;
