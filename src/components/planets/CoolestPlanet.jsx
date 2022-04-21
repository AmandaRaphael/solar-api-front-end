import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./planets.module.css";

const CoolestPlanet = () => {
 const [coolestPlanetStatus, setcoolestPlanetStatus] = useState("");
 const [showButton, setShowButton] = useState(true);

 const fetchCoolestPlanet = async () => {
   setcoolestPlanetStatus("");
   setShowButton(true);
   try {
     const result = await axios.get(
       `${process.env.REACT_APP_SERVER}/planets/temperature/coldest`
     );
     setcoolestPlanetStatus(result.data);
     setShowButton(false);
   } catch (error) {
     console.log(error);
   }
 };
 return (
   <div>
     <p> Do you know which is the coolest planet ? </p>
     <p className={style.statusPara}>{coolestPlanetStatus}</p>
     {showButton && <Button onClickFunc={fetchCoolestPlanet} />}
   </div>
 );
};

export default CoolestPlanet;
