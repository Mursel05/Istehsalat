import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EnterExitWorkers from "./components/EnterExitWorkers";
import Navbar from "./components/Navbar";
import AddWorker from "./components/AddWorker";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<EnterExitWorkers />} />
        <Route path="addUser" element={<AddWorker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
