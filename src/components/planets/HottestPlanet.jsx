import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./planets.module.css";

const HottestPlanet = () => {
     const [hottestPlanetStatus, sethottestPlanetStatus] = useState("");
    const [showButton, setShowButton] = useState(true);

    const fetchHottestPlanet = async () => {
          sethottestPlanetStatus("");
          setShowButton(true);
           try {
                const result = await axios.get(
           "http://localhost:3001/planets/temperature/hottest"
         );
          sethottestPlanetStatus(result.data);
          setShowButton(false);
    
           } catch (error) {
                console.log(error);
           }
         };  
    return (
      <div>
        <p> Do you know which is the hottest planet ? </p>
        <p className={style.statusPara}>{hottestPlanetStatus}</p>
        {showButton && <Button onClickFunc={fetchHottestPlanet} />}
      </div>
    );
};

export default HottestPlanet;
