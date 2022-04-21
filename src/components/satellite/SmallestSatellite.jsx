import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./satellite.module.css";

const SmallestSatellite = () => {
  const [smallestSatelliteStatus, setSmallestSatelliteStatus] = useState("");
  const [showButton, setShowButton] = useState(true);

  const fetchSmallestSatellite = async () => {
    setSmallestSatelliteStatus("");
    setShowButton(true);
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER}/satellite/size?pick=smallest`
      );
      setSmallestSatelliteStatus(result.data);
      setShowButton(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p> Do you know which is the smallest satellite? </p>
      <p className={style.statusPara}>{smallestSatelliteStatus}</p>
      {showButton && <Button onClickFunc={fetchSmallestSatellite} />}
    </div>
  );
};

export default SmallestSatellite;
