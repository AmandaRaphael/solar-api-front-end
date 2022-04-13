
import SearchByName from "./SearchByName";
import DensestSatellite from "./DensestSatellite";
import LeastDenseSatellite from "./LeastDenseSatellite";
import SmallestSatellite from "./SmallestSatellite";
import LargestSatellite from "./LargestSatellite";

const Satellites = () => {


 

  return (
    <div >
      <SearchByName />
      <DensestSatellite />
      <LeastDenseSatellite />
     <SmallestSatellite/>
     <LargestSatellite/>
    </div>
  );
};

export default Satellites;
