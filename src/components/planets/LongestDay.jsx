import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./planets.module.css";

const LongestDay = () => {
  const [longestDayStatus, setlongestDayStatus] = useState("");
  const [showButton, setShowButton] = useState(true);

  const fetchlongestDay = async () => {
    setlongestDayStatus("");
    setShowButton(true);
    try {
      const result = await axios.get(
        "http://localhost:3001/planets/day/longest"
      );
      setlongestDayStatus(result.data);
      setShowButton(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p> Do you know which is the planet with longest day ? </p>
      <p className={style.statusPara}>{longestDayStatus}</p>
      {showButton && <Button onClickFunc={fetchlongestDay} />}
    </div>
  );
};

export default LongestDay;
