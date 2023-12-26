import "./style.css";
import React, { useState, useEffect } from 'react';



function ClickerApp() {
  const [clicks, setClicks] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let timer;

    if (clicks > 0) {
      timer = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
      }, 10);
    } else {
      clearInterval(timer);
      setMilliseconds(0);
    }

    return () => clearInterval(timer);
  }, [clicks]);

  const handleClick = () => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  const handleReset = () => {
    setClicks(0);
    setMilliseconds(0);

  };

  return (
    <div>
      <h1>Кликер</h1>
      <p>Количество кликов: {clicks}</p>
      <p>Миллисекунды: {milliseconds}</p>
      <button onClick={handleClick}>Кликнуть</button>
      <button onClick={handleReset}>Сбросить</button>
    </div>
  );
}

export default ClickerApp;