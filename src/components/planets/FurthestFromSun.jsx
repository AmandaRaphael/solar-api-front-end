import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./planets.module.css";

const FurthestFromSun = () => {
  const [furthestToSunStatus, setfurthestToSunStatus] = useState("");
  const [showButton, setShowButton] = useState(true);

  const fetchFurthestToSun = async () => {
    setfurthestToSunStatus("");
    setShowButton(true);
      try {
            setfurthestToSunStatus("");
            setShowButton(true);
      const result = await axios.get(
        "http://localhost:3001/planets/sun/furthest"
      );
      setfurthestToSunStatus(result.data);
      setShowButton(false);
    } catch (error) {
      console.log(error);
    }
  };
    return (
      <div>
        <p> Do you know which planet is furthest to the Sun? </p>
        <p className={style.statusPara}>{furthestToSunStatus}</p>
        {showButton && <Button onClickFunc={fetchFurthestToSun} />}
      </div>
    );
};

export default FurthestFromSun;
