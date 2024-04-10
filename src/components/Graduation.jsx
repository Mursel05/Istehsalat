import React, { useState } from "react";
import { url } from "../App";

const Graduation = () => {
  const [fin, setFin] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  async function handleForm(e) {
    e.preventDefault();
    await fetch(url + "/graduation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fin, startTime, endTime }),
    });
  }
  return (
    <React.Fragment>
      <div>
        <h3>Məzuniyyət</h3>
        <form action="/" onSubmit={handleForm}>
          <div>
            <label htmlFor="fin">Fin: </label>
            <input
              value={fin}
              onChange={(e) => setFin(e.target.value)}
              type="text"
              id="fin"
              name="fin"
            />
          </div>
          <div>
            <label htmlFor="startTime">Başladığı tarix: </label>
            <input
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              type="date"
              id="startTime"
              name="startTime"
            />
          </div>
          <div>
            <label htmlFor="endTime">Bitdiyi tarix: </label>
            <input
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              type="date"
              id="endTime"
              name="endTime"
            />
          </div>
          <button type="submit">Əlavə et</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Graduation;
