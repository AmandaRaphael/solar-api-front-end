import {useState} from 'react'
import axios from "axios"
import Button from "../Button/Button.jsx";
import style from "./satellite.module.css";

const LeastDenseSatellite = () => {
     const [leastDensestSatelliteStatus, setleastDensestSatelliteStatus] =
         useState("");
    const [showButton, setShowButton] = useState(true);
    const fetchSatelliteleaseDensity = async () => {
        setleastDensestSatelliteStatus("")
        setShowButton(true)
       const result = await axios
         .get(`${process.env.REACT_APP_SERVER}/satellite/density?pick=lowest`)
         .then((res) => {
           
           setleastDensestSatelliteStatus(result.data);
           setShowButton(false);
         });
     };
    return (
      <div>
        <p> Do you know which is the least densest satellites? </p>
        <p className={style.statusPara}> {leastDensestSatelliteStatus}</p>
        {showButton && <Button onClickFunc={fetchSatelliteleaseDensity} />}
      </div>
    );
}

export default LeastDenseSatellite
