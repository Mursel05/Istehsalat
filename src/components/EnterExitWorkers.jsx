import React from "react";

const EnterExitWorkers = () => {
  const [fin, setFin] = React.useState("");
  function handleForm(e) {
    e.preventDefault();
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
