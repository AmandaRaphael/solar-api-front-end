import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./planets.module.css";

const MostMoonPlanets = () => {
          const [mostMoonStatus, setmostMoonStatus] = useState("");
          const [showButton, setShowButton] = useState(true);
    const fetchmostMoon = async () => {
         setmostMoonStatus("");
         setShowButton(true);
      try {
          const result = await axios.get("http://localhost:3001/planets/moons/most");
             setmostMoonStatus(result.data);
             setShowButton(false);
      } catch (error) {
            console.log(error);
      }
    
  };
    return (
      <div>
        <p> Do you know which planet has most number of moons? </p>
        <p className={style.statusPara}>{mostMoonStatus}</p>
        {showButton && <Button onClickFunc={fetchmostMoon} />}
      </div>
    );
};

export default MostMoonPlanets;
