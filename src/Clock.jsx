import React, { useState, useEffect } from "react";
import ProgressBar from "react-customizable-progressbar";
import moment from "moment";
import "moment/locale/ko";
import DateTime from "./component/DateTime";
import HourDot from "./component/HourDot";

import "./Clock.css";

const totalSeconds = 60;

const Clock = () => {
  const [year, setYear] = useState("2024");
  const [month, setMonth] = useState("1");
  const [day, setDay] = useState("1");
  const [weekday, setWeekday] = useState("월요일");
  const [hour, setHour] = useState("0");
  const [minute, setMinute] = useState("0");
  const [second, setSecond] = useState("0");
  const [secondProgress, setSecondProgress] = useState(0);

  const getTransition = () => {
    return secondProgress <= 0.01 || secondProgress >= 99.99
      ? "0.3s ease"
      : "0s ease";
  };

  useEffect(() => {
    const toString = (number, isTime = false) => {
      if (isTime) {
        return number < 10 ? "0" + String(number) : String(number);
      } else {
        return String(number);
      }
    };

    const getCurrentDateTime = () => {
      const currentDateTime = moment();

      const currentYear = currentDateTime.year();
      const currentMonth = currentDateTime.month() + 1;
      const currentDay = currentDateTime.date();
      const currentWeekday = currentDateTime.format("dddd");
      const currentHour = currentDateTime.hour();
      const currentMinute = currentDateTime.minute();
      const currentSecond = currentDateTime.second();
      const millisecond = currentDateTime.millisecond() / 1000;

      setYear(toString(currentYear));
      setMonth(toString(currentMonth));
      setDay(toString(currentDay));
      setWeekday(currentWeekday);
      setHour(toString(currentHour, true));
      setMinute(toString(currentMinute, true));
      setSecond(toString(currentSecond, true));
      setSecondProgress(((currentSecond + millisecond) / totalSeconds) * 100);
    };

    getCurrentDateTime();
    const clockInterval = setInterval(getCurrentDateTime, 10);

    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div className="clock">
      <ProgressBar
        radius={125}
        progress={secondProgress}
        strokeWidth={4}
        strokeColor="#9370db"
        trackStrokeWidth={4}
        trackStrokeColor="#e6e6e6"
        pointerRadius={6}
        pointerFill="white"
        pointerStrokeWidth={3}
        pointerStrokeColor="#9370db"
        transition={getTransition}
        trackTransition={getTransition}
      />
      <DateTime
        year={year}
        month={month}
        day={day}
        weekday={weekday}
        hour={hour}
        minute={minute}
        second={second}
      />
      <HourDot second={second} />
    </div>
  );
};

export default Clock;
