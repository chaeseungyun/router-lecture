import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Box from "./Box";
import { useContext } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/:number" element={<Box />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
