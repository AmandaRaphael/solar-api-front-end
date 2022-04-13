import {useState} from 'react'
import axios from "axios"
import Button from "../Button/Button.jsx";
import style from "./satellite.module.css"
const DensestSatellite = () => {
     const [densestSatelliteStatus, setDensestSatelliteStatus] =
         useState("");
  const [showButton, setShowButton] = useState(true);
  const fetchSatellitedensity = async () => {
          setDensestSatelliteStatus("");
          setShowButton(true);
         try {
           const result = await axios.get(
         "http://localhost:3001/satellite/density?pick=highest"
       );
       setDensestSatelliteStatus(result.data);
    setShowButton(false)
         } catch (error) {
            console.log(error)
         }
        }
    return (
      <div>
        <p> Do you know which is the densest satellites?</p>
        <p className={style.statusPara}>{densestSatelliteStatus}</p>
        {showButton && <Button onClickFunc={fetchSatellitedensity}/>}
      </div>
    );
}

export default DensestSatellite
