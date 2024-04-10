import React from "react";
import data from "../../data";

const Calendar = () => {
  console.log(data);
  return (
    <div className="calendar-table" style={{ gap: "1rem" }}>
      {data.map((item) => (
        <table>
          <tr>
            <th>{item.monthName}</th>
          </tr>
          <tr>
            <td>Is gunleri:{item.day.map((element)=>{
              return <td>{element}</td>
            })}</td>
          </tr>
          <tr><span>Ayliq is vaxti:{item.hours} saat</span></tr>
          
        </table>
      ))}
    </div>
  );
};

export default Calendar;
