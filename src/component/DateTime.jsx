import React from "react";

import "./DateTime.css";

const DateTime = ({ year, month, day, weekday, hour, minute, second }) => {
  return (
    <div className="date_time">
      <h3 className="icon">Mukho</h3>
      <strong>
        <span className="time_hour">{hour}</span>
        <span className="time_ico">:</span>
        <span className="time_minute">{minute}</span>
        <span className="time_ico">:</span>
        <span
          className={`time_second ${second >= 50 ? "last_ten_second" : ""}`}
        >
          {second}
        </span>
      </strong>
      <p className="date">
        {year}.{month}.{day}. {weekday}
      </p>
    </div>
  );
};

export default DateTime;
