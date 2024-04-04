import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EnterExitWorkers from "./components/EnterExitWorkers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnterExitWorkers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
