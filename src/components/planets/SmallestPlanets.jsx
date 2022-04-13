import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./planets.module.css";
const SmallestPlanet = () => {
  const [SmallestPlanetStatus, setSmallestPlanetStatus] = useState("");
  const [showButton, setShowButton] = useState(true);

  const fetchSmallestPlanet = async () => {
    setSmallestPlanetStatus("");
    setShowButton(true);
    try {
      const result = await axios.get(
        "http://localhost:3001/planets/size/smallest"
      );
      console.log("result", result.data);
      setSmallestPlanetStatus(result.data);
      setShowButton(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p> Do you know which is the smallest planet? </p>
      <p className={style.statusPara}>{SmallestPlanetStatus}</p>
      {showButton && <Button onClickFunc={fetchSmallestPlanet} />}
    </div>
  );
};

export default SmallestPlanet;
