import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EnterExitWorkers from "./components/EnterExitWorkers";
import Navbar from "./components/Navbar";
import AddWorker from "./components/AddWorker";
import { createContext, useEffect, useState } from "react";
import Workers from "./components/Workers";
import DeleteWorker from "./components/DeleteWorker";

export const DataContext = createContext(null);

function App() {
  const [workers, setWorkers] = useState([]);
  async function fetchData() {
    const response = await fetch("http://localhost:4000/getWorkers");
    const data = await response.json();
    if (data) setWorkers(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(workers);
  return (
    <DataContext.Provider value={{ workers, fetchData }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EnterExitWorkers />} />
          <Route path="/addUser" element={<AddWorker />} />
          <Route path="/users" element={<Workers />} />
          <Route path="/delete" element={<DeleteWorker />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
