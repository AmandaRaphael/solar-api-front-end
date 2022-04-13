import {useState} from 'react'
import axios from "axios";
import Button from "../Button/Button.jsx"
import style from "./planets.module.css"
const FindByName = () => {
    const [inputValue, setInputValue] = useState("");
     const [searchResult, setSearchResult] = useState("");
 
    
     const findPlanetNameFunc = async (e) => {
         e.preventDefault();
         setSearchResult("");
      
         try {
             const result = await axios.get(
         `http://localhost:3001/planets/find/${inputValue}`
       );
          
           setSearchResult(result.data);
             
         } catch (error) {
               console.log(error);
         }
     
     };
     const displayString = (searchResult) => {
       return `${searchResult.name} has density ${searchResult.density} and it has a diameter of ${searchResult.diameter}. It's length of a day is ${searchResult.lengthOfDay}hrs and its distance from sun is ${searchResult.distanceFromSun}. It has a mean temperature of${searchResult.meanTemperature}.`;
     };
    return (
      <div>
        <form>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        
            <Button type="submit" onClickFunc={findPlanetNameFunc} />
          
        </form>
        <p className={style.statusPara}>
          {searchResult ? displayString(searchResult) : null}
        </p>
      </div>
    );
}

export default FindByName
