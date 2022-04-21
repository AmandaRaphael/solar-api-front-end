import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./planets.module.css";

const ShortestDay = () => {
 const [shortestDayStatus, setshortestDayStatus] = useState("");
 const [showButton, setShowButton] = useState(true);

 const fetchshortestDay = async () => {
   setshortestDayStatus("");
   setShowButton(true);
   try {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER}/planets/day/shortest`
      );
     setshortestDayStatus(result.data);
     setShowButton(false);
   } catch (error) {
     console.log(error);
   }
 };
 return (
   <div>
     <p> Do you know which is the planet with shortest day ? </p>
     <p className={style.statusPara}>{shortestDayStatus}</p>
     {showButton && <Button onClickFunc={fetchshortestDay} />}
   </div>
 );
};

export default ShortestDay;
