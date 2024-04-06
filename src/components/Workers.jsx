import React, { useContext } from "react";
import { DataContext } from "../App";

const Workers = () => {
  const { workers } = useContext(DataContext);
  return (
    <React.Fragment>
      <div>
        {workers &&
          workers.map((user) => (
            <div
              key={user.fin}
              style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <span>{user.name + " " + user.surname}</span>
              <span>{user.fin}</span>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Workers;
