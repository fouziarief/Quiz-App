import React, { useState, useEffect } from "react";

function Main({ setStop, question }) {
  const [timer, setTimer] = useState(150);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(150);
  }, [question]);

  return (
    <div className="main">
      <p className="timer">{timer}</p>
    </div>
  );
}

export default Main;
