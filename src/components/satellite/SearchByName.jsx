import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button.jsx";
import style from "./satellite.module.css";

const SearchByName = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState("");
  

  const findSatNameFunc = async (e) => {
    e.preventDefault();
    setSearchResult("");
   
    try {
      const result = await axios.get(
        `http://localhost:3001/satellite/find/${inputValue}`
      );
      // to see in the browser
      //  const res = JSON.stringify(result.data);
      setSearchResult(result.data);

    } catch (err) {
      console.log(err);
    }
  };

  const displayString = (searchResult) => {
    return `${searchResult.name} has density ${searchResult.density} and it has a magnitude of ${searchResult.magnitude}. It's radius is ${searchResult.radius} and weighs ${searchResult.gm}gm`;
  };
  return (
    <div>
      <form>
        <input
          placeholder="Search satellite by name"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
       <Button type="submit" onClickFunc={findSatNameFunc} />
      </form>
      <p className={style.statusPara}>
        {searchResult ? displayString(searchResult) : null}
      </p>
    </div>
  );
};

export default SearchByName;
