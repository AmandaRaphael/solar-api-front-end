import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./planets.module.css";

const LeastMoonPlanets = () => {
  const [leastMoonStatus, setleastMoonStatus] = useState("");
  const [showButton, setShowButton] = useState(true);

  const fetchleastMoon = async () => {
    setleastMoonStatus("");
    setShowButton(true);
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER}/planets/moons/none`
      );
      console.log("result", result.data);
      setleastMoonStatus(result.data);
      setShowButton(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p> Do you know which planet has least number of moons? </p>
      <p className={style.statusPara}>{leastMoonStatus}</p>
      {showButton && <Button onClickFunc={fetchleastMoon} />}
    </div>
  );
};

export default LeastMoonPlanets;
