import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EnterExitWorkers from "./components/EnterExitWorkers";
import Navbar from "./components/Navbar";
import AddWorker from "./components/AddWorker";
import { createContext, useEffect, useState } from "react";
import Workers from "./components/Workers";
import DeleteWorker from "./components/DeleteWorker";
import Worker from "./components/Worker";
import Graduation from "./components/Graduation";
import Calendar from "./components/Calendar";

export const DataContext = createContext(null);
export const url =
  "https://istehsalat.onrender.com"
  // "http://localhost:4000";

function App() {
  const [workers, setWorkers] = useState([]);
  async function fetchData() {
    const response = await fetch(url + "/getWorkers");
    const data = await response.json();
    if (data) setWorkers(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ workers, fetchData }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EnterExitWorkers />} />
          <Route path="/addUser" element={<AddWorker />} />
          <Route path="/users" element={<Workers />} />
          <Route path="/delete" element={<DeleteWorker />} />
          <Route path="/users/:fin" element={<Worker />} />
          <Route path="/graduation" element={<Graduation />} />
          <Route path="/calendar" element={<Calendar />} />

        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
