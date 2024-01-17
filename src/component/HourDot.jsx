import React from "react";
import "./HourDot.css";

const HourDot = ({ second }) => {
  return (
    <div className="hour_dot">
      <span className={`ico_dot dot_12 ${second >= 1 ? "on" : ""}`} />
      <span className={`ico_dot dot_1 ${second >= 5 ? "on" : ""}`} />
      <span className={`ico_dot dot_2 ${second >= 10 ? "on" : ""}`} />
      <span className={`ico_dot dot_3 ${second >= 15 ? "on" : ""}`} />
      <span className={`ico_dot dot_4 ${second >= 20 ? "on" : ""}`} />
      <span className={`ico_dot dot_5 ${second >= 25 ? "on" : ""}`} />
      <span className={`ico_dot dot_6 ${second >= 30 ? "on" : ""}`} />
      <span className={`ico_dot dot_7 ${second >= 35 ? "on" : ""}`} />
      <span className={`ico_dot dot_8 ${second >= 40 ? "on" : ""}`} />
      <span className={`ico_dot dot_9 ${second >= 45 ? "on" : ""}`} />
      <span className={`ico_dot dot_10 ${second >= 50 ? "on" : ""}`} />
      <span className={`ico_dot dot_11 ${second >= 55 ? "on" : ""}`} />
    </div>
  );
};

export default HourDot;
