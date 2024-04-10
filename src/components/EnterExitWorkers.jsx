import React from "react";
import { DataContext, url } from "../App";

const EnterExitWorkers = () => {
  const { fetchData } = React.useContext(DataContext);
  const [fin, setFin] = React.useState("");
  async function handleForm(e) {
    e.preventDefault();
    try {
      await fetch(url + "/addActivity", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fin,
        }),
      });
      setFin("");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <form action="/" onSubmit={handleForm}>
        <h3>Giriş / Çıxış</h3>
        <div>
          <label htmlFor="id">Fin: </label>
          <input
            value={fin}
            onChange={(e) => setFin(e.target.value)}
            type="text"
          />
        </div>
        <button>Göndər</button>
      </form>
    </React.Fragment>
  );
};
export default EnterExitWorkers;
