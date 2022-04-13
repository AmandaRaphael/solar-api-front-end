import { useState } from "react";
import axios from "axios";
import  Button  from "../Button/Button.jsx";
import style from "./satellite.module.css";


const LargestSatellite = () => {
  const [largestSatelliteStatus, setLargestSatelliteStatus] = useState("");
  const [showButton, setShowButton] = useState(true);
  
  const fetchLargestSatellite = async () => {
    setLargestSatelliteStatus("")
    setShowButton(true)
    try {
      const result = await axios.get(
        "http://localhost:3001/satellite/size?pick=largest"
      );
      setLargestSatelliteStatus(result.data);
      setShowButton(false)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p> Do you know which is the largest satellite?</p>
      <p className={style.statusPara}> {largestSatelliteStatus}</p>
      {showButton && <Button onClickFunc={fetchLargestSatellite} />}
    </div>
  );
};

export default LargestSatellite;
