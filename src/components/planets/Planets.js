import FindByName from "./FindByName";
import LargestPlanet from "./LargestPlanet";
import LeastMoonPlanets from "./LeastMoonPlanets";
import MostMoonPlanets from "./MostMoonPlanets";
import ClosestToSun from "./ClosestToSun";
import FurthestFromSun from "./FurthestFromSun";
import HottestPlanet from "./HottestPlanet";
import CoolestPlanet from "./CoolestPlanet";
import ShortestDay from "./ShortestDay";
import LongestDay from "./LongestDay";
import SmallestPlanet from "./SmallestPlanets";

const Planets = () => {
  return (
    <div>
      <FindByName />
      <SmallestPlanet />
      <LargestPlanet />
      <LeastMoonPlanets />
      <MostMoonPlanets />
      <ClosestToSun />
      <FurthestFromSun />
      <HottestPlanet />
      <CoolestPlanet />
      <ShortestDay />
      <LongestDay />
    </div>
  );
};

export default Planets;
