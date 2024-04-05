import React from "react";

const AddWorker = () => {
  return (
    <React.Fragment>
      <form action="/">
        <h3>İşçi əlave et</h3>
        <div>
          <div>
            <label htmlFor="name">Ad: </label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="surname">Soyad: </label>
            <input type="text" id="surname" name="surname" required />
          </div>
          <div>
            <label htmlFor="fin">Fin: </label>
            <input type="text" id="fin" name="fin" required />
          </div>
          <div>
            <label htmlFor="salary">Maaş: </label>
            <input type="text" id="salary" name="salary" required />
          </div>
        </div>
        <button>Əlavə et</button>
      </form>
    </React.Fragment>
  );
};

export default AddWorker;
