import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./planets.module.css";
const LargestPlanet = () => {
  const [largestPlanetStatus, setLargestPlanetStatus] = useState("");
  const [showButton, setShowButton] = useState(true);

  const fetchLargestPlanet = async () => {
    setLargestPlanetStatus("");
    setShowButton(true);
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER}/planets/size/largest`
      );
      console.log("result", result.data);
      setLargestPlanetStatus(result.data)
      setShowButton(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p> Do you know which is the largest planet? </p>
      <p className={style.statusPara}>{largestPlanetStatus}</p>
      {showButton && <Button onClickFunc={fetchLargestPlanet} />}
    </div>
  );
};

export default LargestPlanet;
