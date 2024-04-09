import React from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../App";

const Worker = () => {
  const { workers } = React.useContext(DataContext);
  const fin = useParams().fin;
  const worker = workers.find((worker) => worker.fin === fin);
  return (
    <React.Fragment>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}>
        <span>Name: {worker.name}</span>
        <span>Surname: {worker.surname}</span>
        <span>Fin: {worker.fin}</span>
        <span>Salary: {worker.salary}</span>
        <div>
          {worker.activity &&
            worker.activity.map((item, index) => (
              <div key={index}>
                <span>day: {item.day}</span>
                <div>
                  {item &&
                    item.times.map((time, i) => (
                      <div key={i} style={{ display: "flex", gap: "1rem" }}>
                        <span>giris: {time.enterTime}</span>
                        <span>cixis: {time.exitTime}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Worker;
