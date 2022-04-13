import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./planets.module.css";

const ClosestToSun = () => {
    const [closestToSunStatus, setclosestToSunStatus] = useState("");
    const [showButton, setShowButton] = useState(true);

    const fetchClosestToSun = async () => {
           setclosestToSunStatus("");
           setShowButton(true);
        try {
                const result = await axios.get(
        "http://localhost:3001/planets/sun/closest"
      );
     
     setclosestToSunStatus(result.data);
     setShowButton(false);
        } catch (error) {
               console.log(error);
        }
   }; 
    return (
      <div>
        <p> Do you know which planet is closest to the Sun? </p>
        <p className={style.statusPara}>{closestToSunStatus}</p>
        {showButton && <Button onClickFunc={fetchClosestToSun} />}
      </div>
    );
};

export default ClosestToSun;
