import React from "react";
import { DataContext } from "../App";

const AddWorker = () => {
  const { fetchData } = React.useContext(DataContext);
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [fin, setFin] = React.useState("");
  async function handleForm(e) {
    e.preventDefault();
    try {
      await fetch("http://localhost:4000/addWorker", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, fin, salary, activity: [] }),
      });
      setName("");
      setSurname("");
      setSalary("");
      setFin("");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <React.Fragment>
      <form action="/" onSubmit={handleForm}>
        <h3>İşçi əlave et</h3>
        <div>
          <div>
            <label htmlFor="name">Ad: </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <label htmlFor="surname">Soyad: </label>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="text"
              id="surname"
              name="surname"
              required
            />
          </div>
          <div>
            <label htmlFor="fin">Fin: </label>
            <input
              value={fin}
              onChange={(e) => setFin(e.target.value)}
              type="text"
              id="fin"
              name="fin"
              required
            />
          </div>
          <div>
            <label htmlFor="salary">Maaş: </label>
            <input
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              type="text"
              id="salary"
              name="salary"
              required
            />
          </div>
        </div>
        <button>Əlavə et</button>
      </form>
    </React.Fragment>
  );
};

export default AddWorker;
