import React, { useContext } from "react";
import { DataContext } from "../App";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Workers = () => {
  const navigate = useNavigate();
  const { workers } = useContext(DataContext);
  const [data, setData] = React.useState(workers);
  const [search, setSearch] = React.useState("");

  const filteredData = workers.filter((user) =>
    user.fin.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (search) setData(filteredData);
    else setData(workers);
  }, [search, workers]);

  return (
    <React.Fragment>
      <div style={{ marginTop: "1rem" }}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
        />
        <div>
          {data &&
            data.map((user) => (
              <div
                onClick={() => navigate(`/users/${user.fin}`)}
                key={user.fin}
                style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <span>{user.name + " " + user.surname}</span>
                <span>{user.fin}</span>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Workers;
