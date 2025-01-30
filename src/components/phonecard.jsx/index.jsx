import { Carddata } from "../../dummydata/carddata";
import PropTypes from "prop-types";
import {Singlecard} from "../singlecard";
export const Phonecard = ({Recomended}) => {
  return (
    <div className="p-2">
        <div className="flex items-center justify-between ">

       <h1 className="flex p-4 font-bold text-lg">
         {Recomended?"Recomended":"Trending"}
        </h1>
        <div className="flex items-center justify-around w-32">
            
<h1 className="border border-black border-double rounded-2xl p-2">view all</h1>
<i className="pi 
pi-arrow-circle-right text-[24px]"></i>
</div>
        </div>
        <div className="flex justify-between">

      {Carddata.map((item, index) => (
        <Singlecard key={index} Name={item.Name} src={item.src} Condition={item.Condition} Usedstartingat={item.Usedstartingat} Highestprice={item.Highestprice}  />
         
      ))}
      </div>
    </div>
  );
};

Phonecard.propTypes ={
    Recomended: PropTypes.bool.isRequired
}


