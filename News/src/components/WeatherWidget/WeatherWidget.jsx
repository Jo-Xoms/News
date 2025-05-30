import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const WeatherWidget = () => {
  const [temp, setTemp] = useState(null);
  const [icon, setIcon] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "b1d2664871adb2bbe349299110c05be2";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ru`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.main) {
              setTemp(Math.round(data.main.temp));
              setIcon(data.weather[0].icon);
            } else {
              setError("Ошибка");
            }
          })
          .catch(() => setError("Ошибка"));
      },
      () => {
        setError("Нет доступа к геолокации");
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      {error ? (
        error
      ) : temp !== null ? (
        <>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="иконка погоды"
              className={styles.icon}
            />
          )}
          {temp}°C
        </>
      ) : (
        "…"
      )}
    </div>
  );
};

export default WeatherWidget;
